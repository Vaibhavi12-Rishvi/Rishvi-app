import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse, LoginResponseValue, UserInfo, UserRole } from '../../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'si_access_token';
  private readonly userInfoKey = 'si_user_info';
  private readonly rememberKey = 'si_remember_me';
  private readonly tabCountKey = 'si_tab_count';
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly tokenSignal = signal<string | null>(null);
  private readonly userInfoSignal = signal<UserInfo | null>(null);

  token = this.tokenSignal.asReadonly();
  userInfo = this.userInfoSignal.asReadonly();
  isAuthenticated = computed(() => !!this.tokenSignal());
  userEmail = computed(() => this.userInfoSignal()?.email ?? null);
  userRole = computed(() => this.userInfoSignal()?.role ?? null);
  isAdmin = computed(() => this.userInfoSignal()?.role === UserRole.Admin);
  isClient = computed(() => this.userInfoSignal()?.role === UserRole.Client);
  installationId = computed(() => this.userInfoSignal()?.installationId ?? null);
  installationEmail = computed(() => this.userInfoSignal()?.installationEmail ?? null);

  constructor() {
    this.loadUserDataFromStorage();
    this.setupCrossTabSync();
    this.incrementTabCount();
  }

  login(request: LoginRequest, rememberMe: boolean): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/api/users/login`, request).pipe(
      tap((response) => {
        if (response.isSuccess && response.value) {
          this.setUserData(response.value, rememberMe);
        }
      }),
      catchError((error) => {
        console.error('Error logging in:', error);

        if (error.error && typeof error.error === 'object' && 'isSuccess' in error.error) {
          const loginResponse: LoginResponse = error.error;
          return of(loginResponse);
        }

        const loginResponse: LoginResponse = {
          isSuccess: false,
          message: error.error?.message ?? error.error?.title ?? 'Error occurred while logging in',
          value: null,
          error: {
            code: error.error?.error?.code ?? 'LOGIN_ERROR',
            description: error.error?.error?.description ?? error.error?.message ?? error.message ?? 'Unknown error',
            errorType: 1,
            validationErrors: error.error?.errors ? Object.values(error.error.errors).flat().map(String) : [],
          },
        };

        return of(loginResponse);
      }),
    );
  }

  logout(): void {
    this.clearUserData();
    this.router.navigate(['/login']);
  }

  getAccessToken(): string | null {
    return this.tokenSignal();
  }

  /** Returns the currently stored user session, or null if not logged in. Used by login page to detect active sessions. */
  getExistingSession(): UserInfo | null {
    const userInfoStr = localStorage.getItem(this.userInfoKey);
    if (!userInfoStr) return null;
    try {
      const parsed: UserInfo = JSON.parse(userInfoStr);
      return parsed;
    } catch {
      return null;
    }
  }

  setUserData(data: LoginResponseValue, rememberMe: boolean): void {
    const userInfo: UserInfo = {
      email: data.email,
      role: data.role,
      installationId: data.installationId,
      installationEmail: data.installationEmail,
    };

    this.tokenSignal.set(data.jwtToken);
    this.userInfoSignal.set(userInfo);

    localStorage.setItem(this.tokenKey, data.jwtToken);
    localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));
    localStorage.setItem(this.rememberKey, rememberMe ? 'true' : 'false');

    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userInfoKey);
  }

  clearUserData(): void {
    this.tokenSignal.set(null);
    this.userInfoSignal.set(null);
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userInfoKey);
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userInfoKey);
    localStorage.removeItem(this.rememberKey);
  }

  private loadUserDataFromStorage(): void {
    const token = localStorage.getItem(this.tokenKey);
    const userInfoStr = localStorage.getItem(this.userInfoKey);

    if (token) {
      this.tokenSignal.set(token);
    }
    if (userInfoStr) {
      try {
        const parsed: UserInfo = JSON.parse(userInfoStr);
        this.userInfoSignal.set(parsed);
      } catch {
        this.clearUserData();
      }
    }
  }

  private setupCrossTabSync(): void {
    globalThis.addEventListener('storage', this.onStorageChange.bind(this));
    globalThis.addEventListener('beforeunload', this.onBeforeUnload.bind(this));
  }

  private onStorageChange(event: StorageEvent): void {
    if (event.key === this.tokenKey) {
      if (!event.newValue) {
        this.tokenSignal.set(null);
        this.userInfoSignal.set(null);
        this.router.navigate(['/login']);
      } else if (event.newValue !== this.tokenSignal()) {
        globalThis.location.reload();
      }
    }

    if (event.key === this.userInfoKey && event.newValue) {
      try {
        const userInfo: UserInfo = JSON.parse(event.newValue);
        this.userInfoSignal.set(userInfo);
      } catch {
      }
    }
  }

  /**
   * Tracks open tab count so auth data can be cleared when the last tab closes (if "Remember Me" is off).
   * Note: If the browser crashes, beforeunload won't fire and the counter may become stale.
   * This is acceptable — the user simply stays logged in until manual logout or token expiry.
   */
  private incrementTabCount(): void {
    const count = Number.parseInt(localStorage.getItem(this.tabCountKey) ?? '0', 10);
    localStorage.setItem(this.tabCountKey, String(count + 1));
  }

  private onBeforeUnload(): void {
    const count = Number.parseInt(localStorage.getItem(this.tabCountKey) ?? '1', 10);
    const newCount = Math.max(count - 1, 0);
    localStorage.setItem(this.tabCountKey, String(newCount));

    if (newCount === 0 && localStorage.getItem(this.rememberKey) !== 'true') {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.userInfoKey);
      localStorage.removeItem(this.rememberKey);
      localStorage.removeItem(this.tabCountKey);
    }
  }
}
