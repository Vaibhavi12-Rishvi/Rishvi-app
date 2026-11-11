import { Component, inject, signal, effect, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { LabelType, OrderType, PostalService, PostalServiceQueryParams } from '../../../models/postal-service.model';
import { PostalServiceService } from '../../../core/services/postal-service.service';
import { IntegrationService } from '../../../core/services/integration.service';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

interface NumberFilterOption {
  label: string;
  value: number | null;
}

@Component({
  selector: 'app-postal-service-list',
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
    TooltipModule,
    DialogModule,
    ConfirmDialogModule,
    AuditLogFilterBarComponent
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './postal-service-list.component.html',
  styleUrl: './postal-service-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostalServiceListComponent implements OnInit {
  private readonly postalServiceService = inject(PostalServiceService);
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly router = inject(Router);

  // Constants
  private readonly DEFAULT_PAGE_SIZE = 50;

  // Status options
  statusOptions = [
    { label: 'All', value: null },
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ];

  // Integration options for dropdown
  integrationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);
  orderTypeOptions: NumberFilterOption[] = [
    { label: 'All', value: null },
    { label: 'Delivery', value: OrderType.Delivery },
    { label: 'Collection', value: OrderType.Collection },
  ];
  labelTypeOptions: NumberFilterOption[] = [
    { label: 'All', value: null },
    { label: 'Default', value: LabelType.Default },
    { label: 'Portrait No Qr', value: LabelType.PortraitNoQr },
    { label: 'Portrait Standard', value: LabelType.PortraitStandard },
    { label: 'Compact 100x50 No Qr', value: LabelType.Compact100x50NoQr },
  ];

  // Form filter signals (for UI binding only)
  searchText = signal('');
  vendor = signal('');
  country = signal('');
  selectedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  selectedOrderType = signal<NumberFilterOption>(this.orderTypeOptions[0]);
  selectedLabelType = signal<NumberFilterOption>(this.labelTypeOptions[0]);
  selectedStatus = signal(this.statusOptions[0]);
  displayDialog = signal<boolean>(false);
  selectedPostalService = signal<PostalService | null>(null);

  // Applied filter signals (trigger API calls)
  private readonly appliedSearchText = signal('');
  private readonly appliedVendor = signal('');
  private readonly appliedCountry = signal('');
  private readonly appliedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedOrderType = signal<NumberFilterOption>(this.orderTypeOptions[0]);
  private readonly appliedLabelType = signal<NumberFilterOption>(this.labelTypeOptions[0]);
  private readonly appliedStatus = signal<{ label: string; value: boolean | null }>(this.statusOptions[0]);

  // Table state signals
  postalServices = signal<PostalService[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  totalPages = signal<number>(0);
  sortField = signal<string>('createdAtUtc');
  sortOrder = signal<number>(-1); // -1 for descending, 1 for ascending

  constructor() {
    // Effect only triggers on applied filters
    effect(() => {
      // Track only applied filters
      this.appliedSearchText();
      this.appliedVendor();
      this.appliedCountry();
      this.appliedIntegration();
      this.appliedOrderType();
      this.appliedLabelType();
      this.appliedStatus();

      // Load data only when applied filters change
      this.loadPostalServices();
    });
  }

  ngOnInit(): void {
    this.loadActiveIntegrations();
  }

  loadActiveIntegrations(): void {
    this.integrationService.getActiveIntegrations().subscribe({
      next: (result) => {
        if (result.isSuccess && result.value) {
          const options = [
            { label: 'All', value: null },
            ...result.value.map((integration) => ({
              label:  `${integration.id}-${integration.integrationName}`,
              value: integration.id,
            })),
          ];
          this.integrationOptions.set(options);
        } else if (result.error) {
          this.showError('Failed to load integrations', result.error.validationErrors);
        }
      },
      error: (error) => {
        this.showError('Failed to load integrations', [error.message]);
      },
    });
  }

  loadPostalServices(): void {
    const params: PostalServiceQueryParams = {
      searchText: this.appliedSearchText() ?? undefined,
      vendor: this.appliedVendor() ?? undefined,
      country: this.appliedCountry() ?? undefined,
      integrationId: this.appliedIntegration().value,
      orderType: this.appliedOrderType().value,
      labelType: this.appliedLabelType().value,
      isActive: this.appliedStatus().value,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    this.loading.set(true);

    this.postalServiceService.getPostalServices(params).subscribe({
      next: (result) => {
        this.loading.set(false);

        if (result.isSuccess && result.value) {
          this.postalServices.set(result.value.data);
          this.totalCount.set(result.value.totalCount);
          this.totalPages.set(result.value.totalPages);
        } else if (result.error) {
          this.showError(result.message, result.error.validationErrors);
          this.postalServices.set([]);
          this.totalCount.set(0);
          this.totalPages.set(0);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.showError('An unexpected error occurred', [error.message]);
        this.postalServices.set([]);
        this.totalCount.set(0);
        this.totalPages.set(0);
      },
    });
  }

  applyFilters(): void {
    // Reset pagination FIRST
    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Copy form values to applied signals (triggers effect)
    this.appliedSearchText.set(this.searchText().trim());
    this.appliedVendor.set(this.vendor().trim());
    this.appliedCountry.set(this.country().trim());
    this.appliedIntegration.set(this.selectedIntegration());
    this.appliedOrderType.set(this.selectedOrderType());
    this.appliedLabelType.set(this.selectedLabelType());
    this.appliedStatus.set(this.selectedStatus());
  }

  clearFilters(): void {
    // Reset form signals
    this.searchText.set('');
    this.vendor.set('');
    this.country.set('');
    this.selectedIntegration.set({ label: 'All', value: null });
    this.selectedOrderType.set(this.orderTypeOptions[0]);
    this.selectedLabelType.set(this.labelTypeOptions[0]);
    this.selectedStatus.set(this.statusOptions[0]);

    // Apply cleared filters
    this.applyFilters();
  }

  onPageChange(event: any): void {
    const page = Math.floor(event.first / event.rows) + 1;
    this.pageNumber.set(page);
    this.firstRow.set(event.first);
    this.pageSize.set(event.rows);

    // Effect will NOT trigger - call API directly
    this.loadPostalServices();
  }

  onSort(event: any): void {
    this.sortField.set(event.field ?? 'createdAtUtc');
    this.sortOrder.set(event.order);
    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Effect will NOT trigger - call API directly
    this.loadPostalServices();
  }

  getStatusSeverity(service: PostalService): 'success' | 'danger' {
    return service.isActive ? this.getActiveStatusSeverity() : this.getInactiveStatusSeverity();
  }

  private getActiveStatusSeverity(): 'success' {
    return 'success';
  }

  private getInactiveStatusSeverity(): 'danger' {
    return 'danger';
  }

  compareStatusOptions(option1: any, option2: any): boolean {
    return option1?.value === option2?.value;
  }

  compareIntegrationOptions(option1: any, option2: any): boolean {
    return option1?.value === option2?.value;
  }

  compareNumberFilterOptions(option1: NumberFilterOption, option2: NumberFilterOption): boolean {
    return option1?.value === option2?.value;
  }

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message + (validationErrors?.length ? '\n' + validationErrors.join('\n') : ''),
      life: 5000,
    });
  }
  // View dialog methods
  viewPostalServiceDetails(postalService: PostalService): void {
    this.selectedPostalService.set(postalService);
    this.displayDialog.set(true);
  }

  closeDialog(): void {
    this.displayDialog.set(false);
    this.selectedPostalService.set(null);
  }
  getPostalServiceDetailsArray(): Array<{ label: string; value: any }> {
    const service = this.selectedPostalService();
    if (!service) return [];

    return [
      { label: 'ID', value: service.id },
      { label: 'Integration ID', value: service.integrationId },
      { label: 'Service Name', value: service.serviceName },
      { label: 'Service', value: service.service },
      { label: 'Service Level', value: service.serviceLevel },
      { label: 'Depot ID', value: service.depotId },
      { label: 'Depot Name', value: service.depotName },
      { label: 'Stock Location ID', value: service.stockLocationId },
      { label: 'Stock Location Name', value: service.stockLocationName },
      { label: 'Delivery Method ID', value: service.deliveryMethodId },
      { label: 'Delivery Method Name', value: service.deliveryMethodName },
      { label: 'Dimension Unit', value: service.defaultDimensionUnit },
      { label: 'Order Type', value: service.orderType },
      { label: 'Label Type', value: service.labelType },
      { label: 'Copies', value: service.copies },
      { label: 'Status', value: service.isActive ? 'Active' : 'Inactive' },
      { label: 'Manual Delivery Config', value: service.isManualDeliveryConfig ? 'Yes' : 'No' },
      ...(service.isManualDeliveryConfig
        ? [
            { label: 'Manual Delivery Method', value: service.manualDeliveryMethod },
            { label: 'Manual Stock Location', value: service.manualStockLocation },
            { label: 'Stream Partner ID', value: service.streamPartnerId },
            { label: 'Stream Partner Name', value: service.streamPartnerName },
          ]
        : []),
      { label: 'Created At', value: service.createdAtUtc },
    ];
  }

  confirmDeletePostalService(postalService: PostalService): void {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete postal service ${postalService.serviceName}?`,
      header: 'Delete Postal Service',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptIcon: 'pi pi-trash',
      rejectIcon: 'pi pi-times',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.deletePostalService(postalService.id);
      },
    });
  }

  private deletePostalService(id: number): void {
    this.postalServiceService.deletePostalService(id).subscribe({
      next: (result) => {
        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Postal service deleted successfully',
            life: 3000,
          });

          this.loadPostalServices();
          return;
        }

        this.showError(result.error?.description ?? 'Failed to delete postal service', result.error?.validationErrors);
      },
      error: (error) => {
        this.showError('Failed to delete postal service', [error.error.message]);
      },
    });
  }

  goToAddPostalService(): void {
    this.router.navigate(['/postal-services/add']);
  }

  goToEditPostalService(id: number): void {
    this.router.navigate(['/postal-services/add'], {
      queryParams: { id },
    });
  }
}
