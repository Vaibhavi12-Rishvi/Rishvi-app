import { Component, inject, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UserService, CreateUserRequest } from '../../../core/services/user.service';
import { InstallationService } from '../../../core/services/installation.service';
import { Installation } from '../../../models/installation.model';
import { UserRole } from '../../../models/auth.model';

interface RoleOption {
  label: string;
  value: UserRole;
}

interface InstallationOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, FormsModule, CardModule, ButtonModule, InputTextModule, CheckboxModule, ToastModule],
  providers: [MessageService],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent {
  private readonly userService = inject(UserService);
  private readonly installationService = inject(InstallationService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  // Role options (defined first to be used in signal initialization)
  roleOptions: RoleOption[] = [
    { label: 'Admin', value: UserRole.Admin },
    { label: 'Client', value: UserRole.Client },
  ];

  UserRole = UserRole;

  // Form signals
  email = signal('');
  selectedRole = signal<RoleOption>(this.roleOptions[0]);
  selectedInstallation = signal<InstallationOption | null>(null);
  sendWelcomeEmail = signal(true);

  // State signals
  loading = signal(false);
  loadingInstallations = signal(false);
  installations = signal<InstallationOption[]>([]);

  // Validation signals
  emailError = signal('');
  roleError = signal('');
  installationError = signal('');

  constructor() {
    // Load active installations when component initializes
    effect(
      () => {
        this.loadActiveInstallations();
      },
      { allowSignalWrites: true },
    );
  }

  loadActiveInstallations(): void {
    this.loadingInstallations.set(true);

    this.installationService.getActiveInstallations().subscribe({
      next: (result) => {
        this.loadingInstallations.set(false);

        if (result.isSuccess && result.value) {
          const options: InstallationOption[] = result.value.map((inst: Installation) => ({
            label: `${inst.email}`,
            value: inst.id,
          }));
          this.installations.set(options);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.installations.set([]);
        }
      },
      error: (error) => {
        this.loadingInstallations.set(false);
        this.installations.set([]);
        this.showError('Failed to load installations', [error.message]);
      },
    });
  }

  validateForm(): boolean {
    let isValid = true;

    // Reset errors
    this.emailError.set('');
    this.roleError.set('');
    this.installationError.set('');

    // Validate email
    if (!this.email() || this.email().trim() === '') {
      this.emailError.set('Email is required');
      isValid = false;
    } else if (!this.isValidEmail(this.email())) {
      this.emailError.set('Please enter a valid email address');
      isValid = false;
    }

    // Validate role
    if (!this.selectedRole()) {
      this.roleError.set('Role is required');
      isValid = false;
    }

    // Validate installation for Client role
    if (this.selectedRole().value === UserRole.Client && !this.selectedInstallation()) {
      this.installationError.set('Installation is required for Client role');
      isValid = false;
    }

    return isValid;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Validation Error',
        detail: 'Please fix the form errors before submitting',
        life: 5000,
      });
      return;
    }

    const request: CreateUserRequest = {
      email: this.email().trim(),
      installationId: this.selectedRole().value === UserRole.Admin ? null : this.selectedInstallation()?.value ?? null,
      sendWelcomeEmail: this.sendWelcomeEmail(),
    };

    this.loading.set(true);

    this.userService.createUser(request).subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User created successfully',
            life: 3000,
          });

          // Navigate back to users list after a short delay
          setTimeout(() => {
            this.router.navigate(['/users']);
          }, 1000);
        } else {
          // Display error message or description with code
          const errorMessage = response.message ?? response.error?.description ?? 'Failed to create user';
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
    this.router.navigate(['/users']);
  }

  onRoleChange(): void {
    // Clear installation selection when switching to Admin role
    if (this.selectedRole().value === UserRole.Admin) {
      this.selectedInstallation.set(null);
      this.installationError.set('');
    }
  }

  compareRoleOptions(o1: RoleOption | null, o2: RoleOption | null): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
  }

  compareInstallationOptions(o1: InstallationOption | null, o2: InstallationOption | null): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
  }

  private showError(message: string, validationErrors?: string[]): void {
    const detail = validationErrors && validationErrors.length > 0 ? validationErrors.join('\n') : message;

    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: detail,
      life: 5000,
    });
  }
}
