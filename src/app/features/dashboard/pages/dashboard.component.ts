import { Component, inject, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DashboardService } from '../../../core/services/dashboard.service';
import { DashboardStatistics } from '../../../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, CardModule, ToastModule, ChartModule],
  providers: [MessageService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  private readonly dashboardService = inject(DashboardService);
  private readonly messageService = inject(MessageService);

  loading = signal<boolean>(false);
  ordersChartData = signal<any>(null);
  ordersChartOptions = signal<any>({
    plugins: {
      legend: {
        labels: {
          color: '#9aa4b2'
        }
      }
    }
  });
  stats = signal<DashboardStatistics>({
    installations: { total: 0, active: 0, inactive: 0 },
    integrations: { total: 0, active: 0, inactive: 0 },
    orders: {
      total: 0,
      pending: 0,
      completed: 0,
      failed: 0,
      validationFailed: 0,
      readyForRetry: 0,
      sentToStream: 0,
    },
    lastUpdatedUtc: ''
  });

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.loading.set(true);
    this.dashboardService.getStatistics().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.isSuccess && res.value) {
          this.stats.set(res.value);
          this.buildOrdersChart();
        } else if (res.error) {
          this.showError(res.error.description, res.error.validationErrors);
        }
      },
      error: () => {
        this.loading.set(false);
        this.showError('Failed to load dashboard statistics');
      }
    });
  }

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message + (validationErrors?.length ? '\n' + validationErrors.join('\n') : ''),
      life: 5000
    });
  }

  private buildOrdersChart(): void {
    const orders = this.stats().orders;
    this.ordersChartData.set({
      labels: ['Pending', 'Completed', 'Ready For Retry', 'Failed', 'Validation Failed', 'Sent to Stream'],
      datasets: [
        {
          data: [orders.pending, orders.completed, orders.readyForRetry, orders.failed, orders.validationFailed, orders.sentToStream],
          backgroundColor: [
            'rgba(59, 130, 246, 0.18)',
            'rgba(34, 197, 94, 0.18)',
            'rgba(245, 158, 11, 0.18)',
            'rgba(239, 68, 68, 0.18)',
            'rgba(249, 115, 22, 0.18)',
            'rgba(20, 184, 166, 0.18)'
          ],
          borderColor: [
            'rgba(59, 130, 246, 0.55)',
            'rgba(34, 197, 94, 0.55)',
            'rgba(245, 158, 11, 0.55)',
            'rgba(239, 68, 68, 0.55)',
            'rgba(249, 115, 22, 0.55)',
            'rgba(20, 184, 166, 0.55)'
          ],
          borderWidth: 1
        }
      ]
    });
  }
}
