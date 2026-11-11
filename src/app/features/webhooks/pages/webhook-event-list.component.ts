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
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { WebhookEvent, WebhookEventQueryParams, WebhookStatus } from '../../../models/webhook-event.model';
import { WebhookEventService } from '../../../core/services/webhook-event.service';
import { IntegrationService } from '../../../core/services/integration.service';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: 'app-webhook-event-list',
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
  templateUrl: './webhook-event-list.component.html',
  styleUrl: './webhook-event-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhookEventListComponent {
  private readonly webhookEventService = inject(WebhookEventService);
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);

  // Constants
  private readonly DEFAULT_PAGE_SIZE = 50;

  // Dropdown options
  integrationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);

  // Status options
  statusOptions = [
    { label: 'All', value: null },
    { label: 'Pending', value: WebhookStatus.Pending },
    { label: 'Processing', value: WebhookStatus.Processing },
    { label: 'Completed', value: WebhookStatus.Completed },
    { label: 'Failed', value: WebhookStatus.Failed },
    { label: 'Skipped', value: WebhookStatus.Skipped },
    { label: 'ReadyForRetry', value: WebhookStatus.ReadyForRetry },
  ];

  // Has Errors options
  hasErrorsOptions = [
    { label: 'All', value: null },
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  // Form filter signals (for UI binding only)
  searchText = signal('');
  correlationId = signal('');
  eventCode = signal('');
  identifier = signal('');
  partyId = signal('');
  selectedStatus = signal(this.statusOptions[0]);
  selectedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  selectedHasErrors = signal(this.hasErrorsOptions[0]);
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());

  // Applied filter signals (trigger API calls)
  private readonly appliedSearchText = signal('');
  private readonly appliedCorrelationId = signal('');
  private readonly appliedEventCode = signal('');
  private readonly appliedIdentifier = signal('');
  private readonly appliedPartyId = signal('');
  private readonly appliedStatus = signal<{ label: string; value: number | null }>(this.statusOptions[0]);
  private readonly appliedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedHasErrors = signal<{ label: string; value: boolean | null }>(this.hasErrorsOptions[0]);
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  // Table state signals
  events = signal<WebhookEvent[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  totalPages = signal<number>(0);
  sortField = signal<string>('receivedAtUtc');
  sortOrder = signal<number>(-1);

  // Dialog state for raw payload
  displayDialog = signal<boolean>(false);
  rawPayloadJson = signal<string>('');

  constructor() {
    this.loadDropdownData();

    effect(() => {
      // Track only applied filters
      this.appliedSearchText();
      this.appliedCorrelationId();
      this.appliedEventCode();
      this.appliedIdentifier();
      this.appliedPartyId();
      this.appliedStatus();
      this.appliedIntegration();
      this.appliedHasErrors();
      this.appliedDateFrom();
      this.appliedDateTo();

      this.loadEvents();
    });
  }

  loadDropdownData(): void {
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

  loadEvents(): void {
    const params: WebhookEventQueryParams = {
      searchText: this.appliedSearchText() ?? undefined,
      correlationId: this.appliedCorrelationId() ?? undefined,
      eventCode: this.appliedEventCode() ?? undefined,
      identifier: this.appliedIdentifier() ?? undefined,
      partyId: this.appliedPartyId() ?? undefined,
      status: this.appliedStatus().value ?? undefined,
      integrationId: this.appliedIntegration().value ?? undefined,
      hasErrors: this.appliedHasErrors().value,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    this.loading.set(true);

    this.webhookEventService.getWebhookEvents(params).subscribe({
      next: (result) => {
        this.loading.set(false);

        if (result.isSuccess && result.value) {
          this.events.set(result.value.data);
          this.totalCount.set(result.value.totalCount);
          this.totalPages.set(result.value.totalPages);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.events.set([]);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.events.set([]);
        this.showError('Failed to load webhook events', [error.message]);
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
    this.sortField.set(event.field ?? 'receivedAtUtc');
    this.sortOrder.set(event.order);

    this.pageNumber.set(1);
    this.firstRow.set(0);
  }

  applyFilters(): void {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Copy form filter values to applied filters (triggers effect)
    this.appliedSearchText.set(this.searchText().trim());
    this.appliedCorrelationId.set(this.correlationId().trim());
    this.appliedEventCode.set(this.eventCode().trim());
    this.appliedIdentifier.set(this.identifier().trim());
    this.appliedPartyId.set(this.partyId().trim());
    this.appliedStatus.set(this.selectedStatus());
    this.appliedIntegration.set(this.selectedIntegration());
    this.appliedHasErrors.set(this.selectedHasErrors());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters(): void {
    // Clear form values
    this.searchText.set('');
    this.correlationId.set('');
    this.eventCode.set('');
    this.identifier.set('');
    this.partyId.set('');
    this.selectedStatus.set(this.statusOptions[0]);
    this.selectedIntegration.set({ label: 'All', value: null });
    this.selectedHasErrors.set(this.hasErrorsOptions[0]);
    this.dateFromValue.set('');
    this.dateToValue.set('');

    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Clear applied filters (triggers API call)
    this.appliedSearchText.set('');
    this.appliedCorrelationId.set('');
    this.appliedEventCode.set('');
    this.appliedIdentifier.set('');
    this.appliedPartyId.set('');
    this.appliedStatus.set(this.statusOptions[0]);
    this.appliedIntegration.set({ label: 'All', value: null });
    this.appliedHasErrors.set(this.hasErrorsOptions[0]);
    this.appliedDateFrom.set('');
    this.appliedDateTo.set('');
  }

  getStatusSeverity(status: string): 'info' | 'warn' | 'success' | 'danger' {
    switch (status) {
      case 'Pending':
        return 'info';
      case 'Processing':
        return 'warn';
      case 'Completed':
        return 'success';
      case 'Failed':
        return 'danger';
      case 'Skipped':
        return 'warn';
      case 'ReadyForRetry':
        return 'warn';
      default:
        return 'info';
    }
  }

  compareOptions(o1: any, o2: any): boolean {
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

  viewRawPayload(rawPayload: string | undefined): void {
    this.displayDialog.set(true);
    this.rawPayloadJson.set(this.formatJson(rawPayload ?? ''));
  }

  formatJson(jsonString: string): string {
    if (!jsonString) {
      return 'No data available';
    }

    try {
      // If it's already an object, stringify it
      if (typeof jsonString === 'object') {
        return JSON.stringify(jsonString, null, 2);
      }

      // If it's a string, parse and re-stringify with formatting
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      console.error('Error formatting JSON:', e);
      // Return the original string if parsing fails
      return jsonString;
    }
  }

  closeDialog(): void {
    this.displayDialog.set(false);
    this.rawPayloadJson.set('');
  }

   copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.messageService.add({ severity: 'success', summary: 'Copied', detail: 'Correlation ID copied to clipboard', life: 2000 });
    });
  }

   truncateId(id: string | null | undefined): string {
    if (!id) return '-';
    return id.length > 8 ? id.substring(0, 8) + '...' : id;
}
}
