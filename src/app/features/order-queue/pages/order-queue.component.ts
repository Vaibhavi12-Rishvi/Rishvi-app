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
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { IntegrationService } from '../../../core/services/integration.service';
import { OrderQueueService } from '../../../core/services/order-queue.service';
import { OrderQueueItem } from '../../../models/order-queue.model';
import { OrderDetails } from '../../../models/order-details.model';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: 'app-order-queue',
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
    AuditLogFilterBarComponent
  ],
  providers: [MessageService],
  templateUrl: './order-queue.component.html',
  styleUrl: './order-queue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderQueueComponent implements OnInit {
  private readonly orderQueueService = inject(OrderQueueService);
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);
  private readonly DEFAULT_PAGE_SIZE = 50;

  syncStatusOptions = [
    { label: 'All', value: null },
    { label: 'Pending', value: 1 },
    { label: 'Processing', value: 2 },
    { label: 'Validation Failed', value: 3 },
    { label: 'Ready For Retry', value: 4 },
    { label: 'Sent To Stream', value: 5 },
    { label: 'Completed', value: 6 },
    { label: 'Failed', value: 7 },
  ];

  installationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);

  searchText = signal('');
  orderName = signal('');
  linnworksNumOrderId = signal('');
  streamOrderId = signal('');
  selectedSyncStatus = signal(this.syncStatusOptions[0]);
  selectedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());
  private readonly appliedOrderName = signal('');
  private readonly appliedSearchText = signal('');
  private readonly appliedLinnworksNumOrderId = signal('');
  private readonly appliedStreamOrderId = signal('');
  private readonly appliedSyncStatus = signal<{ label: string; value: number | null }>(this.syncStatusOptions[0]);
  private readonly appliedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  orders = signal<OrderQueueItem[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  sortField = signal<string>('createdAtUtc');
  sortOrder = signal<number>(-1);

  displayQueueDialog = signal<boolean>(false);
  displayOrderDialog = signal<boolean>(false);
  dialogLoading = signal<boolean>(false);
  selectedQueueItem = signal<OrderQueueItem | null>(null);
  selectedOrder = signal<OrderDetails | null>(null);

  constructor() {
    effect(() => {
      this.appliedSearchText();
      this.appliedOrderName();
      this.appliedLinnworksNumOrderId();
      this.appliedStreamOrderId();
      this.appliedSyncStatus();
      this.appliedInstallation();
      this.appliedDateFrom();
      this.appliedDateTo();

      this.loadOrderQueue();
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
            ...result.value.map((inst) => ({ label: `${inst.id} - ${inst.email}`, value: inst.id })),
          ];
          this.installationOptions.set(options);
        }
      },
    });
  }

  loadOrderQueue(): void {
    const linnworksNumOrderId = this.parseNumber(this.appliedLinnworksNumOrderId());
    const params: any = {
      searchText: this.appliedSearchText() ?? undefined,
      orderName: this.appliedOrderName() ?? undefined,
      linnworksNumOrderId: linnworksNumOrderId ?? undefined,
      streamOrderId: this.appliedStreamOrderId() ?? undefined,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    const syncStatus = this.appliedSyncStatus().value;
    if (syncStatus !== null && syncStatus !== undefined) params.syncStatus = syncStatus;
    const installationId = this.appliedInstallation().value;
    if (installationId !== null && installationId !== undefined) params.installationId = installationId;

    this.loading.set(true);
    this.orderQueueService.getOrderQueue(params).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.isSuccess && res.value) {
          this.orders.set(res.value.data);
          this.totalCount.set(res.value.totalCount);
        } else if (res.error) {
          this.showError(res.error.description, res.error.validationErrors);
          this.orders.set([]);
        }
      },
      error: () => {
        this.loading.set(false);
        this.showError('Failed to load order queue');
        this.orders.set([]);
      },
    });
  }

  applyFilters() {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    this.appliedSearchText.set(this.searchText().trim());
    this.appliedOrderName.set(this.orderName().trim());
    this.appliedLinnworksNumOrderId.set(this.linnworksNumOrderId().trim());
    this.appliedStreamOrderId.set(this.streamOrderId().trim());
    this.appliedSyncStatus.set(this.selectedSyncStatus());
    this.appliedInstallation.set(this.selectedInstallation());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters() {
    this.searchText.set('');
    this.orderName.set('');
    this.linnworksNumOrderId.set('');
    this.streamOrderId.set('');
    this.selectedSyncStatus.set(this.syncStatusOptions[0]);
    this.selectedInstallation.set({ label: 'All', value: null });
    this.dateFromValue.set('');
    this.dateToValue.set('');
    this.applyFilters();
  }

  onPageChange(event: any) {
    const page = Math.floor(event.first / event.rows) + 1;
    this.pageNumber.set(page);
    this.firstRow.set(event.first);
    this.loadOrderQueue();
  }

  onSort(event: any) {
    this.sortField.set(event.field ?? 'createdAtUtc');
    this.sortOrder.set(event.order);
    this.pageNumber.set(1);
    this.firstRow.set(0);
    this.loadOrderQueue();
  }

  viewQueueInfo(item: OrderQueueItem): void {
    this.selectedQueueItem.set(item);
    this.displayQueueDialog.set(true);
  }

  closeQueueDialog(): void {
    this.displayQueueDialog.set(false);
    this.selectedQueueItem.set(null);
  }

  navigateToApiLogs(queueId: string): void {
    this.router.navigate(['/orders-send-api-audit-logs'], { queryParams: { orderQueueId: queueId } });
  }

  viewOrderDetails(item: OrderQueueItem): void {
    this.displayOrderDialog.set(true);
    this.dialogLoading.set(true);
    this.selectedOrder.set(null);

    this.orderQueueService.getOrderById(item.shopifyOrderId).subscribe({
      next: (result) => {
        this.dialogLoading.set(false);
        if (result?.isSuccess && result.value) {
          this.selectedOrder.set(result.value);
        } else {
          this.displayOrderDialog.set(false);
          this.showError(result?.error?.description ?? 'Failed to load order details');
        }
      },
      error: (error) => {
        this.dialogLoading.set(false);
        this.displayOrderDialog.set(false);
        this.showError('Failed to load order details', [error?.message ?? 'Unknown error']);
      },
    });
  }

  closeOrderDialog(): void {
    this.displayOrderDialog.set(false);
    this.selectedOrder.set(null);
  }

  compareOptions = (o1: any, o2: any) => o1?.value === o2?.value;

  getSyncStatusLabel(status: number): string {
    switch (status) {
      case 1:
        return 'Pending';
      case 2:
        return 'Processing';
      case 3:
        return 'Validation Failed';
      case 4:
        return 'Ready For Retry';
      case 5:
        return 'Sent To Stream';
      case 6:
        return 'Completed';
      case 7:
        return 'Failed';
      default:
        return 'Unknown';
    }
  }

  getSyncStatusSeverity(status: number): 'success' | 'info' | 'warn' | 'danger' {
    switch (status) {
      case 3:
        return 'info';
      case 4:
        return 'danger';
      case 5:
        return 'danger';
      case 2:
        return 'warn';
      case 7:
        return 'danger';
      case 6:
        return 'success';
      case 1:
        return 'info';
      default:
        return 'info';
    }
  }

  formatJsonString(value: string): string {
    if (value) {
      try {
        const parsed = JSON.parse(value);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return value;
      }
    }

    return '-';
  }

  private parseNumber(value: string | number | null | undefined): number | undefined {
    if (value === null || value === undefined) {
      return undefined;
    }

    const trimmed = value.toString().trim();
    if (!trimmed) {
      return undefined;
    }

    const num = Number(trimmed);
    return Number.isFinite(num) ? num : undefined;
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

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message + (validationErrors?.length ? '\n' + validationErrors.join('\n') : ''),
      life: 5000,
    });
  }
}
