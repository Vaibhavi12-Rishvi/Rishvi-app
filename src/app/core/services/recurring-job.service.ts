import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RecurringJobResponse } from '../../models/recurring-job.model';
import { ApiResult } from '../../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class RecurringJobService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.schedulerUrl}/api/jobs/recurring`;
  private readonly triggerUrl = `${environment.schedulerUrl}/api/jobs/recurring/trigger`;
  private readonly stopUrl = `${environment.schedulerUrl}/api/jobs/recurring/stop`;
  private readonly scheduleIdentifiersUrl = `${environment.schedulerUrl}/api/jobs/master-data-sync/identifiers/schedule`;
  private readonly schedulePostalServicesUrl = `${environment.schedulerUrl}/api/jobs/master-data-sync/postal-services/schedule`;
  private readonly scheduleWebhookProcessingUrl = `${environment.schedulerUrl}/api/jobs/webhook-processing/schedule`;
  private readonly scheduleOrderOrchestratorUrl = `${environment.schedulerUrl}/api/jobs/orders-sync/orchestrator/schedule`;

  getRecurringJobs(): Observable<RecurringJobResponse> {
    return this.http.get<RecurringJobResponse>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching recurring jobs:', error);
        return of({
          isSuccess: false,
          message: 'Network error',
          value: null,
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  triggerJob(jobId: string): Observable<ApiResult<null>> {
    const body = { jobId };

    return this.http.post<ApiResult<null>>(this.triggerUrl, body).pipe(
      catchError((error) => {
        console.error('Error triggering job:', error);
        return of({
          isSuccess: false,
          message: 'Network error',
          value: null,
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  stopJob(jobId: string): Observable<ApiResult<null>> {
    const body = { jobId };

    return this.http.post<ApiResult<null>>(this.stopUrl, body).pipe(
      catchError((error) => {
        console.error('Error stopping job:', error);
        return of({
          isSuccess: false,
          message: 'Network error',
          value: null,
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  scheduleIdentifiersSync(): Observable<ApiResult<null>> {
    return this.http.post<ApiResult<null>>(this.scheduleIdentifiersUrl, null).pipe(
      catchError((error) => {
        console.error('Error scheduling identifiers sync:', error);
        return of({
          isSuccess: false,
          message: 'Network error',
          value: null,
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  schedulePostalServicesSync(): Observable<ApiResult<null>> {
    return this.http.post<ApiResult<null>>(this.schedulePostalServicesUrl, null).pipe(
      catchError((error) => {
        console.error('Error scheduling postal services sync:', error);
        return of({
          isSuccess: false,
          message: 'Network error',
          value: null,
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  scheduleWebhookProcessing(): Observable<ApiResult<null>> {
    return this.http.post<ApiResult<null>>(this.scheduleWebhookProcessingUrl, null).pipe(
      catchError((error) => {
        console.error('Error scheduling webhook processing:', error);
        return of({
          isSuccess: false,
          message: 'Network error',
          value: null,
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  scheduleOrderOrchestrator(): Observable<ApiResult<null>> {
    return this.http.post<ApiResult<null>>(this.scheduleOrderOrchestratorUrl, null).pipe(
      catchError((error) => {
        console.error('Error scheduling order orchestrator:', error);
        return of({
          isSuccess: false,
          message: 'Network error',
          value: null,
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }
}
