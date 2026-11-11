import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  WebhookSubscriptionQueryParams,
  WebhookSubscriptionResponse
} from '../../models/webhook-subscription.model';
import { ApiResult, ErrorType } from '../../models/api.model';

type HttpParamValue = string | number | boolean | Date | undefined | null;

@Injectable({
  providedIn: 'root'
})
export class WebhookSubscriptionService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/webhooks/subscriptions`;

  /**
   * Get paginated and filtered webhook subscriptions
   */
  getWebhookSubscriptions(params?: WebhookSubscriptionQueryParams): Observable<WebhookSubscriptionResponse> {
    const httpParams = this.buildHttpParams(params);

    return this.http.get<WebhookSubscriptionResponse>(this.apiUrl, { params: httpParams }).pipe(
      catchError(error => {
        console.error('Error fetching webhook subscriptions:', error);

        return of({
          isSuccess: false,
          message: 'Network error',
          value: {
            data: [],
            totalCount: 0,
            pageNumber: 1,
            pageSize: 100,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false
          },
          error: {
            code: 'NETWORK_ERROR',
            description: 'Failed to connect to server',
            errorType: ErrorType.Failure,
            validationErrors: []
          }
        });
      })
    );
  }

  /**
   * Build HTTP parameters from query params.
   */
  private buildHttpParams(params?: WebhookSubscriptionQueryParams): HttpParams {
    let httpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    const paramConfig: Array<[string, HttpParamValue]> = [
      ['SearchText', params.searchText],
      ['InstallationId', params.installationId],
      ['IntegrationId', params.integrationId],
      ['IsActive', params.isActive],
      ['EventName', params.eventName],
      ['Identifier', params.identifier],
      ['DateFrom', params.dateFrom],
      ['DateTo', params.dateTo],
      ['PageNumber', params.pageNumber],
      ['PageSize', params.pageSize],
      ['SortBy', params.sortBy],
      ['SortDescending', params.sortDescending]
    ];

    for (const [key, value] of paramConfig) {
      if (value === undefined || value === null || value === '') {
        continue;
      }

      const paramValue = value instanceof Date ? value.toISOString() : value;

      httpParams = httpParams.set(key, paramValue);
    }

    return httpParams;
  }

  /**
   * Subscribe to all webhooks for an installation
   */
  subscribeToAllWebhooks(email: string): Observable<ApiResult<null>> {
    const url = `${environment.apiUrl}/api/webhooks/subscribe/installations/${email}/events/all`;

    return this.http.post<ApiResult<null>>(url, null);
  }

  /**
   * Unsubscribe from all webhooks for an installation
   */
  unsubscribeFromAllWebhooks(email: string): Observable<ApiResult<null>> {
    const url = `${environment.apiUrl}/api/webhooks/unsubscribe/installations/${email}/events/all`;

    return this.http.post<ApiResult<null>>(url, null);
  }
}