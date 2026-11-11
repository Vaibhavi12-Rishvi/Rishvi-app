import { Component, inject, signal, effect, ChangeDetectionStrategy } from '@angular/core';
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
import { AuditLevel, LabelAction } from '../../../models/audit-log.model';
import { LabelAuditLog } from '../../../models/label-audit-log.model';

@Component({
  selector: 'app-label-audit-log',
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
  templateUrl: "./label-audit-log.component.html",
  styleUrl: "./label-audit-log.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelAuditLogComponent {
  private readonly auditLogService = inject(AuditLogService);
  private readonly messageService = inject(MessageService);
  auditHelper = inject(AuditLogHelperService);
  private readonly DEFAULT_PAGE_SIZE = 50;

  levelOptions = [
    { label: "All", value: null },
    { label: "Info", value: AuditLevel.Info },
    { label: "Success", value: AuditLevel.Success },
    { label: "Warning", value: AuditLevel.Warning },
    { label: "Error", value: AuditLevel.Error },
  ];
  actionOptions = [
    { label: "All", value: null },
    { label: "GenerateLabelRequested", value: LabelAction.GenerateLabelRequested },
    { label: "GenerateLabelCompleted", value: LabelAction.GenerateLabelCompleted },
    { label: "GenerateLabelFailed", value: LabelAction.GenerateLabelFailed },
  ];

  correlationId = signal("");
  installationId = signal("");
  orderId = signal("");
  selectedLevel = signal(this.levelOptions[0]);
  selectedAction = signal(this.actionOptions[0]);
  dateFromValue = signal(this.getCurrentMonthStart());
  dateToValue = signal(this.getCurrentMonthEnd());

  private readonly appliedCorrelationId = signal("");
  private readonly appliedInstallationId = signal("");
  private readonly appliedOrderId = signal("");
  private readonly appliedLevel = signal<{ label: string; value: AuditLevel | null }>(this.levelOptions[0]);
  private readonly appliedAction = signal<{ label: string; value: LabelAction | null }>(this.actionOptions[0]);
  private readonly appliedDateFrom = signal(this.getCurrentMonthStart());
  private readonly appliedDateTo = signal(this.getCurrentMonthEnd());

  logs = signal<LabelAuditLog[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  sortField = signal<string>("timestampUtc");
  sortOrder = signal<number>(-1);

  constructor() {
    effect(() => {
      this.appliedCorrelationId();
      this.appliedInstallationId();
      this.appliedOrderId();
      this.appliedLevel();
      this.appliedAction();
      this.appliedDateFrom();
      this.appliedDateTo();

      this.loadAuditLogs();
    });
  }

  loadAuditLogs(): void {
    const params: any = {
      correlationId: this.appliedCorrelationId() ?? undefined,
      dateFrom: this.appliedDateFrom() ? this.getStartOfDayUTC(this.appliedDateFrom()) : undefined,
      dateTo: this.appliedDateTo() ? this.getEndOfDayUTC(this.appliedDateTo()) : undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };
    const level = this.appliedLevel().value;
    if (level !== null && level !== undefined) params.level = level;
    const action = this.appliedAction().value;
    if (action !== null && action !== undefined) params.action = action;

    const installationId = this.appliedInstallationId();
    if (installationId && !Number.isNaN(Number(installationId))) {
      params.installationId = Number(installationId);
    }

    const orderId = this.appliedOrderId();
    if (orderId && !Number.isNaN(Number(orderId))) {
      params.orderId = Number(orderId);
    }

    this.loading.set(true);
    this.auditLogService.getLabelAuditLogs(params).subscribe({
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
        this.showError("Failed to load audit logs");
        this.logs.set([]);
      },
    });
  }

  applyFilters() {
    this.pageNumber.set(1);
    this.firstRow.set(0);

    this.appliedCorrelationId.set(this.correlationId().trim());
    this.appliedInstallationId.set(this.installationId().trim());
    this.appliedOrderId.set(this.orderId().trim());
    this.appliedLevel.set(this.selectedLevel());
    this.appliedAction.set(this.selectedAction());
    this.appliedDateFrom.set(this.dateFromValue());
    this.appliedDateTo.set(this.dateToValue());
  }

  clearFilters() {
    this.correlationId.set("");
    this.installationId.set("");
    this.orderId.set("");
    this.selectedLevel.set(this.levelOptions[0]);
    this.selectedAction.set(this.actionOptions[0]);
    this.dateFromValue.set("");
    this.dateToValue.set("");
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
    this.sortField.set(event.field ?? "timestampUtc");
    this.sortOrder.set(event.order);

    this.pageNumber.set(1);
    this.firstRow.set(0);
    this.loadAuditLogs();
  }
  compareOptions = (o1: any, o2: any) => o1?.value === o2?.value;

  getLabelActionLabel(action: string): string {
    switch (action) {
      case "Requested":
        return "GenerateLabelRequested";
      case "Completed":
        return "GenerateLabelCompleted";
      case "Failed":
        return "GenerateLabelFailed";
      default:
        return action;
    }
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

  private getStartOfDayUTC(dateString: string): string {
    const date = new Date(dateString + "T00:00:00");
    return date.toISOString();
  }

  private getEndOfDayUTC(dateString: string): string {
    const date = new Date(dateString + "T23:59:59.999");
    return date.toISOString();
  }

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: message + (validationErrors?.length ? "\n" + validationErrors.join("\n") : ""),
      life: 5000,
    });
  }
}
