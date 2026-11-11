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
import { MessageService } from 'primeng/api';
import { WebhookSubscription, WebhookSubscriptionQueryParams } from '../../../models/webhook-subscription.model';
import { IntegrationService } from '../../../core/services/integration.service';
import { WebhookSubscriptionService } from '../../../core/services/webhook-subscription.service copy';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: 'app-webhook-subscription-list',
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
    AuditLogFilterBarComponent
  ],
  providers: [MessageService],
  templateUrl: './webhook-subscription-list.component.html',
  styleUrl: './webhook-subscription-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhookSubscriptionListComponent {
  private readonly webhookSubscriptionService = inject(WebhookSubscriptionService);
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);

  // Constants
  private readonly DEFAULT_PAGE_SIZE = 50;

  // Dropdown options
  installationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);
  integrationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);

  // Status options for dropdown
  statusOptions = signal([
    { label: 'All', value: null },
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ]);

  // Form filter signals (for UI binding only)
  searchText = signal('');
  selectedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  selectedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  selectedStatus = signal(this.statusOptions()[0]);
  eventName = signal('');
  identifier = signal('');
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());

  // Applied filter signals (trigger API calls)
  private readonly appliedSearchText = signal('');
  private readonly appliedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedStatus = signal<{ label: string; value: boolean | null }>(this.statusOptions()[0]);
  private readonly appliedEventName = signal('');
  private readonly appliedIdentifier = signal('');
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  // Table state signals
  subscriptions = signal<WebhookSubscription[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  totalPages = signal<number>(0);
  sortField = signal<string>('createdAtUtc');
  sortOrder = signal<number>(-1);

  constructor() {
    this.loadDropdownData();

    effect(() => {
      // Track only applied filters
      this.appliedSearchText();
      this.appliedInstallation();
      this.appliedIntegration();
      this.appliedStatus();
      this.appliedEventName();
      this.appliedIdentifier();
      this.appliedDateFrom();
      this.appliedDateTo();

      this.loadSubscriptions();
    });
  }

  loadDropdownData(): void {
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
        }
      },
    });

    this.integrationService.getActiveIntegrations().subscribe({
      next: (result) => {
        if (result.isSuccess && result.value) {
          const options = [
            { label: 'All', value: null },
            ...result.value.map((integ) => ({
              label: `${integ.id}-${integ.integrationName}`,
              value: integ.id,
            })),
          ];
          this.integrationOptions.set(options);
        }
      },
    });
  }

  loadSubscriptions(): void {
    const params: WebhookSubscriptionQueryParams = {
      searchText: this.appliedSearchText() ?? undefined,
      installationId: this.appliedInstallation().value ?? undefined,
      integrationId: this.appliedIntegration().value ?? undefined,
      isActive: this.appliedStatus().value,
      eventName: this.appliedEventName() ?? undefined,
      identifier: this.appliedIdentifier() ?? undefined,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    this.loading.set(true);

    this.webhookSubscriptionService.getWebhookSubscriptions(params).subscribe({
      next: (result) => {
        this.loading.set(false);

        if (result.isSuccess && result.value) {
          this.subscriptions.set(result.value.data);
          this.totalCount.set(result.value.totalCount);
          this.totalPages.set(result.value.totalPages);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.subscriptions.set([]);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.subscriptions.set([]);
        this.showError('Failed to load webhook subscriptions', [error.message]);
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

    // Copy form filter values to applied filters (triggers effect)
    this.appliedSearchText.set(this.searchText().trim());
    this.appliedInstallation.set(this.selectedInstallation());
    this.appliedIntegration.set(this.selectedIntegration());
    this.appliedStatus.set(this.selectedStatus());
    this.appliedEventName.set(this.eventName().trim());
    this.appliedIdentifier.set(this.identifier().trim());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters(): void {
    // Clear form values
    this.searchText.set('');
    this.selectedInstallation.set({ label: 'All', value: null });
    this.selectedIntegration.set({ label: 'All', value: null });
    this.selectedStatus.set(this.statusOptions()[0]);
    this.eventName.set('');
    this.identifier.set('');
    this.dateFromValue.set('');
    this.dateToValue.set('');

    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Clear applied filters (triggers API call)
    this.appliedSearchText.set('');
    this.appliedInstallation.set({ label: 'All', value: null });
    this.appliedIntegration.set({ label: 'All', value: null });
    this.appliedStatus.set(this.statusOptions()[0]);
    this.appliedEventName.set('');
    this.appliedIdentifier.set('');
    this.appliedDateFrom.set('');
    this.appliedDateTo.set('');
  }

  getStatusSeverity(subscription: WebhookSubscription): 'success' | 'secondary' {
    return subscription.isActive ? this.getActiveStatusSeverity() : this.getInactiveStatusSeverity();
  }

  private getActiveStatusSeverity(): 'success' {
    return 'success';
  }

  private getInactiveStatusSeverity(): 'secondary' {
    return 'secondary';
  }

  compareStatusOptions(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
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

  compareOptions(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.value === o2.value : o1 === o2;
  }
}
