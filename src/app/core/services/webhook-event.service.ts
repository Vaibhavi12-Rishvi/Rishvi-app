import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { WebhookEventQueryParams, WebhookEventResponse } from "../../models/webhook-event.model";
import { ErrorType } from "../../models/api.model";

@Injectable({
  providedIn: "root",
})
export class WebhookEventService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/webhooks/events`;

  /**
   * Get paginated and filtered webhook events
   */
  getWebhookEvents(params?: WebhookEventQueryParams): Observable<WebhookEventResponse> {
    const httpParams = this.buildHttpParams(params);

    return this.http.get<WebhookEventResponse>(this.apiUrl, { params: httpParams }).pipe(
      catchError((error) => {
        console.error("Error fetching webhook events:", error);
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
   * Build HTTP params from query parameters using configuration-driven approach
   */
  private buildHttpParams(params?: WebhookEventQueryParams): HttpParams {
    let httpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    // Parameter mapping configuration
    const paramMappings: Array<{
      key: keyof WebhookEventQueryParams;
      httpKey: string;
      shouldConvert?: boolean;
      customCheck?: (value: any) => boolean;
    }> = [
      { key: "correlationId", httpKey: "CorrelationId" },
      { key: "eventCode", httpKey: "EventCode" },
      { key: "identifier", httpKey: "Identifier" },
      { key: "partyId", httpKey: "PartyId" },
      { key: "status", httpKey: "Status", shouldConvert: true },
      { key: "integrationId", httpKey: "IntegrationId", shouldConvert: true },
      { key: "dateFrom", httpKey: "DateFrom" },
      { key: "dateTo", httpKey: "DateTo" },
      { key: "searchText", httpKey: "SearchText" },
      { key: "hasErrors", httpKey: "HasErrors", shouldConvert: true, customCheck: (value) => value !== undefined && value !== null },
      { key: "pageNumber", httpKey: "PageNumber", shouldConvert: true },
      { key: "pageSize", httpKey: "PageSize", shouldConvert: true },
      { key: "sortBy", httpKey: "SortBy" },
      { key: "sortDescending", httpKey: "SortDescending", shouldConvert: true },
    ];

    // Apply each parameter mapping
    paramMappings.forEach((mapping) => {
      const value = params[mapping.key];

      // Check if value should be included
      let shouldInclude = false;
      if (mapping.customCheck) {
        shouldInclude = mapping.customCheck(value);
      } else if (mapping.shouldConvert) {
        shouldInclude = value !== undefined;
      } else {
        shouldInclude = !!value;
      }

      if (shouldInclude && value !== null && value !== undefined) {
        const paramValue = mapping.shouldConvert ? value.toString() : (value as string);
        httpParams = httpParams.set(mapping.httpKey, paramValue);
      }
    });

    return httpParams;
  }
}
