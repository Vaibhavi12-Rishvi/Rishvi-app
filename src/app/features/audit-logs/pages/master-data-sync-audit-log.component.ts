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
import { MasterDataSyncAuditLog } from '../../../models/master-data-sync-audit-log.model';
import { AuditLevel, MasterDataSyncAction } from '../../../models/audit-log.model';
import { IntegrationService } from '../../../core/services/integration.service';

@Component({
  selector: 'app-master-data-sync-audit-log',
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
  ],
  providers: [MessageService],
  templateUrl: './master-data-sync-audit-log.component.html',
  styleUrl: './master-data-sync-audit-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterDataSyncAuditLogComponent implements OnInit {
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
    { label: 'SyncIdentifiersRequested', value: MasterDataSyncAction.SyncIdentifiersRequested },
    { label: 'SyncIdentifiersCompleted', value: MasterDataSyncAction.SyncIdentifiersCompleted },
    { label: 'SyncIdentifiersFailed', value: MasterDataSyncAction.SyncIdentifiersFailed },
    { label: 'SyncPostalServicesRequested', value: MasterDataSyncAction.SyncPostalServicesRequested },
    { label: 'SyncPostalServicesCompleted', value: MasterDataSyncAction.SyncPostalServicesCompleted },
    { label: 'SyncPostalServicesFailed', value: MasterDataSyncAction.SyncPostalServicesFailed },
    { label: 'BatchSyncIdentifiersStarted', value: MasterDataSyncAction.BatchSyncIdentifiersStarted },
    { label: 'BatchSyncIdentifiersCompleted', value: MasterDataSyncAction.BatchSyncIdentifiersCompleted },
    { label: 'BatchSyncPostalServicesStarted', value: MasterDataSyncAction.BatchSyncPostalServicesStarted },
    { label: 'BatchSyncPostalServicesCompleted', value: MasterDataSyncAction.BatchSyncPostalServicesCompleted },
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
  private readonly appliedLevel = signal<{ label: string; value: number | null }>(this.levelOptions[0]);
  private readonly appliedAction = signal<{ label: string; value: number | null }>(this.actionOptions[0]);
  private readonly appliedInstallation = signal<{ label: string; value: number | null }>({ label: 'All', value: null });
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  logs = signal<MasterDataSyncAuditLog[]>([]);
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
    this.auditLogService.getMasterDataSyncAuditLogs(params).subscribe({
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
  }
  onSort(event: any) {
    this.sortField.set(event.field ?? 'timestampUtc');
    this.sortOrder.set(event.order);

    this.pageNumber.set(1);
    this.firstRow.set(0);
  }

  compareOptions = (o1: any, o2: any) => o1?.value === o2?.value;

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
