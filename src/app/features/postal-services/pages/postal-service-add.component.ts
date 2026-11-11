import { ChangeDetectionStrategy, Component, OnInit, computed, effect, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { IntegrationService } from "../../../core/services/integration.service";
import { PostalServiceService } from "../../../core/services/postal-service.service";
import {
  CreatePostalServicePayload,
  DepotLocationOption,
  DepotLocationValue,
  DimensionUnit,
  LabelType,
  OrderType,
} from "../../../models/postal-service.model";

interface NumberOption {
  label: string;
  value: number;
}

interface IntegrationSelectOption {
  label: string;
  value: number;
}

@Component({
  selector: "app-postal-service-add",
  imports: [FormsModule, RouterLink, ButtonModule, CardModule, InputTextModule, ToastModule],
  providers: [MessageService],
  templateUrl: "./postal-service-add.component.html",
  styleUrl: "./postal-service-add.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostalServiceAddComponent implements OnInit {
  private pendingDefaultLocation: string | DepotLocationValue | null = null;

  private readonly integrationService = inject(IntegrationService);
  private readonly postalServiceService = inject(PostalServiceService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly postalServiceId = signal<number | null>(null);
  readonly isEditMode = signal(false);
  readonly formLoading = signal(false);

  readonly generatedServiceName = computed(() => {
    const selectedLocation = this.selectedDefaultLocation();
    if (selectedLocation === null) {
      return "";
    }

    const locationLabel = this.getLocationLabel(selectedLocation);
    if (!locationLabel) {
      return "";
    }

    const orderType = this.orderTypeOptions.find((option) => option.value === this.selectedOrderType());
    const orderText = orderType?.label ?? "";
    const locationPrefix = locationLabel.substring(0, 3).toUpperCase();

    return `${locationPrefix}${orderText}`;
  });

  readonly serviceName = signal("");
  readonly isServiceNameManuallyEdited = signal(false);

  readonly selectedIntegrationId = signal<number | null>(null);
  readonly selectedDefaultLocation = signal<DepotLocationValue | null>(null);
  readonly selectedDimensionUnit = signal<number>(DimensionUnit.Meter);
  readonly selectedOrderType = signal<number>(OrderType.Delivery);
  readonly selectedLabelType = signal<number>(LabelType.Default);
  readonly selectedCopies = signal<number>(1);

  readonly integrationOptions = signal<IntegrationSelectOption[]>([]);
  readonly locationOptions = signal<DepotLocationOption[]>([]);

  readonly integrationsLoading = signal(false);
  readonly locationsLoading = signal(false);
  readonly submitting = signal(false);

  readonly isUsingStreamPartnerAccount = signal(false);
  readonly manualDeliveryMethod = signal("");
  readonly manualStockLocation = signal("");
  readonly streamPartnerId = signal("");
  readonly streamPartnerName = signal("");
  readonly service = signal("");
  readonly serviceLevel = signal("");

  readonly pageTitle = computed(() => (this.isEditMode() ? "Edit Postal Service" : "Add Postal Service"));
  readonly submitButtonLabel = computed(() => (this.isEditMode() ? "Update Postal Service" : "Save Postal Service"));

  readonly isIntegrationDisabled = computed(() => this.isEditMode() || this.integrationsLoading() || this.submitting());

  readonly isDefaultLocationDisabled = computed(
    () => this.selectedIntegrationId() === null || this.locationsLoading() || this.submitting(),
  );

  readonly integrationError = signal("");
  readonly serviceNameError = signal("");
  readonly locationError = signal("");
  readonly dimensionUnitError = signal("");
  readonly orderTypeError = signal("");
  readonly labelTypeError = signal("");
  readonly copiesError = signal("");
  readonly manualDeliveryMethodError = signal("");
  readonly manualStockLocationError = signal("");
  readonly serviceError = signal("");
  readonly serviceLevelError = signal("");

  readonly dimensionUnitOptions: NumberOption[] = [
    { label: "Meter", value: DimensionUnit.Meter },
    { label: "Centimeter", value: DimensionUnit.Centimeter },
    { label: "Millimeter", value: DimensionUnit.Millimeter },
    { label: "Inch", value: DimensionUnit.Inch },
  ];

  readonly orderTypeOptions: NumberOption[] = [
    { label: "Delivery", value: OrderType.Delivery },
    { label: "Collection", value: OrderType.Collection },
  ];

  readonly labelTypeOptions: NumberOption[] = [
    { label: "Default", value: LabelType.Default },
    { label: "Portrait No Qr", value: LabelType.PortraitNoQr },
    { label: "Portrait Standard", value: LabelType.PortraitStandard },
    { label: "Compact 100x50 No Qr", value: LabelType.Compact100x50NoQr },
  ];

  readonly copiesOptions: NumberOption[] = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];

  constructor() {
    effect(
      () => {
        const autoName = this.generatedServiceName();

        if (!this.isServiceNameManuallyEdited()) {
          this.serviceName.set(autoName);
        }
      },
      { allowSignalWrites: true },
    );
  }

  ngOnInit(): void {
    this.initializeMode();
    this.loadActiveIntegrations();
  }

  private initializeMode(): void {
    const editIdParam = this.route.snapshot.queryParamMap.get("id");
    const parsedId = editIdParam ? Number(editIdParam) : Number.NaN;

    if (!Number.isNaN(parsedId) && parsedId > 0) {
      this.postalServiceId.set(parsedId);
      this.isEditMode.set(true);
      this.loadPostalServiceForEdit(parsedId);
    }
  }

  private loadActiveIntegrations(): void {
    this.integrationsLoading.set(true);

    this.integrationService.getActiveIntegrations().subscribe({
      next: (result) => {
        this.integrationsLoading.set(false);

        if (result.isSuccess && result.value) {
          this.integrationOptions.set(
            result.value.map((item) => ({
              label: item.integrationName ?? `Integration ${item.id}`,
              value: item.id,
            })),
          );
          return;
        }

        this.showError("Failed to load integrations", result.error?.validationErrors);
      },
      error: (error) => {
        this.integrationsLoading.set(false);
        this.showError("Failed to load integrations", [error.message]);
      },
    });
  }

  onIntegrationChange(value: string | number): void {
    if (value === null || value === "" || value === undefined) {
      this.selectedIntegrationId.set(null);
      this.selectedDefaultLocation.set(null);
      this.pendingDefaultLocation = null;
      this.locationOptions.set([]);
      this.integrationError.set("");
      this.locationError.set("");
      return;
    }

    const integrationId = Number(value);

    this.selectedIntegrationId.set(Number.isNaN(integrationId) || integrationId <= 0 ? null : integrationId);
    this.selectedDefaultLocation.set(null);
    this.pendingDefaultLocation = null;
    this.locationOptions.set([]);
    this.integrationError.set("");
    this.locationError.set("");
    this.isUsingStreamPartnerAccount.set(false);
    this.manualDeliveryMethod.set("");
    this.manualStockLocation.set("");
    this.streamPartnerId.set("");
    this.streamPartnerName.set("");
    this.manualDeliveryMethodError.set("");
    this.manualStockLocationError.set("");

    if (!Number.isNaN(integrationId) && integrationId > 0) {
      this.loadIntegrationDetails(integrationId);
    }
  }

  private loadIntegrationDetails(integrationId: number): void {
    this.integrationService.getIntegrationById(integrationId).subscribe({
      next: (result) => {
        if (result.isSuccess && result.value) {
          const isPartner = result.value.isUsingStreamPartnerAccount ?? false;
          this.isUsingStreamPartnerAccount.set(isPartner);
          if (!isPartner) {
            this.loadLocations(integrationId);
          }
        }
      },
      error: () => {},
    });
  }

  private loadLocations(integrationId: number): void {
    this.locationsLoading.set(true);

    this.postalServiceService.getStreamDepotLocations(integrationId).subscribe({
      next: (result) => {
        this.locationsLoading.set(false);

        if (result.isSuccess && result.value) {
          const normalized = result.value.map((item) => ({
            label: item.label,
            value: {
              deliveryMethodId: item.deliveryMethodId,
              deliveryMethodName: item.deliveryMethodName,
              depotId: item.depotId,
              depotName: item.depotName,
              stockLocationId: item.stockLocationId,
              stockLocationName: item.stockLocationName,
            },
          }));
          this.locationOptions.set(normalized);
          this.applyPendingDefaultLocation();
          return;
        }

        this.showError("Failed to load locations", result.error?.validationErrors);
      },
      error: (error) => {
        this.locationsLoading.set(false);
        this.showError("Failed to load locations", [error.message]);
      },
    });
  }

  private loadPostalServiceForEdit(id: number): void {
    this.formLoading.set(true);

    this.postalServiceService.getPostalServiceById(id).subscribe({
      next: (result) => {
        this.formLoading.set(false);

        if (result.isSuccess && result.value) {
          this.patchForm(result.value);
          return;
        }

        this.showError(result.error?.description ?? "Failed to load postal service for edit", result.error?.validationErrors);
      },
      error: (error) => {
        this.formLoading.set(false);
        this.showError("Failed to load postal service for edit", [error.message]);
      },
    });
  }

  private patchForm(postalService: any): void {
    const integrationId = Number(postalService.integrationId);

    this.selectedIntegrationId.set(!Number.isNaN(integrationId) && integrationId > 0 ? integrationId : null);
    this.selectedDimensionUnit.set(this.mapDimensionUnit(postalService.defaultDimensionUnit));
    this.selectedOrderType.set(this.mapOrderType(postalService.orderType));
    this.selectedLabelType.set(this.mapLabelType(postalService.labelType));
    this.selectedCopies.set(this.mapCopies(postalService.copies));
    this.serviceName.set(String(postalService.serviceName ?? "").trim());
    this.isServiceNameManuallyEdited.set(true);
    this.manualDeliveryMethod.set(postalService.manualDeliveryMethod ?? "");
    this.manualStockLocation.set(postalService.manualStockLocation ?? "");
    this.streamPartnerId.set(postalService.streamPartnerId ?? "");
    this.streamPartnerName.set(postalService.streamPartnerName ?? "");
    this.service.set(postalService.service ?? "");
    this.serviceLevel.set(postalService.serviceLevel ?? "");

    const selectedId = this.selectedIntegrationId();
    if (selectedId !== null) {
      this.loadIntegrationDetails(selectedId);
    }

    const stockLocationId = String(postalService.stockLocationId ?? "").trim();
    this.pendingDefaultLocation = stockLocationId || postalService.defaultLocation || null;
    this.applyPendingDefaultLocation();
  }

  onDefaultLocationChange(value: DepotLocationValue | null): void {
    this.selectedDefaultLocation.set(value);
    this.locationError.set("");
  }

  onOrderTypeChange(value: string | number): void {
    this.selectedOrderType.set(+value);
    this.orderTypeError.set("");
  }

  onServiceNameChange(value: string): void {
    this.serviceName.set(value);
    this.serviceNameError.set("");
    this.isServiceNameManuallyEdited.set(value.trim() !== this.generatedServiceName().trim());
  }

  private getLocationLabel(location: DepotLocationValue): string {
    const selectedOption = this.locationOptions().find((option) => this.isSameLocation(option.value, location));
    if (selectedOption) {
      return selectedOption.label.trim();
    }

    return location.stockLocationName?.trim() ?? location.depotName?.trim() ?? "";
  }

  private applyPendingDefaultLocation(): void {
    if (!this.pendingDefaultLocation) {
      return;
    }

    if (this.locationOptions().length === 0) {
      return;
    }

    const match = this.findMatchingLocation(this.pendingDefaultLocation);
    if (!match) {
      return;
    }

    this.selectedDefaultLocation.set(match.value);
    this.pendingDefaultLocation = null;
  }

  private findMatchingLocation(target: string | DepotLocationValue): DepotLocationOption | undefined {
    if (typeof target === "string") {
      const normalizedTarget = target.trim().toLowerCase();
      if (!normalizedTarget) {
        return undefined;
      }

      const stockLocationIdMatch = this.locationOptions().find(
        (option) => option.value.stockLocationId?.trim().toLowerCase() === normalizedTarget,
      );
      if (stockLocationIdMatch) {
        return stockLocationIdMatch;
      }

      return this.locationOptions().find((option) => {
        const candidates = [
          option.label,
          option.value.stockLocationName,
          option.value.depotName,
          option.value.stockLocationId,
          option.value.depotId,
        ];

        return candidates.some((candidate) => candidate?.trim().toLowerCase() === normalizedTarget);
      });
    }

    return this.locationOptions().find((option) => this.isSameLocation(option.value, target));
  }

  private isSameLocation(left: DepotLocationValue, right: DepotLocationValue): boolean {
    return (
      left.deliveryMethodId === right.deliveryMethodId && left.depotId === right.depotId && left.stockLocationId === right.stockLocationId
    );
  }

  private mapDimensionUnit(value: DimensionUnit | string): DimensionUnit {
    if (typeof value === "number") {
      return value;
    }

    switch (String(value).toLowerCase()) {
      case "meter":
        return DimensionUnit.Meter;
      case "centimeter":
        return DimensionUnit.Centimeter;
      case "millimeter":
        return DimensionUnit.Millimeter;
      case "inch":
        return DimensionUnit.Inch;
      default:
        return DimensionUnit.Meter;
    }
  }

  private mapOrderType(value: OrderType | string): OrderType {
    if (typeof value === "number") {
      return value;
    }

    switch (String(value).toLowerCase()) {
      case "collection":
        return OrderType.Collection;
      case "delivery":
      default:
        return OrderType.Delivery;
    }
  }

  private mapLabelType(value: LabelType | string): LabelType {
    if (typeof value === "number") {
      return value;
    }

    switch (String(value).toLowerCase()) {
      case "portraitnoqr":
      case "portrait no qr":
        return LabelType.PortraitNoQr;
      case "portraitstandard":
      case "portrait standard":
        return LabelType.PortraitStandard;
      case "compact100x50noqr":
      case "compact 100x50 no qr":
        return LabelType.Compact100x50NoQr;
      case "default":
      default:
        return LabelType.Default;
    }
  }

  private mapCopies(value: number): number {
    const parsed = Number(value);
    if (Number.isNaN(parsed) || parsed < 1 || parsed > 5) {
      return 5;
    }

    return parsed;
  }

  savePostalService(): void {
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

    const integrationId = this.selectedIntegrationId();
    if (integrationId === null) {
      this.submitting.set(false);
      return;
    }

    const selectedLocation = this.selectedDefaultLocation();
    if (selectedLocation === null && !this.isUsingStreamPartnerAccount()) {
      this.submitting.set(false);
      return;
    }

    const payload: CreatePostalServicePayload = {
      integrationId,
      serviceName: this.serviceName().trim(),
      depotId: selectedLocation?.depotId ?? "",
      depotName: selectedLocation?.depotName ?? "",
      stockLocationId: selectedLocation?.stockLocationId ?? "",
      stockLocationName: selectedLocation?.stockLocationName ?? "",
      deliveryMethodId: selectedLocation?.deliveryMethodId ?? "",
      deliveryMethodName: selectedLocation?.deliveryMethodName ?? "",
      defaultDimensionUnit: this.selectedDimensionUnit(),
      orderType: this.selectedOrderType(),
      labelType: this.selectedLabelType(),
      copies: this.selectedCopies(),
      service: this.service().trim(),
      serviceLevel: this.serviceLevel().trim(),
      manualDeliveryMethod: this.isUsingStreamPartnerAccount() ? this.manualDeliveryMethod().trim() : undefined,
      manualStockLocation: this.isUsingStreamPartnerAccount() ? this.manualStockLocation().trim() : undefined,
      streamPartnerId: this.isUsingStreamPartnerAccount() ? this.streamPartnerId().trim() || undefined : undefined,
      streamPartnerName: this.isUsingStreamPartnerAccount() ? this.streamPartnerName().trim() || undefined : undefined,
    };

    const isEdit = this.isEditMode() && this.postalServiceId() !== null;
    const request$ = isEdit
      ? this.postalServiceService.updatePostalService(this.postalServiceId()!, payload)
      : this.postalServiceService.createPostalService(payload);

    request$.subscribe({
      next: (result) => {
        this.submitting.set(false);

        if (result.isSuccess) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: isEdit ? "Postal service updated successfully" : "Postal service created successfully",
            life: 3000,
          });

          setTimeout(() => {
            this.router.navigate(["/postal-services"]);
          }, 300);

          return;
        }

        this.showError(
          result.error?.description ?? (isEdit ? "Failed to update postal service" : "Failed to create postal service"),
          result.error?.validationErrors,
        );
      },
      error: (error) => {
        this.submitting.set(false);
        this.showError("Duplicate Service Name.");
      },
    });
  }

  private validateForm(): boolean {
    this.clearValidationErrors();

    const checks = [
      this.validateIntegration(),
      this.validateRequiredText(this.serviceName().trim(), this.serviceNameError, "Service name is required"),
      this.validateDefaultLocation(),
      this.validatePositiveSelection(this.selectedDimensionUnit(), this.dimensionUnitError, "Default dimension unit is required"),
      this.validatePositiveSelection(this.selectedOrderType(), this.orderTypeError, "Order type is required"),
      this.validatePositiveSelection(this.selectedLabelType(), this.labelTypeError, "Label type is required"),
      this.validateCopies(),
      this.validateManualDeliveryConfig(),
    ];

    return checks.every(Boolean);
  }

  private clearValidationErrors(): void {
    this.integrationError.set("");
    this.serviceNameError.set("");
    this.locationError.set("");
    this.dimensionUnitError.set("");
    this.orderTypeError.set("");
    this.labelTypeError.set("");
    this.copiesError.set("");
    this.manualDeliveryMethodError.set("");
    this.manualStockLocationError.set("");
    this.serviceError.set("");
    this.serviceLevelError.set("");
  }

  private validateRequiredText(value: string, errorSignal: { set: (value: string) => void }, message: string): boolean {
    if (value) {
      return true;
    }

    errorSignal.set(message);
    return false;
  }

  private validateIntegration(): boolean {
    if (this.selectedIntegrationId() !== null) {
      return true;
    }

    this.integrationError.set("Integration is required");
    return false;
  }

  private validateDefaultLocation(): boolean {
    if (this.selectedDefaultLocation() || this.isUsingStreamPartnerAccount()) {
      return true;
    }

    this.locationError.set("Default location is required");
    return false;
  }

  private validatePositiveSelection(value: number, errorSignal: { set: (value: string) => void }, message: string): boolean {
    if (value > 0) {
      return true;
    }

    errorSignal.set(message);
    return false;
  }

  private validateCopies(): boolean {
    const copies = this.selectedCopies();
    if (copies >= 1 && copies <= 5) {
      return true;
    }

    this.copiesError.set("Copies is required");
    return false;
  }

  private validateManualDeliveryConfig(): boolean {
    if (!this.isUsingStreamPartnerAccount()) {
      return true;
    }

    return [
      this.validateRequiredText(this.manualDeliveryMethod().trim(), this.manualDeliveryMethodError, "Manual Delivery Method is required"),
      this.validateRequiredText(this.manualStockLocation().trim(), this.manualStockLocationError, "Manual Stock Location is required"),
    ].every(Boolean);
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
