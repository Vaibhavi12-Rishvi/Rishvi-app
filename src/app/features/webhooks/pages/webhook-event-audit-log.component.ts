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
import { MessageService } from 'primeng/api';
import { WebhookEventAuditLogService } from '../../../core/services/webhook-event-audit-log.service';
import { AuditLogHelperService } from '../../../core/services/audit-log-helper.service';
import { AuditLevel, WebhookAuditAction } from '../../../models/audit-log.model';
import { WebhookEventAuditLog } from '../../../models/webhook-event-audit-log.model';
import { IntegrationService } from '../../../core/services/integration.service';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: 'app-webhook-event-audit-log',
  imports: [

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
    AuditLogFilterBarComponent
  ],
  providers: [MessageService],
  templateUrl: './webhook-event-audit-log.component.html',
  styleUrl: './webhook-event-audit-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhookEventAuditLogComponent {
  private readonly auditLogService = inject(WebhookEventAuditLogService);
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);
  auditHelper = inject(AuditLogHelperService);
  private readonly DEFAULT_PAGE_SIZE = 50;

  // Dropdown options
  integrationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);

  levelOptions = [
    { label: 'All', value: null },
    { label: 'Info', value: AuditLevel.Info },
    { label: 'Success', value: AuditLevel.Success },
    { label: 'Warning', value: AuditLevel.Warning },
    { label: 'Error', value: AuditLevel.Error },
  ];

  actionOptions = [
    { label: 'All', value: null },
    { label: 'EventReceived', value: WebhookAuditAction.EventReceived },
    { label: 'EventProcessingStarted', value: WebhookAuditAction.EventProcessingStarted },
    { label: 'EventProcessingSucceeded', value: WebhookAuditAction.EventProcessingSucceeded },
    { label: 'EventProcessingFailed', value: WebhookAuditAction.EventProcessingFailed },
    { label: 'OrderUpdateStarted', value: WebhookAuditAction.OrderUpdateStarted },
    { label: 'OrderUpdateSucceeded', value: WebhookAuditAction.OrderUpdateSucceeded },
    { label: 'OrderUpdateFailed', value: WebhookAuditAction.OrderUpdateFailed },
    { label: 'OrderUpdateSkipped', value: WebhookAuditAction.OrderUpdateSkipped },
    { label: 'EventProcessingSkipped', value: WebhookAuditAction.EventProcessingSkipped },
  ];

  searchText = signal('');
  correlationId = signal('');
  selectedLevel = signal(this.levelOptions[0]);
  selectedAction = signal(this.actionOptions[0]);
  eventCode = signal('');
  identifier = signal('');
  selectedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  webhookEventId = signal<number | null>(null);
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());

  private readonly appliedSearchText = signal('');
  private readonly appliedCorrelationId = signal('');
  private readonly appliedLevel = signal<{ label: string; value: AuditLevel | null }>(this.levelOptions[0]);
  private readonly appliedAction = signal<{ label: string; value: WebhookAuditAction | null }>(this.actionOptions[0]);
  private readonly appliedEventCode = signal('');
  private readonly appliedIdentifier = signal('');
  private readonly appliedIntegration = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedWebhookEventId = signal<number | null>(null);
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  logs = signal<WebhookEventAuditLog[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  sortField = signal<string>('timestampUtc');
  sortOrder = signal<number>(-1);

  constructor() {
    this.loadDropdownData();

    effect(() => {
      this.appliedSearchText();
      this.appliedCorrelationId();
      this.appliedLevel();
      this.appliedAction();
      this.appliedEventCode();
      this.appliedIdentifier();
      this.appliedIntegration();
      this.appliedWebhookEventId();
      this.appliedDateFrom();
      this.appliedDateTo();

      this.loadAuditLogs();
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

  loadAuditLogs(): void {
    const params: any = {
      searchText: this.appliedSearchText() ?? undefined,
      correlationId: this.appliedCorrelationId() ?? undefined,
      eventCode: this.appliedEventCode() ?? undefined,
      identifier: this.appliedIdentifier() ?? undefined,
      integrationId: this.appliedIntegration().value ?? undefined,
      webhookEventId: this.appliedWebhookEventId() ?? undefined,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

     console.log('Params:', params);

    const level = this.appliedLevel().value;
    if (level !== null && level !== undefined) params.level = level;

    const action = this.appliedAction().value;
    if (action !== null && action !== undefined) params.action = action;

    this.loading.set(true);

    this.auditLogService.getWebhookEventAuditLogs(params).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.isSuccess && res.value) {
          this.logs.set(res.value.data);
          this.totalCount.set(res.value.totalCount);
        } else if (res.error) {
          this.showError(res.error.description, res.error.validationErrors);
          this.logs.set([]);
        }
      },
      error: () => {
        this.loading.set(false);
        this.showError('Failed to load audit logs');
        this.logs.set([]);
      },
    });
  }

  applyFilters() {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    this.appliedSearchText.set(this.searchText().trim());
    this.appliedCorrelationId.set(this.correlationId().trim());
    this.appliedLevel.set(this.selectedLevel());
    this.appliedAction.set(this.selectedAction());
    this.appliedEventCode.set(this.eventCode().trim());
    this.appliedIdentifier.set(this.identifier().trim());
    this.appliedIntegration.set(this.selectedIntegration());
    this.appliedWebhookEventId.set(this.webhookEventId());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters() {
    this.searchText.set('');
    this.correlationId.set('');
    this.selectedLevel.set(this.levelOptions[0]);
    this.selectedAction.set(this.actionOptions[0]);
    this.eventCode.set('');
    this.identifier.set('');
    this.selectedIntegration.set({ label: 'All', value: null });
    this.webhookEventId.set(null);
    this.dateFromValue.set('');
    this.dateToValue.set('');
    this.applyFilters();
  }

  onPageChange(event: any) {
    const page = Math.floor(event.first / event.rows) + 1;

    this.pageNumber.set(page);
    this.firstRow.set(event.first);
    this.pageSize.set(event.rows);
  }

  onSort(event: any) {
    this.sortField.set(event.field ?? 'timestampUtc');
    this.sortOrder.set(event.order);

    this.pageNumber.set(1);
    this.firstRow.set(0);
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

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message + (validationErrors?.length ? '\n' + validationErrors.join('\n') : ''),
      life: 5000,
    });
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
