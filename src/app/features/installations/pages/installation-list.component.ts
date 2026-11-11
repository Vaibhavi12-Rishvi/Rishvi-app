import { Component, inject, signal, effect, ChangeDetectionStrategy } from '@angular/core';
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
import { Installation, InstallationQueryParams } from '../../../models/installation.model';
import { InstallationService } from '../../../core/services/installation.service';
import { AuthService } from '../../../core/services/auth.service';
import { OrdersFetchSyncResponse, OrdersSendSyncResponse, OrdersSyncService } from '../../../core/services/orders-sync.service';
import { WebhookSubscriptionService } from '../../../core/services/webhook-subscription.service copy';
import { AuditLogFilterBarComponent, SelectStatusFilterOption } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

type SyncResultType = "identifiers" | "postalServices" | "measurementUnits" | "fetchOrders" | "sendOrders";

@Component({
  selector: "app-installation-list",
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
  templateUrl: "./installation-list.component.html",
  styleUrl: "./installation-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallationListComponent {
  private readonly installationService = inject(InstallationService);
  private readonly messageService = inject(MessageService);
  authService = inject(AuthService);
  private readonly ordersSyncService = inject(OrdersSyncService);
  private readonly webhookSubscriptionService = inject(WebhookSubscriptionService);
  // Constants
  private readonly DEFAULT_PAGE_SIZE = 50;
  // Applied filter signals (these trigger API calls)
  // Status options for dropdown (defined first to be used in initialization)
  statusOptions = signal([
    { label: "All", value: null },
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ]);
  // Sync result modal state
  displaySyncResultDialog = signal(false);
  syncResultType = signal<SyncResultType>("identifiers");
  syncResultData = signal<OrdersFetchSyncResponse | OrdersSendSyncResponse | null>(null);



  // Form filter signals (for UI binding only - not triggering API calls)
  searchText = signal("");
  selectedStatus = signal<{ label: string; value: boolean | null }>(this.statusOptions()[0]);
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());
  // Sync dialog state
  displaySyncDialog = signal(false);
  syncDialogTitle = signal("");
  syncDialogMessage = signal("");
  syncInProgress = signal(false);
  private pendingSyncAction: (() => void) | null = null;

  displayOrderIdDialog = signal(false);
  private readonly appliedSearchText = signal("");
  private readonly appliedStatus = signal<{ label: string; value: boolean | null }>(this.statusOptions()[0]);
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  // Table state signals
  installations = signal<Installation[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  totalPages = signal<number>(0);
  sortField = signal<string>("createdAtUtc");
  sortOrder = signal<number>(-1); // -1 for descending, 1 for ascending
  // Order ID dialog state
  orderIdInput = signal("");
  orderIdError = signal("");
  private pendingInstallationEmail = "";
  // Delete orders dialog state
  displayDeleteDialog = signal(false);
  deleteInProgress = signal(false);
  orderIdsList = signal<{ id: number; value: string; error: string }[]>([{ id: 1, value: "", error: "" }]);
  nextOrderIdInputId = 2;
  pendingInstallationShopDomainForDelete = "";
  constructor() {
    // Effect only triggers on applied filters
    effect(() => {
      // Track only applied filters
      this.appliedSearchText();
      this.appliedStatus();
      this.appliedDateFrom();
      this.appliedDateTo();

      // Load installations only when applied filters change
      this.loadInstallations();
    });
  }

  loadInstallations(): void {
    const params: InstallationQueryParams = {
      searchText: this.appliedSearchText() ?? undefined,
      isActive: this.appliedStatus().value,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    this.loading.set(true);

    this.installationService.getInstallations(params).subscribe({
      next: (result) => {
        this.loading.set(false);

        if (result.isSuccess && result.value) {
          this.installations.set(result.value.data);
          this.totalCount.set(result.value.totalCount);
          this.totalPages.set(result.value.totalPages);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.installations.set([]);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.installations.set([]);
        this.showError("Failed to load installations", [error.message]);
      },
    });
  }

  onPageChange(event: any) {
    const page = Math.floor(event.first / event.rows) + 1;

    this.pageNumber.set(page);
    this.firstRow.set(event.first);
    this.pageSize.set(event.rows);
  }

  onSort(event: any) {
    this.sortField.set(event.field ?? "createdAtUtc");
    this.sortOrder.set(event.order);

    this.pageNumber.set(1);
    this.firstRow.set(0);
  }

  applyFilters(): void {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Copy form filter values to applied filters (this triggers the effect)
    this.appliedSearchText.set(this.searchText().trim());
    this.appliedStatus.set(this.selectedStatus());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters(): void {
    // Clear form values
    this.searchText.set("");
    this.selectedStatus.set(this.statusOptions()[0]);
    this.dateFromValue.set("");
    this.dateToValue.set("");

    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Clear applied filters (triggers API call)
    this.appliedSearchText.set("");
    this.appliedStatus.set(this.statusOptions()[0]);
    this.appliedDateFrom.set("");
    this.appliedDateTo.set("");
  }

  getStatusSeverity(installation: Installation): "success" | "secondary" {
    return installation.isActive ? this.getActiveStatusSeverity() : this.getInactiveStatusSeverity();
  }

  private getActiveStatusSeverity(): "success" {
    return "success";
  }

  private getInactiveStatusSeverity(): "secondary" {
    return "secondary";
  }

  compareStatusOptions(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
  }

  private showError(message: string, validationErrors?: string[]): void {
    const detail = validationErrors && validationErrors.length > 0 ? validationErrors.join(", ") : message;

    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: detail,
      life: 5000,
    });
  }

  private getCurrentMonthStart(): string {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    return this.formatDateForInput(firstDay);
  }

  private getCurrentMonthEnd(): string {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return this.formatDateForInput(lastDay);
  }

  private formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  confirmSyncAllFetchOrders(): void {
    this.syncDialogTitle.set("Fetch All Orders");
    this.syncDialogMessage.set("Are you sure you want to fetch orders for ALL active installations? This operation may take some time.");
    this.pendingSyncAction = this.syncAllFetchOrders.bind(this);
    this.displaySyncDialog.set(true);
  }

  confirmSyncAllSendOrders(): void {
    this.syncDialogTitle.set("Send All Orders");
    this.syncDialogMessage.set("Are you sure you want to send orders for ALL active installations? This operation may take some time.");
    this.pendingSyncAction = this.syncAllSendOrders.bind(this);
    this.displaySyncDialog.set(true);
  }
  confirmFetchOrders(installation: Installation): void {
    this.syncDialogTitle.set("Fetch Orders");
    this.syncDialogMessage.set(
      `Are you sure you want to fetch all orders for ${installation.shopDomain}? This will sync failed and new orders.`,
    );
    this.pendingSyncAction = () => {
      this.syncFetchOrders(installation.shopDomain);
    };
    this.displaySyncDialog.set(true);
  }

  confirmSendOrders(installation: Installation): void {
    this.syncDialogTitle.set("Send Orders");
    this.syncDialogMessage.set(`Are you sure you want to send all ready orders for ${installation.shopDomain} to Stream?`);
    this.pendingSyncAction = () => {
      this.syncSendOrders(installation.shopDomain);
    };
    this.displaySyncDialog.set(true);
  }
  private syncFetchOrders(shopDomain: string): void {
    this.syncInProgress.set(true);
    this.ordersSyncService.fetchOrdersForInstallation(shopDomain).subscribe({
      next: (result) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        if (result.isSuccess && result.value) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: ` ${result.message}`,
            life: 5000,
          });
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        this.showError("Failed to fetch orders", [error.message]);
      },
    });
  }

  private syncSendOrders(shopDomain: string): void {
    this.syncInProgress.set(true);
    this.ordersSyncService.sendOrdersForInstallation(shopDomain).subscribe({
      next: (result) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        if (result.isSuccess && result.value) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: `${result.message}`,
            life: 5000,
          });
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        this.showError("Failed to send orders", [error.message]);
      },
    });
  }

  private syncAllFetchOrders(): void {
    this.syncInProgress.set(true);
    this.ordersSyncService.fetchOrdersForAllInstallations().subscribe({
      next: (result) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        if (result.isSuccess && result.value) {
          this.syncResultType.set("fetchOrders");
          this.syncResultData.set(result.value);
          this.displaySyncResultDialog.set(true);
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: "Orders fetched successfully",
            life: 3000,
          });
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        this.showError("Failed to fetch orders for all installations", [error.message]);
      },
    });
  }

  private syncAllSendOrders(): void {
    this.syncInProgress.set(true);
    this.ordersSyncService.sendOrdersForAllInstallations().subscribe({
      next: (result) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        if (result.isSuccess && result.value) {
          this.syncResultType.set("sendOrders");
          this.syncResultData.set(result.value);
          this.displaySyncResultDialog.set(true);
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: "Orders sent successfully",
            life: 3000,
          });
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        this.showError("Failed to send orders for all installations", [error.message]);
      },
    });
  }
  executeSyncAction(): void {
    const syncAction = this.pendingSyncAction;
    if (!syncAction) return;

    this.pendingSyncAction = null;
    syncAction();
  }

  cancelSyncAction(): void {
    this.displaySyncDialog.set(false);
    this.pendingSyncAction = null;
  }

  syncFetchAndSend(email: string, numOrderId: string): void {
    console.log("Initiating fetch and send for email:", email, "and order ID:", numOrderId);
    this.syncInProgress.set(true);
    this.ordersSyncService.fetchAndSendOrder(email, numOrderId).subscribe({
      next: (result) => {
        this.syncInProgress.set(false);
        this.displayOrderIdDialog.set(false);
        if (result.isSuccess) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: result.message,
            life: 5000,
          });
          return;
        }

      },
      error: (error) => {
        this.syncInProgress.set(false);
        this.displayOrderIdDialog.set(false);
        this.showError("Failed to fetch and send order", [error.error.message]);
      },
    });
  }
  confirmSubscribeWebhooks(installation: Installation): void {
    this.syncDialogTitle.set("Subscribe to All Webhooks");
    this.syncDialogMessage.set(`Are you sure you want to subscribe to all webhooks for ${installation.shopDomain}?`);
    this.pendingSyncAction = () => this.subscribeWebhooks(installation.shopDomain);
    this.displaySyncDialog.set(true);
  }

  confirmUnsubscribeWebhooks(installation: Installation): void {
    this.syncDialogTitle.set("Unsubscribe from All Webhooks");
    this.syncDialogMessage.set(`Are you sure you want to unsubscribe from all webhooks for ${installation.shopDomain}?`);
    this.pendingSyncAction = () => this.unsubscribeWebhooks(installation.shopDomain);
    this.displaySyncDialog.set(true);
  }

  openFetchAndSendDialog(installation: Installation): void {
    this.pendingInstallationEmail = installation.shopDomain;
    this.orderIdInput.set("");
    this.orderIdError.set("");
    this.displayOrderIdDialog.set(true);
  }
  cancelOrderIdDialog(): void {
    this.displayOrderIdDialog.set(false);
    this.orderIdInput.set("");
    this.orderIdError.set("");
    this.pendingInstallationEmail = "";
  }
  executeFetchAndSend(): void {
    const orderIdValue = String(this.orderIdInput()).trim();

    // Validation
    if (!orderIdValue) {
      this.orderIdError.set("Order ID is required");
      return;
    }
    console.log("Order ID Input Value:", orderIdValue);

    // Clear error and proceed
    this.orderIdError.set("");
    this.syncFetchAndSend(this.pendingInstallationEmail, orderIdValue);
  }
  // Delete Orders Methods
  openDeleteOrdersDialog(installation: Installation): void {
    this.pendingInstallationShopDomainForDelete = installation.shopDomain;
    this.orderIdsList.set([{ id: 1, value: "", error: "" }]);
    this.nextOrderIdInputId = 2;
    this.displayDeleteDialog.set(true);
  }

  cancelDeleteOrdersDialog(): void {
    this.displayDeleteDialog.set(false);
    this.deleteInProgress.set(false);
    this.orderIdsList.set([{ id: 1, value: "", error: "" }]);
    this.nextOrderIdInputId = 2;
    this.pendingInstallationShopDomainForDelete = "";
  }

  addOrderIdField(): void {
    this.orderIdsList.update((current) => [...current, { id: this.nextOrderIdInputId++, value: "", error: "" }]);
  }

  removeOrderIdField(id: number): void {
    this.orderIdsList.update((current) => {
      if (current.length === 1) {
        return current;
      }

      return current.filter((item) => item.id !== id);
    });
  }

  updateOrderIdField(id: number, value: string): void {
    this.orderIdsList.update((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              value,
              error: "",
            }
          : item,
      ),
    );
  }

  executeDeleteOrders(): void {
    const current = this.orderIdsList();

    let hasValidationError = false;
    const validated = current.map((item) => {
      const trimmed = item.value.trim();
      let error = "";

      if (!trimmed) {
        error = "Order ID is required";
      }

      if (error) {
        hasValidationError = true;
      }

      return { ...item, error, value: trimmed };
    });

    if (hasValidationError) {
      this.orderIdsList.set(validated);
      return;
    }

    const orderIds = validated.map((item) => item.value).join(",");

    this.deleteInProgress.set(true);
    this.ordersSyncService.deleteOrdersFromStream(this.pendingInstallationShopDomainForDelete, orderIds).subscribe({
      next: (result) => {
        this.deleteInProgress.set(false);

        if (result.isSuccess) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: result.value?.details ?? result.message ?? "Orders deleted from Stream successfully",
            life: 5000,
          });

          this.cancelDeleteOrdersDialog();
          return;
        }

        this.showError(result.error?.description ?? "Failed to delete orders from Stream", result.error?.validationErrors);
      },
      error: (error) => {
        this.deleteInProgress.set(false);
        this.showError("Failed to delete orders from Stream", [error.message]);
      },
    });
  }

  private subscribeWebhooks(email: string): void {
    this.syncInProgress.set(true);
    this.webhookSubscriptionService.subscribeToAllWebhooks(email).subscribe({
      next: (result) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        if (result.isSuccess) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: "Successfully subscribed to all webhooks",
            life: 5000,
          });
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        this.showError("Failed to subscribe to webhooks", [error.message]);
      },
    });
  }

  private unsubscribeWebhooks(email: string): void {
    this.syncInProgress.set(true);
    this.webhookSubscriptionService.unsubscribeFromAllWebhooks(email).subscribe({
      next: (result) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        if (result.isSuccess) {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: "Successfully unsubscribed from all webhooks",
            life: 5000,
          });
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.syncInProgress.set(false);
        this.displaySyncDialog.set(false);
        this.showError("Failed to unsubscribe from webhooks", [error.message]);
      },
    });
  }
}
