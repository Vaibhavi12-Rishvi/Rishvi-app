import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { WebhookEventAuditLogQueryParams, WebhookEventAuditLogResponse } from "../../models/webhook-event-audit-log.model";
import { ErrorType } from "../../models/api.model";

@Injectable({
  providedIn: "root",
})
export class WebhookEventAuditLogService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/webhooks/audit-logs/events`;

  /**
   * Get paginated and filtered webhook event audit logs
   */
  getWebhookEventAuditLogs(params?: WebhookEventAuditLogQueryParams): Observable<WebhookEventAuditLogResponse> {
    const httpParams = this.buildHttpParams(params);

    return this.http.get<WebhookEventAuditLogResponse>(this.apiUrl, { params: httpParams }).pipe(
      catchError((error) => {
        console.error("Error fetching webhook event audit logs:", error);
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
   * Build HTTP parameters from query params using configuration array approach
   * This reduces cognitive complexity by eliminating nested if statements
   */
  private buildHttpParams(params?: WebhookEventAuditLogQueryParams): HttpParams {
    let httpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    // Configuration array: [paramKey, apiKey, shouldConvertToString]
    const paramConfig: Array<[keyof WebhookEventAuditLogQueryParams, string, boolean]> = [
      ["correlationId", "CorrelationId", false],
      ["level", "Level", true],
      ["action", "Action", true],
      ["eventCode", "EventCode", false],
      ["identifier", "Identifier", false],
      ["integrationId", "IntegrationId", true],
      ["webhookEventId", "WebhookEventId", true],
      ["dateFrom", "DateFrom", false],
      ["dateTo", "DateTo", false],
      ["searchText", "SearchText", false],
      ["pageNumber", "PageNumber", true],
      ["pageSize", "PageSize", true],
      ["sortBy", "SortBy", false],
      ["sortDescending", "SortDescending", true],
    ];

    for (const [paramKey, apiKey, convertToString] of paramConfig) {
      const value = params[paramKey];

      if (value !== undefined && value !== null && value !== "") {
        const stringValue = convertToString ? value.toString() : String(value);
        httpParams = httpParams.set(apiKey, stringValue);
      }
    }

    return httpParams;
  }
}
