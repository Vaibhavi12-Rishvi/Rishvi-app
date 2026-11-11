import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { environment } from "../../../environments/environment";
import {
  WebhookSubscriptionAuditLogQueryParams,
  WebhookSubscriptionAuditLogResponse,
} from "../../models/webhook-subscription-audit-log.model";
import { ErrorType } from "../../models/api.model";

@Injectable({
  providedIn: "root",
})
export class WebhookSubscriptionAuditLogService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/webhooks/audit-logs/subscriptions`;

  /**
   * Get paginated and filtered webhook subscription audit logs
   */
  getWebhookSubscriptionAuditLogs(params?: WebhookSubscriptionAuditLogQueryParams): Observable<WebhookSubscriptionAuditLogResponse> {
    const httpParams = this.buildHttpParams(params);

    return this.http.get<WebhookSubscriptionAuditLogResponse>(this.apiUrl, { params: httpParams }).pipe(
      catchError((error) => {
        console.error("Error fetching webhook subscription audit logs:", error);
        return of({
          isSuccess: false,
          message: "Network error",
          value: {
            data: [],
            totalCount: 0,
            pageNumber: 1,
            pageSize: 100,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false,
          },
          error: {
            code: "NETWORK_ERROR",
            description: "Failed to connect to server",
            errorType: ErrorType.Failure,
            validationErrors: [],
          },
        });
      }),
    );
  }

  /**
   * Build HttpParams from WebhookSubscriptionAuditLogQueryParams
   * Uses a configuration-based approach to reduce cognitive complexity
   */
  private buildHttpParams(params?: WebhookSubscriptionAuditLogQueryParams): HttpParams {
    if (!params) {
      return new HttpParams();
    }

    // Configuration mapping: [paramKey, httpParamName, shouldConvert]
    const paramConfig: Array<[keyof WebhookSubscriptionAuditLogQueryParams, string, boolean?]> = [
      ["correlationId", "CorrelationId"],
      ["level", "Level", true],
      ["action", "Action", true],
      ["eventName", "EventName"],
      ["identifier", "Identifier"],
      ["dateFrom", "DateFrom"],
      ["dateTo", "DateTo"],
      ["searchText", "SearchText"],
      ["pageNumber", "PageNumber", true],
      ["pageSize", "PageSize", true],
      ["sortBy", "SortBy"],
      ["sortDescending", "SortDescending", true],
    ];

    return this.appendParams(new HttpParams(), params, paramConfig);
  }

  /**
   * Helper method to append parameters based on configuration
   */
  private appendParams(
    httpParams: HttpParams,
    params: WebhookSubscriptionAuditLogQueryParams,
    config: Array<[keyof WebhookSubscriptionAuditLogQueryParams, string, boolean?]>,
  ): HttpParams {
    return config.reduce((acc, [paramKey, httpParamName, shouldConvert]) => {
      const value = params[paramKey];

      if (this.isValidParamValue(value)) {
        return acc.set(httpParamName, String(value));
      }

      return acc;
    }, httpParams);
  }

  /**
   * Check if a parameter value is valid (not null, undefined, or empty string)
   */
  private isValidParamValue(value: unknown): boolean {
    return value !== undefined && value !== null && value !== "";
  }
}
