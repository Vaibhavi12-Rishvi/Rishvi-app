import { Component, inject, signal, effect, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { AuditLogService } from '../../../core/services/audit-log.service';
import { HttpStatusCode } from '../../../models/audit-log.model';
import { OrdersSendApiAuditLog } from '../../../models/orders-send-api-audit-log.model';
import { AuditLogHelperService } from '../../../core/services/audit-log-helper.service';
import { AuditLogFilterBarComponent, SelectFilterOption, SelectHttpMethodFilterOption } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: 'app-orders-send-api-audit-log',
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
  templateUrl: './orders-send-api-audit-log.component.html',
  styleUrl: './orders-send-api-audit-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersSendApiAuditLogComponent implements OnInit {
  private readonly auditLogService = inject(AuditLogService);
  private readonly messageService = inject(MessageService);
  private readonly route = inject(ActivatedRoute);
    auditHelper = inject(AuditLogHelperService);

  private readonly DEFAULT_PAGE_SIZE = 50;

  httpStatusOptions = signal([
    { label: 'All', value: null },
    { label: '200 - OK', value: HttpStatusCode.OK },
    { label: '400 - Bad Request', value: HttpStatusCode.BadRequest },
    { label: '401 - Unauthorized', value: HttpStatusCode.Unauthorized },
    { label: '403 - Forbidden', value: HttpStatusCode.Forbidden },
    { label: '404 - Not Found', value: HttpStatusCode.NotFound },
    { label: '422 - Unprocessable Entity', value: HttpStatusCode.UnprocessableEntity },
    { label: '500 - Internal Server Error', value: HttpStatusCode.InternalServerError },
    { label: '502 - Bad Gateway', value: HttpStatusCode.BadGateway },
    { label: '503 - Service Unavailable', value: HttpStatusCode.ServiceUnavailable },
    { label: '504 - Gateway Timeout', value: HttpStatusCode.GatewayTimeout },
  ]);

  successOptions = signal([
    { label: 'All', value: null },
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ]);


  searchText = signal('');
  correlationId = signal('');
  apiEndpoint = signal('');
  orderQueueId = signal('');
  selectedHttpStatus = signal(this.httpStatusOptions()[0]);
  selectedSuccess = signal(this.successOptions()[0]);
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());

  private readonly appliedSearchText = signal('');
  private readonly appliedCorrelationId = signal('');
  private readonly appliedApiEndpoint = signal('');
  private readonly appliedOrderQueueId = signal('');
  private readonly appliedHttpStatus = signal<{ label: string; value: HttpStatusCode | null }>(this.httpStatusOptions()[0]);
  private readonly appliedSuccess = signal<{ label: string; value: boolean | null }>(this.successOptions()[0]);
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  logs = signal<OrdersSendApiAuditLog[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  sortField = signal<string>('createdAtUtc');
  sortOrder = signal<number>(-1);

  // Dialog state
  displayDialog = signal<boolean>(false);
  dialogLoading = signal<boolean>(false);
  selectedLogId = signal<string>('');
  requestJson = signal<string>('');
  responseJson = signal<string>('');

  constructor() {
    effect(() => {
      this.appliedSearchText();
      this.appliedCorrelationId();
      this.appliedApiEndpoint();
      this.appliedOrderQueueId();
      this.appliedHttpStatus();
      this.appliedSuccess();
      this.appliedDateFrom();
      this.appliedDateTo();

      this.loadAuditLogs();
    });
  }

  ngOnInit(): void {
    const queueId = this.route.snapshot.queryParamMap.get('orderQueueId');
    if (queueId) {
      this.orderQueueId.set(queueId);
       this.dateFromValue.set('');
        this.dateToValue.set('');
         this.appliedDateFrom.set('');
        this.appliedDateTo.set('');
      this.applyFilters();
    }
  }

  loadAuditLogs(): void {
    const params: any = {
      searchText: this.appliedSearchText() ?? undefined,
      correlationId: this.appliedCorrelationId() ?? undefined,
      apiEndpoint: this.appliedApiEndpoint() ?? undefined,
      orderQueueId: this.appliedOrderQueueId() ?? undefined,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };
    const httpStatus = this.appliedHttpStatus().value;
    if (httpStatus !== null && httpStatus !== undefined) params.httpStatusCode = httpStatus;
    const isSuccess = this.appliedSuccess().value;
    if (isSuccess !== null && isSuccess !== undefined) params.isSuccess = isSuccess;

    this.loading.set(true);
    this.auditLogService.getOrdersSendApiAuditLogs(params).subscribe({
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
        this.showError('Failed to load API audit logs');
        this.logs.set([]);
      },
    });
  }

  applyFilters() {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    this.appliedSearchText.set(this.searchText().trim());
    this.appliedCorrelationId.set(this.correlationId().trim());
    this.appliedApiEndpoint.set(this.apiEndpoint().trim());
    this.appliedOrderQueueId.set(this.orderQueueId().trim());
    this.appliedHttpStatus.set(this.selectedHttpStatus());
    this.appliedSuccess.set(this.selectedSuccess());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters() {
    this.searchText.set('');
    this.correlationId.set('');
    this.apiEndpoint.set('');
    this.orderQueueId.set('');
    this.selectedHttpStatus.set(this.httpStatusOptions()[0]);
    this.selectedSuccess.set(this.successOptions()[0]);
    this.dateFromValue.set('');
    this.dateToValue.set('');
    this.applyFilters();
  }

  onPageChange(event: any) {
    const page = Math.floor(event.first / event.rows) + 1;
    this.pageNumber.set(page);
    this.firstRow.set(event.first);
    this.pageSize.set(event.rows);
    this.loadAuditLogs();
  }

  onSort(event: any) {
    this.sortField.set(event.field ?? 'createdAtUtc');
    this.sortOrder.set(event.order);
    this.pageNumber.set(1);
    this.firstRow.set(0);
    this.loadAuditLogs();
  }

  getHttpStatusSeverity(statusCode: number): 'success' | 'info' | 'warn' | 'danger' {
    if (statusCode >= 200 && statusCode < 300) return 'success';
    if (statusCode >= 300 && statusCode < 400) return 'info';
    if (statusCode >= 400 && statusCode < 500) return 'warn';
    return 'danger';
  }

  viewRequestResponse(logId: string): void {
    this.selectedLogId.set(logId);
    this.displayDialog.set(true);
    this.dialogLoading.set(true);
    this.requestJson.set('');
    this.responseJson.set('');

    this.auditLogService.getOrdersSendApiRequestResponse(logId).subscribe({
      next: (result) => {
        this.dialogLoading.set(false);
        if (result) {
          this.requestJson.set(this.formatJson(result.requestJson));
          this.responseJson.set(this.formatJson(result.responseJson));
        } else {
          this.displayDialog.set(false);
          this.showError('Failed to load request/response data', ['No data available']);
        }
      },
      error: (error) => {
        this.dialogLoading.set(false);
        this.displayDialog.set(false);
        this.showError('Failed to load request/response data', [error.message ?? 'Unknown error']);
      },
    });
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
    this.selectedLogId.set('');
    this.requestJson.set('');
    this.responseJson.set('');
  }

  compareOptions(opt1: any, opt2: any): boolean {
    return opt1?.value === opt2?.value;
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
