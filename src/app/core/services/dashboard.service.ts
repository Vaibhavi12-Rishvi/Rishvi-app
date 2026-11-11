import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DashboardStatisticsResponse } from '../../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly http = inject(HttpClient);

  getStatistics(): Observable<DashboardStatisticsResponse> {
    const url = `${environment.apiUrl}/api/dashboard/statistics`;
    return this.http.get<DashboardStatisticsResponse>(url).pipe(
      catchError(error => {
        return of({
          isSuccess: false,
          message: 'Failed to load dashboard statistics',
          value: {
            installations: { total: 0, active: 0, inactive: 0 },
            integrations: { total: 0, active: 0, inactive: 0 },
            orders: {
              total: 0,
              pending: 0,
              completed: 0,
              failed: 0,
              validationFailed: 0,
              readyForRetry: 0,
              sentToStream: 0
            },
            lastUpdatedUtc: new Date().toISOString()
          },
          error: {
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: []
          }
        });
      })
    );
  }
}
