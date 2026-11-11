import { Component, inject, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { RecurringJob } from '../../../models/recurring-job.model';
import { RecurringJobService } from '../../../core/services/recurring-job.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-hangfire',
  standalone: true,
  imports: [DatePipe, TableModule, ButtonModule, TagModule, ToastModule, DialogModule, TooltipModule],
  providers: [MessageService],
  templateUrl: './hangfire.component.html',
  styleUrl: './hangfire.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HangfireComponent {
  private readonly recurringJobService = inject(RecurringJobService);
  private readonly messageService = inject(MessageService);
  authService = inject(AuthService);
  triggeringJobId = signal<string | null>(null);
  jobs = signal<RecurringJob[]>([]);
  loading = signal<boolean>(false);
  stoppingJobId = signal<string | null>(null);
  schedulingJob = signal<boolean>(false);

  // Confirmation dialog state
  displayConfirmDialog = signal(false);
  confirmDialogTitle = signal<string>('');
  confirmDialogMessage = signal<string>('');
  pendingJobId = signal<string | null>(null);
  pendingScheduleAction: (() => void) | null = null;
  pendingStopJobId: string | null = null;
  constructor() {
    effect(() => {
      this.loadJobs();
    });
  }

  loadJobs(): void {
    this.loading.set(true);

    this.recurringJobService.getRecurringJobs().subscribe({
      next: (result) => {
        this.loading.set(false);

        if (result.isSuccess && result.value) {
          this.jobs.set(result.value);
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
          this.jobs.set([]);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.jobs.set([]);
        this.showError('Failed to load recurring jobs', [error.message]);
      },
    });
  }

  getStateSeverity(state: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (state) {
      case 'Succeeded':
        return 'success';
      case 'Processing':
        return 'info';
      case 'Enqueued':
        return 'info';
      case 'Failed':
        return 'danger';
      case 'Scheduled':
        return 'warn';
      default:
        return 'secondary';
    }
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
  confirmTriggerJob(jobId: string): void {
    console.log('Confirming trigger for job:', jobId);
    this.confirmDialogTitle.set('Trigger Job');
    this.confirmDialogMessage.set(`Are you sure you want to manually trigger the job '${jobId}'?`);
    this.pendingJobId.set(jobId);
    this.pendingScheduleAction = null;
    this.pendingStopJobId = null;
    this.displayConfirmDialog.set(true);
  }

  confirmStopJob(jobId: string): void {
    this.confirmDialogTitle.set('Stop Job');
    this.confirmDialogMessage.set(`Are you sure you want to stop the job '${jobId}'?`);
    this.pendingJobId.set(null);
    this.pendingScheduleAction = null;
    this.pendingStopJobId = jobId;
    this.displayConfirmDialog.set(true);
  }
  stopJob(jobId: string): void {
    this.stoppingJobId.set(jobId);
    this.displayConfirmDialog.set(false);

    this.recurringJobService.stopJob(jobId).subscribe({
      next: (result) => {
        this.stoppingJobId.set(null);

        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Job '${jobId}' stopped successfully`,
            life: 3000,
          });
          this.loadJobs();
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.stoppingJobId.set(null);
        this.showError('Failed to stop job', [error.message]);
      },
    });
  }
  scheduleIdentifiers(): void {
    this.schedulingJob.set(true);
    this.displayConfirmDialog.set(false);

    this.recurringJobService.scheduleIdentifiersSync().subscribe({
      next: (result) => {
        this.schedulingJob.set(false);

        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Identifiers sync job scheduled successfully',
            life: 3000,
          });
          this.loadJobs();
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.schedulingJob.set(false);
        this.showError('Failed to schedule identifiers sync', [error.message]);
      },
    });
  }
  executeTriggerJob(): void {
    const jobId = this.pendingJobId();

    if (jobId) {
      this.triggerPendingJob(jobId);
      return;
    }

    if (this.pendingStopJobId) {
      this.stopJob(this.pendingStopJobId);
      return;
    }

    if (this.pendingScheduleAction) {
      this.pendingScheduleAction();
    }
  }

  private triggerPendingJob(jobId: string): void {
    this.triggeringJobId.set(jobId);
    this.displayConfirmDialog.set(false);

    this.recurringJobService.triggerJob(jobId).subscribe({
      next: (result) => {
        this.triggeringJobId.set(null);

        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Job '${jobId}' triggered successfully`,
            life: 3000,
          });
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.triggeringJobId.set(null);
        this.showError('Failed to trigger job', [error.message]);
      },
    });
  }
  schedulePostalServices(): void {
    this.schedulingJob.set(true);
    this.displayConfirmDialog.set(false);

    this.recurringJobService.schedulePostalServicesSync().subscribe({
      next: (result) => {
        this.schedulingJob.set(false);

        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Postal services sync job scheduled successfully',
            life: 3000,
          });
          this.loadJobs();
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.schedulingJob.set(false);
        this.showError('Failed to schedule postal services sync', [error.message]);
      },
    });
  }

  scheduleWebhookProcessing(): void {
    this.schedulingJob.set(true);
    this.displayConfirmDialog.set(false);

    this.recurringJobService.scheduleWebhookProcessing().subscribe({
      next: (result) => {
        this.schedulingJob.set(false);

        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Webhook processing job scheduled successfully',
            life: 3000,
          });
          this.loadJobs();
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.schedulingJob.set(false);
        this.showError('Failed to schedule webhook processing', [error.message]);
      },
    });
  }

  scheduleOrderOrchestrator(): void {
    this.schedulingJob.set(true);
    this.displayConfirmDialog.set(false);

    this.recurringJobService.scheduleOrderOrchestrator().subscribe({
      next: (result) => {
        this.schedulingJob.set(false);

        if (result.isSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Order orchestrator job scheduled successfully',
            life: 3000,
          });
          this.loadJobs();
        } else if (result.error) {
          this.showError(result.error.description, result.error.validationErrors);
        }
      },
      error: (error) => {
        this.schedulingJob.set(false);
        this.showError('Failed to schedule order orchestrator', [error.message]);
      },
    });
  }

  cancelTriggerJob(): void {
    this.displayConfirmDialog.set(false);
    this.pendingJobId.set(null);
    this.pendingScheduleAction = null;
    this.pendingStopJobId = null;
  }
  confirmScheduleIdentifiers(): void {
    this.confirmDialogTitle.set('Schedule Identifiers Sync');
    this.confirmDialogMessage.set('Are you sure you want to schedule the identifiers sync job?');
    this.pendingJobId.set(null);
    this.pendingScheduleAction = () => this.scheduleIdentifiers();
    this.pendingStopJobId = null;
    this.displayConfirmDialog.set(true);
  }

  confirmSchedulePostalServices(): void {
    this.confirmDialogTitle.set('Schedule Postal Services Sync');
    this.confirmDialogMessage.set('Are you sure you want to schedule the postal services sync job?');
    this.pendingJobId.set(null);
    this.pendingScheduleAction = () => this.schedulePostalServices();
    this.pendingStopJobId = null;
    this.displayConfirmDialog.set(true);
  }

  confirmScheduleWebhookProcessing(): void {
    this.confirmDialogTitle.set('Schedule Webhook Processing');
    this.confirmDialogMessage.set('Are you sure you want to schedule the webhook processing job?');
    this.pendingJobId.set(null);
    this.pendingScheduleAction = () => this.scheduleWebhookProcessing();
    this.pendingStopJobId = null;
    this.displayConfirmDialog.set(true);
  }

  confirmScheduleOrderOrchestrator(): void {
    this.confirmDialogTitle.set('Schedule Order Orchestrator');
    this.confirmDialogMessage.set('Are you sure you want to schedule the order orchestrator job?');
    this.pendingJobId.set(null);
    this.pendingScheduleAction = () => this.scheduleOrderOrchestrator();
    this.pendingStopJobId = null;
    this.displayConfirmDialog.set(true);
  }
}
