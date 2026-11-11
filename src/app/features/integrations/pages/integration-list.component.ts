import { Component, inject, signal, effect, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Integration, IntegrationQueryParams, IntegrationConfigStage } from '../../../models/integration.model';
import { IntegrationService } from '../../../core/services/integration.service';
import { AuthService } from '../../../core/services/auth.service';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: 'app-integration-list',
  imports: [
    DatePipe,
    FormsModule,
    RouterLink,
    TableModule,
    ButtonModule,
    TagModule,
    CardModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    AuditLogFilterBarComponent
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './integration-list.component.html',
  styleUrl: './integration-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationListComponent implements OnInit {
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  authService = inject(AuthService);

  // Constants
  private readonly DEFAULT_PAGE_SIZE = 50;

  // Config stage options
  configStageOptions = [
    { label: 'All', value: null },
    { label: 'Select Profile', value: IntegrationConfigStage.SelectProfile },
    { label: 'Configure Settings', value: IntegrationConfigStage.ConfigureSettings },
    { label: 'Setup Completed', value: IntegrationConfigStage.SetupCompleted },
  ];

  // Status options
  statusOptions = signal([
    { label: 'All', value: null },
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ]);

  // Installation options for dropdown
  installationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);

  // Form filter signals (for UI binding only - not triggering API calls)
  searchText = signal('');
  selectedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  profileName = signal('');
  selectedConfigStage = signal(this.configStageOptions[0]);
  selectedStatus = signal(this.statusOptions()[0]);
  dateFromValue = signal('');
  dateToValue = signal('');
  // Stream Webhooks Dialog (Admin only)
  displayWebhooksDialog = signal<boolean>(false);
  webhooksLoading = signal<boolean>(false);
  webhooksData = signal<any>(null);

  // Stream Order Dialog (Admin only)
  displayOrderDialog = signal<boolean>(false);
  displayOrderInputDialog = signal<boolean>(false);
  orderLoading = signal<boolean>(false);
  orderData = signal<any>(null);
  orderNumberInput = signal<string>('');
  orderNumberError = signal<string>('');
  pendingIntegrationId = signal<number>(0);

  // Applied filter signals (these trigger API calls)
  private readonly appliedSearchText = signal('');
  private readonly appliedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedProfileName = signal('');
  private readonly appliedConfigStage = signal<{ label: string; value: IntegrationConfigStage | null }>(this.configStageOptions[0]);
  private readonly appliedStatus = signal<{ label: string; value: boolean | null }>(this.statusOptions()[0]);
  private readonly appliedDateFrom = signal('');
  private readonly appliedDateTo = signal('');

  // Table state signals
  integrations = signal<Integration[]>([]);
  loading = signal<boolean>(false);
  deletingIntegrationId = signal<number | null>(null);
  totalCount = signal<number>(0);

  // Dialog state
  displayDialog = signal<boolean>(false);
  selectedIntegration = signal<Integration | null>(null);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  totalPages = signal<number>(0);
  sortField = signal<string>('createdAtUtc');
  sortOrder = signal<number>(-1); // -1 for descending, 1 for ascending

  constructor() {
    // Set current month as default date range
    const monthStart = this.getCurrentMonthStart();
    const monthEnd = this.getCurrentMonthEnd();
    this.dateFromValue.set(monthStart);
    this.dateToValue.set(monthEnd);
    this.appliedDateFrom.set(monthStart);
    this.appliedDateTo.set(monthEnd);

    // Effect only triggers on applied filters
    effect(() => {
      // Track only applied filters
      this.appliedSearchText();
      this.appliedInstallation();
      this.appliedProfileName();
      this.appliedConfigStage();
      this.appliedStatus();
      this.appliedDateFrom();
      this.appliedDateTo();

      // Load integrations only when applied filters change
      this.loadIntegrations();
    });
  }

  ngOnInit(): void {
    this.loadActiveInstallations();
  }

  loadActiveInstallations(): void {
    this.integrationService.getActiveInstallations().subscribe({
      next: (result) => {
        if (result.isSuccess && result.value) {
          const options = [
            { label: 'All', value: null },
            ...result.value.map((inst) => ({
              label: `${inst.id}-${inst.email}`,
              value: inst.id,
            })),
          ];
          this.installationOptions.set(options);
        } else if (result.error) {
          this.showError('Failed to load installations', result.error.validationErrors);
        }
      },
      error: (error) => {
        this.showError('Failed to load installations', [error.message]);
      },
    });
  }

  loadIntegrations(): void {
    const params: IntegrationQueryParams = {
      searchText: this.appliedSearchText() ?? undefined,
      installationId: this.appliedInstallation().value,
      profileName: this.appliedProfileName() ?? undefined,
      configStage: this.appliedConfigStage().value,
      isActive: this.appliedStatus().value,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    this.loading.set(true);

    this.integrationService.getIntegrations(params).subscribe({
      next: (result) => {
        this.loading.set(false);

        if (result.isSuccess && result.value) {
          this.integrations.set(result.value.data);
          this.totalCount.set(result.value.totalCount);
          this.totalPages.set(result.value.totalPages);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.integrations.set([]);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.integrations.set([]);
        this.showError('Failed to load integrations', [error.message]);
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
    this.sortField.set(event.field ?? 'createdAtUtc');
    this.sortOrder.set(event.order);

    this.pageNumber.set(1);
    this.firstRow.set(0);
  }

  applyFilters(): void {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Copy form filter values to applied filters (this triggers the effect)
    this.appliedSearchText.set(this.searchText().trim());
    this.appliedInstallation.set(this.selectedInstallation());
    this.appliedProfileName.set(this.profileName().trim());
    this.appliedConfigStage.set(this.selectedConfigStage());
    this.appliedStatus.set(this.selectedStatus());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters(): void {
    // Clear form values
    this.searchText.set('');
    this.selectedInstallation.set(this.installationOptions()[0]);
    this.profileName.set('');
    this.selectedConfigStage.set(this.configStageOptions[0]);
    this.selectedStatus.set(this.statusOptions()[0]);
    this.dateFromValue.set('');
    this.dateToValue.set('');

    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Clear applied filters (triggers API call)
    this.appliedSearchText.set('');
    this.appliedInstallation.set(this.installationOptions()[0]);
    this.appliedProfileName.set('');
    this.appliedConfigStage.set(this.configStageOptions[0]);
    this.appliedStatus.set(this.statusOptions()[0]);
    this.appliedDateFrom.set('');
    this.appliedDateTo.set('');
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
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getStatusSeverity(integration: Integration): 'success' | 'secondary' {
    return integration.isActive ? this.getActiveStatusSeverity() : this.getInactiveStatusSeverity();
  }

  private getActiveStatusSeverity(): 'success' {
    return 'success';
  }

  private getInactiveStatusSeverity(): 'secondary' {
    return 'secondary';
  }

  getConfigStageSeverity(stage: string): 'info' | 'warn' | 'success' {
    switch (stage) {
      case 'SelectProfile':
        return 'info';
      case 'ConfigureSettings':
        return 'warn';
      case 'SetupCompleted':
        return 'success';
      default:
        return 'info';
    }
  }

  getConfigStageLabel(stage: string | null | undefined): string {
    if (!stage) return 'Unknown';
    switch (stage) {
      case 'SelectProfile':
        return 'Select Profile';
      case 'ConfigureSettings':
        return 'Configure Settings';
      case 'SetupCompleted':
        return 'Setup Completed';
      default:
        return 'Unknown';
    }
  }

  compareOptions(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
  }

  // View dialog methods
  viewIntegrationDetails(integration: Integration): void {
    this.selectedIntegration.set(integration);
    this.displayDialog.set(true);
  }

  closeDialog(): void {
    this.displayDialog.set(false);
    this.selectedIntegration.set(null);
  }

  confirmDeleteIntegration(integration: Integration): void {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete integration ${integration.email}?`,
      header: 'Delete Integration',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptIcon: 'pi pi-trash',
      rejectIcon: 'pi pi-times',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.deleteIntegration(integration.id);
      },
    });
  }

  private deleteIntegration(id: number): void {
    this.deletingIntegrationId.set(id);

    this.integrationService.deleteIntegration(id).subscribe({
      next: (result) => {
        this.deletingIntegrationId.set(null);

        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Integration deleted successfully',
            life: 3000,
          });

          this.loadIntegrations();
          return;
        }

        this.showError(result.error?.description ?? 'Failed to delete integration', result.error?.validationErrors);
      },
      error: (error) => {
        this.deletingIntegrationId.set(null);
        this.showError('Failed to delete integration', [error.message]);
      },
    });
  }

  getIntegrationDetailsArray(): Array<{ label: string; value: any }> {
    const integration = this.selectedIntegration();
    if (!integration) return [];

    return [
      { label: 'ID', value: integration.id },
      { label: 'Installation ID', value: integration.installationId },
      { label: 'Shop Domain', value: integration.shopDomain },
      { label: 'Shop Name', value: integration.shopName },
      { label: 'Email', value: integration.email },
      { label: 'Integration Name', value: integration.integrationName },
      { label: 'Stream Client ID', value: integration.streamClientId },
      { label: 'Stream URL', value: integration.streamUrl ?? integration.streamClientUrl },
      { label: 'Profile Type', value: integration.profileType ?? integration.profileName },
      { label: 'Order Lookback Days', value: integration.orderLookbackDays },
      { label: 'Order Number Prefix', value: integration.orderNumPrefix },
      { label: 'Status', value: integration.isActive ? 'Active' : 'Inactive' },
      { label: 'Order Sync Enabled', value: integration.isOrderSyncEnabled ? 'Yes' : 'No' },
      { label: 'Enable Automatic Order Sync', value: integration.enableAutomaticOrderSync ? 'Yes' : 'No' },
      { label: 'Order Dispatch Sync Enabled', value: integration.isOrderDispatchSyncEnabled ? 'Yes' : 'No' },
      { label: 'Use Current Date as HandsOn Date', value: integration.useCurrentDateAsHandsOnDate ? 'Yes' : 'No' },
      { label: 'Update Tracking After Planning', value: integration.updateTrackingAfterPlanning ? 'Yes' : 'No' },
      { label: 'Add Tracking To Order Note', value: integration.addTrackingToOrderNote ? 'Yes' : 'No' },
      { label: 'Webhook Features Enabled', value: integration.isWebhookFeaturesEnabled ? 'Yes' : 'No' },
      { label: 'Using Stream Partner Account', value: integration.isUsingStreamPartnerAccount ? 'Yes' : 'No' },
      ...(integration.isUsingStreamPartnerAccount
        ? [
            { label: 'Stream Partner Account ID', value: integration.streamPartnerAccountId },
            { label: 'Stream Partner Account Name', value: integration.streamPartnerAccountName },
          ]
        : []),
      { label: 'Created At', value: integration.createdAtUtc },
      { label: 'Updated At', value: integration.updatedAtUtc },
      { label: 'Created By', value: integration.createdBy },
      { label: 'Updated By', value: integration.updatedBy },
    ];
  }

  private showError(message: string, validationErrors?: string[]): void {
    const detail = validationErrors && validationErrors.length > 0 ? validationErrors.join(', ') : message;

    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: detail,
      life: 5000,
    });
  }
  // Stream Webhooks Methods (Admin only)
  viewStreamWebhooks(integration: Integration): void {
    this.webhooksLoading.set(true);
    this.displayWebhooksDialog.set(true);
    this.webhooksData.set(null);

    this.integrationService.getStreamWebhooks(integration.id).subscribe({
      next: (result) => {
        this.webhooksLoading.set(false);
        if (result.isSuccess && result.value) {
          this.webhooksData.set(result.value);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.displayWebhooksDialog.set(false);
        }
      },
      error: (error) => {
        this.webhooksLoading.set(false);
        this.showError('Failed to fetch webhooks from Stream', [error.message]);
        this.displayWebhooksDialog.set(false);
      },
    });
  }

  closeWebhooksDialog(): void {
    this.displayWebhooksDialog.set(false);
    this.webhooksData.set(null);
  }

  // Stream Order Methods (Admin only)
  openOrderInputDialog(integration: Integration): void {
    this.pendingIntegrationId.set(integration.id);
    this.orderNumberInput.set('');
    this.orderNumberError.set('');
    this.displayOrderInputDialog.set(true);
  }

  cancelOrderInput(): void {
    this.displayOrderInputDialog.set(false);
    this.orderNumberInput.set('');
    this.orderNumberError.set('');
    this.pendingIntegrationId.set(0);
  }
  fetchStreamOrder(): void {
    const orderNo = this.orderNumberInput().trim();

    if (!orderNo) {
      this.orderNumberError.set('Order number is required');
      return;
    }

    if (!/^[A-Za-z0-9#-]+$/.test(orderNo)) {
      this.orderNumberError.set('Order number can only include letters, numbers, #, and -');
      return;
    }

    this.orderNumberError.set('');
    this.displayOrderInputDialog.set(false);
    this.displayOrderDialog.set(true);
    this.orderLoading.set(true);
    this.orderData.set(null);

    this.integrationService.getStreamOrder(this.pendingIntegrationId(), orderNo).subscribe({
      next: (result) => {
        this.orderLoading.set(false);
        if (result.isSuccess && result.value) {
          this.orderData.set(result.value);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.displayOrderDialog.set(false);
        }
      },
      error: (error) => {
        this.orderLoading.set(false);
        this.showError('Failed to fetch order from Stream', [error.error.message]);
        this.displayOrderDialog.set(false);
      },
    });
  }

  closeOrderDialog(): void {
    this.displayOrderDialog.set(false);
    this.orderData.set(null);
  }
}
