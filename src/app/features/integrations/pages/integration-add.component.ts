import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { IntegrationService } from "../../../core/services/integration.service";
import { AuthService } from "../../../core/services/auth.service";
import {
  CreateIntegrationPayload,
  Integration,
  IntegrationProfileTypeOption,
  UpsertIntegrationPayload,
} from "../../../models/integration.model";
import { ActiveInstallation } from "../../../models/installation.model";
import { PasswordModule } from "primeng/password";

@Component({
  selector: "app-integration-add",
  imports: [FormsModule, RouterLink, ButtonModule, CardModule, InputTextModule, ToastModule, PasswordModule],
  providers: [MessageService],
  templateUrl: "./integration-add.component.html",
  styleUrl: "./integration-add.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationAddComponent {
  private readonly integrationService = inject(IntegrationService);
  readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  integrationId = signal<number | null>(null);
  isEditMode = signal(false);
  formLoading = signal(false);

  streamClientId = signal("");
  streamClientSecret = signal("");
  integrationName = signal("");
  streamUrl = signal("");
  orderLookbackDays = signal(365);
  isActive = signal(true);
  isOrderSyncEnabled = signal(true);
  isOrderDispatchSyncEnabled = signal(true);
  useCurrentDateAsHandsOnDate = signal(true);
  updateTrackingAfterPlanning = signal(true);
  isWebhookFeaturesEnabled = signal(true);
  isUsingStreamPartnerAccount = signal(false);
  streamPartnerAccountId = signal("");
  streamPartnerAccountName = signal("");
  orderNumPrefix = signal("");
  addTrackingToOrderNote = signal(false);
  enableAutomaticOrderSync = signal(false);
  profileType = signal("");
  selectedInstallationId = signal<number | null>(null);

  profileTypeOptions = signal<IntegrationProfileTypeOption[]>([]);
  installationOptions = signal<ActiveInstallation[]>([]);
  profileTypesLoading = signal(false);
  installationsLoading = signal(false);
  submitting = signal(false);

  // Validation signals
  streamClientIdError = signal("");
  streamClientSecretError = signal("");
  integrationNameError = signal("");
  streamUrlError = signal("");
  orderLookbackDaysError = signal("");
  profileTypeError = signal("");
  installationIdError = signal("");
  streamPartnerAccountIdError = signal("");
  streamPartnerAccountNameError = signal("");
  orderNumPrefixError = signal("");

  constructor() {
    this.initializeInstallationState();
    this.loadProfileTypes();
    this.initializeMode();
  }

  private initializeInstallationState(): void {
    if (this.authService.isAdmin()) {
      this.loadActiveInstallations();
      return;
    }

    this.selectedInstallationId.set(this.authService.installationId());
  }

  loadActiveInstallations(): void {
    this.installationsLoading.set(true);

    this.integrationService.getActiveInstallations().subscribe({
      next: (result) => {
        this.installationsLoading.set(false);

        if (result.isSuccess && result.value) {
          this.installationOptions.set(result.value);
          return;
        }

        if (result.error) {
          this.showError("Failed to load installations", result.error.validationErrors);
        }
      },
      error: (error) => {
        this.installationsLoading.set(false);
        this.showError("Failed to load installations", [error.message]);
      },
    });
  }

  private initializeMode(): void {
    const editIdParam = this.route.snapshot.queryParamMap.get("id");
    const parsedId = editIdParam ? Number(editIdParam) : Number.NaN;

    if (!Number.isNaN(parsedId) && parsedId > 0) {
      this.integrationId.set(parsedId);
      this.isEditMode.set(true);
      this.loadIntegrationForEdit(parsedId);
    }
  }

  loadProfileTypes(): void {
    this.profileTypesLoading.set(true);

    this.integrationService.getIntegrationProfileTypes().subscribe({
      next: (result) => {
        this.profileTypesLoading.set(false);

        if (result.isSuccess && result.value) {
          this.profileTypeOptions.set(result.value);
          return;
        }

        if (result.error) {
          this.showError("Failed to load profile types", result.error.validationErrors);
        }
      },
      error: (error) => {
        this.profileTypesLoading.set(false);
        this.showError("Failed to load profile types", [error.message]);
      },
    });
  }

  private loadIntegrationForEdit(id: number): void {
    this.formLoading.set(true);

    this.integrationService.getIntegrationById(id).subscribe({
      next: (result) => {
        this.formLoading.set(false);

        if (result.isSuccess && result.value) {
          this.patchForm(result.value);
          return;
        }

        this.showError(result.error?.description ?? "Failed to load integration for edit", result.error?.validationErrors);
      },
      error: (error) => {
        this.formLoading.set(false);
        this.showError("Failed to load integration for edit", [error.message]);
      },
    });
  }

  private patchForm(integration: Integration): void {
    this.selectedInstallationId.set(integration.installationId ?? this.selectedInstallationId());
    this.streamClientId.set(integration.streamClientId ?? "");
    this.streamClientSecret.set(integration.streamClientSecret ?? "");
    this.integrationName.set(integration.integrationName ?? "");
    this.streamUrl.set(integration.streamUrl ?? integration.streamClientUrl ?? "");
    this.orderLookbackDays.set(integration.orderLookbackDays ?? 365);
    this.isActive.set(integration.isActive ?? true);
    this.isOrderSyncEnabled.set(integration.isOrderSyncEnabled ?? true);
    this.isOrderDispatchSyncEnabled.set(integration.isOrderDispatchSyncEnabled ?? true);
    this.useCurrentDateAsHandsOnDate.set(integration.useCurrentDateAsHandsOnDate ?? true);
    this.updateTrackingAfterPlanning.set(integration.updateTrackingAfterPlanning ?? true);
    this.isWebhookFeaturesEnabled.set(integration.isWebhookFeaturesEnabled ?? true);
    this.isUsingStreamPartnerAccount.set(integration.isUsingStreamPartnerAccount ?? false);
    this.streamPartnerAccountId.set(integration.streamPartnerAccountId ?? "");
    this.streamPartnerAccountName.set(integration.streamPartnerAccountName ?? "");
    this.orderNumPrefix.set(integration.orderNumPrefix ?? "");
    this.addTrackingToOrderNote.set(integration.addTrackingToOrderNote ?? false);
    this.enableAutomaticOrderSync.set(integration.enableAutomaticOrderSync ?? false);
    this.profileType.set(integration.profileType ?? integration.profileName ?? "");
  }

  saveIntegration(): void {
    if (!this.validateForm()) {
      this.messageService.add({
        severity: "warn",
        summary: "Validation Error",
        detail: "Please fix the form errors before submitting",
        life: 5000,
      });
      return;
    }

    this.submitting.set(true);

    const basePayload: CreateIntegrationPayload = {
      installationId: this.resolveInstallationId(),
      streamClientId: this.streamClientId().trim(),
      streamClientSecret: this.streamClientSecret().trim(),
      integrationName: this.integrationName().trim(),
      streamUrl: this.streamUrl().trim(),
      orderLookbackDays: this.orderLookbackDays(),
      isOrderSyncEnabled: this.isOrderSyncEnabled(),
      isOrderDispatchSyncEnabled: this.isOrderDispatchSyncEnabled(),
      useCurrentDateAsHandsOnDate: this.useCurrentDateAsHandsOnDate(),
      updateTrackingAfterPlanning: this.updateTrackingAfterPlanning(),
      isWebhookFeaturesEnabled: this.isWebhookFeaturesEnabled(),
      profileType: this.profileType(),
      isUsingStreamPartnerAccount: this.isUsingStreamPartnerAccount(),
      streamPartnerAccountId: this.isUsingStreamPartnerAccount() ? this.streamPartnerAccountId().trim() : undefined,
      streamPartnerAccountName: this.isUsingStreamPartnerAccount() ? this.streamPartnerAccountName().trim() : undefined,
      orderNumPrefix: this.orderNumPrefix().trim() || undefined,
      addTrackingToOrderNote: this.addTrackingToOrderNote(),
      enableAutomaticOrderSync: this.enableAutomaticOrderSync(),
    };

    const payload: UpsertIntegrationPayload = { ...basePayload };

    const isEdit = this.isEditMode() && this.integrationId() !== null;

    if (isEdit) {
      payload.id = this.integrationId()!;
    }

    const request$ = isEdit ? this.integrationService.updateIntegration(payload) : this.integrationService.createIntegration(payload);

    request$.subscribe({
      next: (result) => {
        this.submitting.set(false);

        if (result.isSuccess) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: isEdit ? "Integration updated successfully" : "Integration created successfully",
            life: 3000,
          });

          setTimeout(() => {
            this.router.navigate(["/integrations"]);
          }, 300);
        }
      },
      error: (error) => {
        this.submitting.set(false);
        this.showError(error.error.message);
      },
    });
  }

  validateForm(): boolean {
    this.clearValidationErrors();

    const checks = [
      this.validateInstallationSelection(),
      this.validateRequiredText(this.streamClientId().trim(), this.streamClientIdError, "Stream Client ID is required"),
      this.validateRequiredText(this.streamClientSecret().trim(), this.streamClientSecretError, "Stream Client Secret is required"),
      this.validateRequiredText(this.streamUrl().trim(), this.streamUrlError, "Stream URL is required"),
      this.validateRequiredText(this.integrationName().trim(), this.integrationNameError, "Integration Name is required"),
      this.validateRequiredText(this.profileType(), this.profileTypeError, "Profile Type is required"),
      this.validateLookbackDays(),
      this.validateStreamPartnerAccount(),
      this.validateOrderNumberPrefix(),
    ];

    return checks.every(Boolean);
  }

  private clearValidationErrors(): void {
    this.streamClientIdError.set("");
    this.streamClientSecretError.set("");
    this.integrationNameError.set("");
    this.streamUrlError.set("");
    this.orderLookbackDaysError.set("");
    this.profileTypeError.set("");
    this.installationIdError.set("");
    this.streamPartnerAccountIdError.set("");
    this.streamPartnerAccountNameError.set("");
    this.orderNumPrefixError.set("");
  }

  private validateRequiredText(value: string, errorSignal: { set: (value: string) => void }, message: string): boolean {
    if (value) {
      return true;
    }

    errorSignal.set(message);
    return false;
  }

  private validateInstallationSelection(): boolean {
    if (!this.authService.isAdmin() || this.selectedInstallationId() !== null) {
      return true;
    }

    this.installationIdError.set("Installation is required");
    return false;
  }

  private validateLookbackDays(): boolean {
    const lookbackDays = this.orderLookbackDays();
    if (!Number.isNaN(lookbackDays) && lookbackDays >= 0) {
      return true;
    }

    this.orderLookbackDaysError.set("Order Lookback Days must be 0 or greater");
    return false;
  }

  private validateStreamPartnerAccount(): boolean {
    if (!this.isUsingStreamPartnerAccount()) {
      return true;
    }

    return [
      this.validateRequiredText(
        this.streamPartnerAccountId().trim(),
        this.streamPartnerAccountIdError,
        "Stream Partner Account ID is required",
      ),
      this.validateRequiredText(
        this.streamPartnerAccountName().trim(),
        this.streamPartnerAccountNameError,
        "Stream Partner Account Name is required",
      ),
    ].every(Boolean);
  }

  private validateOrderNumberPrefix(): boolean {
    const orderNumPrefixVal = this.orderNumPrefix().trim();
    if (!orderNumPrefixVal || /^[a-zA-Z0-9]*$/.test(orderNumPrefixVal)) {
      return true;
    }

    this.orderNumPrefixError.set("Order Number Prefix must not contain special characters");
    return false;
  }

  private resolveInstallationId(): number | undefined {
    const id = this.authService.isAdmin()
      ? this.selectedInstallationId()
      : this.authService.installationId();
    return id ?? undefined;
  }

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: message + (validationErrors?.length ? `\n${validationErrors.join("\n")}` : ""),
      life: 5000,
    });
  }
}
