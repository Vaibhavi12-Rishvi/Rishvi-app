import { Injectable, inject, signal } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { environment } from "../../../environments/environment";
import {
  User,
  UserQueryParams,
  UserResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "../../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/users`;

  // Signals for state management
  users = signal<User[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  totalCount = signal<number>(0);
  currentPage = signal<number>(1);
  pageSize = signal<number>(10);
  totalPages = signal<number>(0);

  /**
   * Get paginated and filtered users (Admin only)
   */
  getUsers(params?: UserQueryParams): Observable<UserResponse> {
    const httpParams = this.buildHttpParams(params);

    this.loading.set(true);
    this.error.set(null);

    return this.http.get<UserResponse>(this.apiUrl, { params: httpParams }).pipe(
      catchError((error) => {
        console.error("Error fetching users:", error);
        this.error.set("Failed to fetch users");
        this.loading.set(false);

        // Check if error.error is the API response format
        if (error.error && typeof error.error === "object" && "isSuccess" in error.error) {
          const apiResponse: UserResponse = error.error;
          return of(apiResponse);
        }

        // Fallback for other error formats
        const fetchErrorResponse: UserResponse = {
          isSuccess: false,
          message: error.error?.message ?? "Error occurred while fetching users",
          error: {
            code: error.error?.error?.code ?? "FETCH_ERROR",
            description: error.error?.error?.description ?? error.error?.message ?? error.message ?? "Unknown error",
            errorType: 1,
            validationErrors: error.error?.errors ? Object.values(error.error.errors).flat().map(String) : [],
          },
        };
        return of(fetchErrorResponse);
      }),
    );
  }

  /**
   * Build HTTP params from query parameters
   */
  private buildHttpParams(params?: UserQueryParams): HttpParams {
    let httpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    const paramConfig: Array<{
      key: string;
      value: any;
      condition: boolean;
    }> = [
      { key: "SearchText", value: params.searchText, condition: !!params.searchText },
      { key: "Role", value: params.role?.toString(), condition: params.role !== undefined && params.role !== null },
      { key: "InstallationId", value: params.installationId?.toString(), condition: params.installationId !== undefined },
      { key: "PageNumber", value: params.pageNumber?.toString(), condition: params.pageNumber !== undefined },
      { key: "PageSize", value: params.pageSize?.toString(), condition: params.pageSize !== undefined },
      { key: "SortBy", value: params.sortBy, condition: !!params.sortBy },
      { key: "SortDescending", value: params.sortDescending?.toString(), condition: params.sortDescending !== undefined },
    ];

    paramConfig.forEach(({ key, value, condition }) => {
      if (condition) {
        httpParams = httpParams.set(key, value);
      }
    });

    return httpParams;
  }

  /**
   * Update signals with API response data
   */
  updateSignalsFromResponse(response: UserResponse): void {
    this.loading.set(false);

    if (response.isSuccess && response.value) {
      this.users.set(response.value.data);
      this.totalCount.set(response.value.totalCount);
      this.currentPage.set(response.value.pageNumber);
      this.pageSize.set(response.value.pageSize);
      this.totalPages.set(response.value.totalPages);
      this.error.set(null);
    } else {
      this.users.set([]);
      this.totalCount.set(0);
      this.error.set(response.error?.description ?? "Unknown error occurred");
    }
  }

  /**
   * Create a new user (Admin only)
   */
  createUser(request: CreateUserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.apiUrl, request).pipe(
      catchError((error) => {
        console.error("Error creating user:", error);

        // Check if error.error is the API response format
        if (error.error && typeof error.error === "object" && "isSuccess" in error.error) {
          const apiResponse: UserResponse = error.error;
          return of(apiResponse);
        }

        // Fallback for other error formats
        const createErrorResponse: UserResponse = {
          isSuccess: false,
          message: error.error?.message ?? error.error?.title ?? "Error occurred while creating user",
          error: {
            code: error.error?.error?.code ?? "CREATE_ERROR",
            description: error.error?.error?.description ?? error.error?.message ?? error.message ?? "Unknown error",
            errorType: 1,
            validationErrors: error.error?.errors ? Object.values(error.error.errors).flat().map(String) : [],
          },
        };
        return of(createErrorResponse);
      }),
    );
  }

  /**
   * Change password for currently logged-in user
   */
  changePassword(request: ChangePasswordRequest): Observable<ChangePasswordResponse> {
    return this.http.post<ChangePasswordResponse>(`${this.apiUrl}/change-password`, request).pipe(
      catchError((error) => {
        console.error("Error changing password:", error);

        // Check if error.error is the API response format
        if (error.error && typeof error.error === "object" && "isSuccess" in error.error) {
          const apiResponse: ChangePasswordResponse = error.error;
          return of(apiResponse);
        }

        // Fallback for other error formats
        const changePasswordErrorResponse: ChangePasswordResponse = {
          isSuccess: false,
          message: error.error?.message ?? error.error?.title ?? "Error occurred while changing password",
          error: {
            code: error.error?.error?.code ?? "CHANGE_PASSWORD_ERROR",
            description: error.error?.error?.description ?? error.error?.message ?? error.message ?? "Unknown error",
            errorType: 1,
            validationErrors: error.error?.errors ? Object.values(error.error.errors).flat().map(String) : [],
          },
        };
        return of(changePasswordErrorResponse);
      }),
    );
  }

  /**
   * Reset password for a user (Admin only)
   */
  resetPassword(request: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    return this.http.post<ResetPasswordResponse>(`${this.apiUrl}/reset-password`, request).pipe(
      catchError((error) => {
        console.error("Error resetting password:", error);

        // Check if error.error is the API response format
        if (error.error && typeof error.error === "object" && "isSuccess" in error.error) {
          const apiResponse: ResetPasswordResponse = error.error;
          return of(apiResponse);
        }

        // Fallback for other error formats
        const resetPasswordErrorResponse: ResetPasswordResponse = {
          isSuccess: false,
          message: error.error?.message ?? error.error?.title ?? "Error occurred while resetting password",
          error: {
            code: error.error?.error?.code ?? "RESET_PASSWORD_ERROR",
            description: error.error?.error?.description ?? error.error?.message ?? error.message ?? "Unknown error",
            errorType: 1,
            validationErrors: error.error?.errors ? Object.values(error.error.errors).flat().map(String) : [],
          },
        };
        return of(resetPasswordErrorResponse);
      }),
    );
  }
}

export interface CreateUserRequest {
  email: string;
  installationId: number | null;
  sendWelcomeEmail: boolean;
}
