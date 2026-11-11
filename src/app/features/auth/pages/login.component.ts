import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { finalize, take } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';
import { TopbarComponent } from '../../../layout/topbar/topbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, TopbarComponent, ButtonModule, CheckboxModule, InputTextModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly messageService = inject(MessageService);

  usernameOrEmail = signal('');
  password = signal('');
  rememberMe = signal(true);
  loading = signal(false);

  constructor() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  submit(): void {
    const username = this.usernameOrEmail().trim();
    const password = this.password();

    if (!username || !password) {
      this.showError('Please enter your username/email and password.');
      return;
    }

    this.loading.set(true);
    this.authService
      .login(
        {
          email: username,
          password: password,
        },
        this.rememberMe(),
      )
      .pipe(
        take(1),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (response) => {
          if (response.isSuccess) {
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard';
            this.router.navigateByUrl(returnUrl);
          } else if (response.error) {
            this.showError(response.error.description, response.error.validationErrors);
          }
        },
        error: () => {
          this.showError('Unable to sign in. Please try again.');
        },
      });
  }

  private showError(message: string, validationErrors?: string[]): void {
    const detail = validationErrors && validationErrors.length > 0 ? validationErrors.join(', ') : message;

    this.messageService.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: detail,
      life: 5000,
    });
  }
}
