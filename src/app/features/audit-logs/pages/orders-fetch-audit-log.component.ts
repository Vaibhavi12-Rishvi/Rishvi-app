import { Component, inject, signal, effect, ChangeDetectionStrategy, OnInit } from '@angular/core';
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
import { AuditLogService } from '../../../core/services/audit-log.service';
import { AuditLogHelperService } from '../../../core/services/audit-log-helper.service';
import { AuditLevel, OrderFetchAction } from '../../../models/audit-log.model';
import { OrdersFetchAuditLog } from '../../../models/orders-fetch-audit-log.model';
import { IntegrationService } from '../../../core/services/integration.service';
import { AuditLogFilterBarComponent } from '../../../shared/components/audit-log-filter-bar/audit-log-filter-bar.component';

@Component({
  selector: 'app-orders-fetch-audit-log',
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
  templateUrl: './orders-fetch-audit-log.component.html',
  styleUrl: './orders-fetch-audit-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersFetchAuditLogComponent implements OnInit {
  private readonly auditLogService = inject(AuditLogService);
  private readonly integrationService = inject(IntegrationService);
  private readonly messageService = inject(MessageService);
  auditHelper = inject(AuditLogHelperService);
  private readonly DEFAULT_PAGE_SIZE = 50;

  levelOptions = [
    { label: 'All', value: null },
    { label: 'Info', value: AuditLevel.Info },
    { label: 'Success', value: AuditLevel.Success },
    { label: 'Warning', value: AuditLevel.Warning },
    { label: 'Error', value: AuditLevel.Error },
  ];

  actionOptions = [
    { label: 'All', value: null },
    { label: 'Fetch All Orders Started', value: OrderFetchAction.FetchAllOrdersStarted },
    { label: 'Fetch New Orders Started', value: OrderFetchAction.FetchNewOrdersStarted },
    { label: 'Fetch New Orders Completed', value: OrderFetchAction.FetchNewOrdersCompleted },
    { label: 'Fetch Failed Orders Started', value: OrderFetchAction.FetchFailedOrdersStarted },
    { label: 'Fetch Failed Orders Completed', value: OrderFetchAction.FetchFailedOrdersCompleted },
    { label: 'Fetch All Orders Completed', value: OrderFetchAction.FetchAllOrdersCompleted },
    { label: 'Fetching Order Details', value: OrderFetchAction.FetchingOrderDetails },
    { label: 'Processing Order Data', value: OrderFetchAction.ProcessingOrderData },
    { label: 'Saving Order To Database', value: OrderFetchAction.SavingOrderToDatabase },
  ];

  installationOptions = signal<{ label: string; value: number | null }[]>([{ label: 'All', value: null }]);

  searchText = signal('');
  correlationId = signal('');
  selectedLevel = signal(this.levelOptions[0]);
  selectedAction = signal(this.actionOptions[0]);
  selectedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());

  private readonly appliedSearchText = signal('');
  private readonly appliedCorrelationId = signal('');
  private readonly appliedLevel = signal<{ label: string; value: AuditLevel | null }>(this.levelOptions[0]);
  private readonly appliedAction = signal<{ label: string; value: OrderFetchAction | null }>(this.actionOptions[0]);
  private readonly appliedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  logs = signal<OrdersFetchAuditLog[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  sortField = signal<string>('timestampUtc');
  sortOrder = signal<number>(-1);

  constructor() {
    effect(() => {
      this.appliedSearchText();
      this.appliedCorrelationId();
      this.appliedLevel();
      this.appliedAction();
      this.appliedInstallation();
      this.appliedDateFrom();
      this.appliedDateTo();

      this.loadAuditLogs();
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

  loadAuditLogs(): void {
    const params: any = {
      searchText: this.appliedSearchText() ?? undefined,
      correlationId: this.appliedCorrelationId() ?? undefined,
      dateFrom: this.appliedDateFrom() ? new Date(this.appliedDateFrom()).toISOString() : undefined,
      dateTo: this.appliedDateTo() ? new Date(this.appliedDateTo()).toISOString() : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };
    const level = this.appliedLevel().value;
    if (level !== null && level !== undefined) params.level = level;
    const action = this.appliedAction().value;
    if (action !== null && action !== undefined) params.action = action;
    const installationId = this.appliedInstallation().value;
    if (installationId !== null && installationId !== undefined) params.installationId = installationId;

    this.loading.set(true);
    this.auditLogService.getOrdersFetchAuditLogs(params).subscribe({
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
    this.appliedInstallation.set(this.selectedInstallation());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters() {
    this.searchText.set('');
    this.correlationId.set('');
    this.selectedLevel.set(this.levelOptions[0]);
    this.selectedAction.set(this.actionOptions[0]);
    this.selectedInstallation.set({ label: 'All', value: null });
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
    this.sortField.set(event.field ?? 'timestampUtc');
    this.sortOrder.set(event.order);
    this.pageNumber.set(1);
    this.firstRow.set(0);
    this.loadAuditLogs();
  }

  compareOptions(opt1: any, opt2: any): boolean {
    return opt1?.value === opt2?.value;
  }

  getLevelLabel(level: string): string {
    const numericLevel = Number(level);
    if (!Number.isNaN(numericLevel)) {
      switch (numericLevel) {
        case AuditLevel.Info:
          return 'Info';
        case AuditLevel.Success:
          return 'Success';
        case AuditLevel.Warning:
          return 'Warning';
        case AuditLevel.Error:
          return 'Error';
        default:
          return level;
      }
    }

    return level;
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
