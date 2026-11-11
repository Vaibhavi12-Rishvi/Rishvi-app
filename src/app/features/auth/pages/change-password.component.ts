import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { ChangePasswordRequest } from '../../../models/user.model';

@Component({
  selector: 'app-change-password',
  imports: [FormsModule, ButtonModule, CardModule, InputTextModule, PasswordModule, ToastModule],
  providers: [MessageService],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent {
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  currentPassword = signal('');
  newPassword = signal('');
  confirmPassword = signal('');
  loading = signal(false);

  onSubmit(): void {
    // Validation
    if (!this.currentPassword().trim()) {
      this.showError('Current password is required');
      return;
    }

    if (!this.newPassword().trim()) {
      this.showError('New password is required');
      return;
    }

    if (this.newPassword().length < 6) {
      this.showError('New password must be at least 6 characters long');
      return;
    }

    if (this.newPassword() !== this.confirmPassword()) {
      this.showError('New password and confirm password do not match');
      return;
    }

    if (this.currentPassword() === this.newPassword()) {
      this.showError('New password must be different from current password');
      return;
    }

    this.changePassword();
  }

  private changePassword(): void {
    const request: ChangePasswordRequest = {
      currentPassword: this.currentPassword(),
      newPassword: this.newPassword(),
      confirmNewPassword: this.confirmPassword(),
    };

    this.loading.set(true);

    this.userService.changePassword(request).subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess) {
          this.showSuccess(response.message ?? 'Password changed successfully');

          // Clear form
          this.currentPassword.set('');
          this.newPassword.set('');
          this.confirmPassword.set('');

          // Navigate back after a short delay
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1500);
        } else {
          // Display error message or description with code
          const errorMessage = response.message ?? response.error?.description ?? 'Failed to change password';
          const errorCode = response.error?.code ? ` (${response.error.code})` : '';
          this.showError(errorMessage + errorCode, response.error?.validationErrors);
        }
      },
      error: (error) => {
        // This should rarely be hit now since service handles API errors
        this.loading.set(false);
        this.showError('An unexpected error occurred. Please try again.');
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message + (validationErrors?.length ? '\n' + validationErrors.join('\n') : ''),
      life: 5000,
    });
  }

  private showSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000,
    });
  }
}
