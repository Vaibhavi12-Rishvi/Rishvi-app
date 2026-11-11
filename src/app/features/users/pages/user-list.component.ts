import { Component, inject, signal, effect, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { User, UserQueryParams, UserRole, RoleOption, ResetPasswordRequest } from '../../../models/user.model';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { IntegrationService } from '../../../core/services/integration.service';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: "app-user-list",
  imports: [
    DatePipe,
    FormsModule,
    TableModule,
    ButtonModule,
    TagModule,
    CardModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ToastModule,
    DialogModule,
    TooltipModule,
    AuditLogFilterBarComponent
  ],
  providers: [MessageService],
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);
  authService = inject(AuthService);

  // Constants
  private readonly DEFAULT_PAGE_SIZE = 50;

  // Role options for dropdown (defined first to be used in initialization)
  roleOptions: RoleOption[] = [
    { label: "All Roles", value: null },
    { label: "Admin", value: UserRole.Admin },
    { label: "Client", value: UserRole.Client },
  ];
   selectedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });

  // Form filter signals (for UI binding only - not triggering API calls)
  searchText = signal("");
  selectedRole = signal(this.roleOptions[0]);

  // Applied filter signals (these trigger API calls)
  private readonly appliedSearchText = signal("");
  private readonly appliedRole = signal<RoleOption>(this.roleOptions[0]);
  private readonly appliedInstallationId = signal<number | null>(null);

  // Dropdown options
  installationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);

  // Table state signals
  users = signal<User[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  totalPages = signal<number>(0);
  sortField = signal<string>("createdAtUtc");
  sortOrder = signal<number>(-1); // -1 for descending, 1 for ascending
  // Reset password dialog signals
  displayResetDialog = signal(false);
  selectedUserForReset = signal<User | null>(null);
  confirmationCode = signal("");
  generatedCode = signal("");
  resetLoading = signal(false);

  constructor() {
    // Effect only triggers on applied filters
    effect(() => {
      // Track only applied filters
      this.appliedSearchText();
      this.appliedRole();
      this.appliedInstallationId();

      // Load users only when applied filters change
      this.loadUsers();
    });
  }

  ngOnInit(): void {
    this.loadInstallationOptions();
  }

  loadInstallationOptions(): void {
    this.integrationService.getActiveInstallations().subscribe({
      next: (result) => {
        if (result.isSuccess && result.value) {
          this.installationOptions.set([
            { label: 'All', value: null },
            ...result.value.map(inst => ({
              label: `${inst.id}-${inst.email}`,
              value: inst.id
            }))
          ]);
        }
      }
    });
  }

  loadUsers(): void {
    const params: UserQueryParams = {
      searchText: this.appliedSearchText() ?? undefined,
      role: this.appliedRole().value ?? undefined,
      installationId: this.appliedInstallationId() ?? undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    this.loading.set(true);

    this.userService.getUsers(params).subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess && response.value) {
          this.users.set(response.value.data);
          this.totalCount.set(response.value.totalCount);
          this.totalPages.set(response.value.totalPages);
        } else {
          // Display error message if API returns error
          const errorMessage = response.message ?? response.error?.description ?? "Failed to load users";
          const errorCode = response.error?.code ? ` (${response.error.code})` : "";
          this.showError(errorMessage + errorCode, response.error?.validationErrors);
          this.users.set([]);
        }
      },
      error: (error) => {
        // This should rarely be hit now since service handles API errors
        this.loading.set(false);
        this.users.set([]);
        this.showError("An unexpected error occurred. Please try again.");
      },
    });
  }

  onPageChange(event: any): void {
    const page = Math.floor(event.first / event.rows) + 1;

    this.pageNumber.set(page);
    this.firstRow.set(event.first);
    this.pageSize.set(event.rows);

    // Manually call loadUsers since pagination is not in effect dependencies
    this.loadUsers();
  }

  onSort(event: any): void {
    this.sortField.set(event.field ?? "createdAtUtc");
    this.sortOrder.set(event.order);

    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Manually call loadUsers since sorting is not in effect dependencies
    this.loadUsers();
  }

  applyFilters(): void {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    this.appliedSearchText.set(this.searchText().trim());
    this.appliedRole.set(this.selectedRole());
    this.appliedInstallationId.set(this.selectedInstallation().value);
  }

  clearFilters(): void {
    this.searchText.set("");
    this.selectedRole.set(this.roleOptions[0]);
    this.selectedInstallation.set({ label: 'All', value: null });

    this.pageNumber.set(1);
    this.firstRow.set(0);

    this.appliedSearchText.set("");
    this.appliedRole.set(this.roleOptions[0]);
    this.appliedInstallationId.set(null);
  }

  getRoleSeverity(role: UserRole): "success" | "info" | "warn" | "danger" {
    switch (role) {
      case UserRole.Admin:
        return "danger";
      case UserRole.Client:
        return "info";
      default:
        return "info";
    }
  }

  getRoleLabel(role: UserRole): string {
    switch (role) {
      case UserRole.Admin:
        return "Admin";
      case UserRole.Client:
        return "Client";
      default:
        return "Unknown";
    }
  }

  navigateToCreate(): void {
    this.router.navigate(["/users/create"]);
  }

  getStatusSeverity(user: User): "success" | "danger" {
    return user.isActive ? this.getActiveStatusSeverity() : this.getInactiveStatusSeverity();
  }

  getStatusLabel(user: User): string {
    return user.isActive ? "Active" : "Inactive";
  }

  private getActiveStatusSeverity(): "success" {
    return "success";
  }

  private getInactiveStatusSeverity(): "danger" {
    return "danger";
  }

  compareRoleOptions(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
  }

  compareOptions(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
  }

  openResetPasswordDialog(user: User): void {
    this.selectedUserForReset.set(user);
    this.generatedCode.set(this.generateRandomCode());
    this.confirmationCode.set("");
    this.displayResetDialog.set(true);
  }

  closeResetPasswordDialog(): void {
    this.displayResetDialog.set(false);
    this.selectedUserForReset.set(null);
    this.confirmationCode.set("");
    this.generatedCode.set("");
  }

  confirmResetPassword(): void {
    const user = this.selectedUserForReset();

    if (!user) {
      return;
    }

    // Validate confirmation code
    if (this.confirmationCode().trim().toUpperCase() !== this.generatedCode()) {
      this.showError("Incorrect confirmation code. Please try again.");
      return;
    }

    const request: ResetPasswordRequest = {
      email: user.email,
    };

    this.resetLoading.set(true);

    this.userService.resetPassword(request).subscribe({
      next: (response) => {
        this.resetLoading.set(false);

        if (response.isSuccess) {
          this.showSuccess(response.message ?? `Password reset successfully. New password sent to ${user.email}`);
          this.closeResetPasswordDialog();
        } else {
          // Display error message or description with code
          const errorMessage = response.message ?? response.error?.description ?? "Failed to reset password";
          const errorCode = response.error?.code ? ` (${response.error.code})` : "";
          this.showError(errorMessage + errorCode, response.error?.validationErrors);
        }
      },
      error: (error) => {
        // This should rarely be hit now since service handles API errors
        this.resetLoading.set(false);
        this.showError("An unexpected error occurred. Please try again.");
      },
    });
  }

  private generateRandomCode(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  private showSuccess(message: string): void {
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  }

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: message + (validationErrors?.length ? "\n" + validationErrors.join("\n") : ""),
      life: 5000,
    });
  }
}
