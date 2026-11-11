import { Injectable, inject, signal } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { environment } from "../../../environments/environment";
import {
  Integration,
  IntegrationQueryParams,
  ActiveIntegration,
  CreateIntegrationPayload,
  UpsertIntegrationPayload,
  IntegrationProfileTypeOption,
} from "../../models/integration.model";
import { ApiResult, PaginatedResult, ErrorType } from "../../models/api.model";
import { ActiveInstallation } from "../../models/installation.model";

type HttpParamValue = string | number | boolean | undefined | null;

@Injectable({
  providedIn: "root",
})
export class IntegrationService {
  private readonly http = inject(HttpClient);
  private readonly integrationsAllApiUrl = `${environment.apiUrl}/api/integrations/all`;
  private readonly integrationsApiUrl = `${environment.apiUrl}/api/integrations`;

  // Signals for state management
  integrations = signal<Integration[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  totalCount = signal<number>(0);
  currentPage = signal<number>(1);
  pageSize = signal<number>(10);
  totalPages = signal<number>(0);

  /**
   * Get paginated and filtered integrations
   */
  getIntegrations(params?: IntegrationQueryParams): Observable<ApiResult<PaginatedResult<Integration>>> {
    const httpParams = this.buildHttpParams(params);

    return this.http.get<ApiResult<PaginatedResult<Integration>>>(this.integrationsAllApiUrl, { params: httpParams }).pipe(
      catchError((error) => {
        console.error("Error fetching integrations:", error);

        return of({
          isSuccess: false,
          message: "Network error",
          value: {
            data: [],
            totalCount: 0,
            pageNumber: 1,
            pageSize: 10,
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
   * Build HTTP parameters from IntegrationQueryParams.
   */
  private buildHttpParams(params?: IntegrationQueryParams): HttpParams {
    let httpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    const paramConfig: Array<[string, HttpParamValue]> = [
      ["SearchText", params.searchText],
      ["InstallationId", params.installationId],
      ["ProfileName", params.profileName],
      ["ConfigStage", params.configStage],
      ["IsActive", params.isActive],
      ["DateFrom", params.dateFrom],
      ["DateTo", params.dateTo],
      ["PageNumber", params.pageNumber],
      ["PageSize", params.pageSize],
      ["SortBy", params.sortBy],
      ["SortDescending", params.sortDescending],
    ];

    for (const [key, value] of paramConfig) {
      if (value === undefined || value === null || value === "") {
        continue;
      }

      httpParams = httpParams.set(key, value);
    }

    return httpParams;
  }

  /**
   * Get active installations for dropdown
   */
  getActiveInstallations(): Observable<ApiResult<ActiveInstallation[]>> {
    const url = `${environment.apiUrl}/api/installations/active`;

    return this.http.get<ApiResult<ActiveInstallation[]>>(url).pipe(
      catchError((error) => {
        console.error("Error fetching active installations:", error);

        return of({
          isSuccess: false,
          message: "Network error",
          value: [],
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
   * Get active integrations for dropdown
   */
  getActiveIntegrations(): Observable<ApiResult<ActiveIntegration[]>> {
    const url = `${environment.apiUrl}/api/integrations/active`;

    return this.http.get<ApiResult<ActiveIntegration[]>>(url).pipe(
      catchError((error) => {
        console.error("Error fetching active integrations:", error);

        return of({
          isSuccess: false,
          message: "Network error",
          value: [],
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
   * Get integration profile types for dropdown
   */
  getIntegrationProfileTypes(): Observable<ApiResult<IntegrationProfileTypeOption[]>> {
    const url = `${this.integrationsApiUrl}/profile-types`;

    return this.http.get<ApiResult<IntegrationProfileTypeOption[]>>(url).pipe(
      catchError((error) => {
        console.error("Error fetching integration profile types:", error);

        return of({
          isSuccess: false,
          message: "Network error",
          value: [],
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
   * Create integration
   */
  createIntegration(payload: CreateIntegrationPayload): Observable<ApiResult<null>> {
    return this.http.post<ApiResult<null>>(this.integrationsApiUrl, payload);
  }

  /**
   * Get integration by id
   */
  getIntegrationById(id: number): Observable<ApiResult<Integration>> {
    return this.http.get<ApiResult<Integration>>(`${this.integrationsApiUrl}/${id}`);
  }

  /**
   * Update integration
   */
  updateIntegration(payload: UpsertIntegrationPayload): Observable<ApiResult<null>> {
    return this.http.put<ApiResult<null>>(this.integrationsApiUrl, payload);
  }

  /**
   * Delete integration by id
   */
  deleteIntegration(id: number): Observable<ApiResult<null>> {
    const params = new HttpParams().set("id", id);

    return this.http.patch<ApiResult<null>>(this.integrationsApiUrl, null, { params });
  }

  /**
   * Get webhooks from Stream API for debugging.
   */
  getStreamWebhooks(integrationId: number): Observable<ApiResult<unknown>> {
    const url = `${this.integrationsApiUrl}/${integrationId}/stream/webhooks`;

    return this.http.get<ApiResult<unknown>>(url);
  }

  /**
   * Get order from Stream API for debugging.
   */
  getStreamOrder(integrationId: number, orderNo: string): Observable<ApiResult<unknown>> {
    const url = `${this.integrationsApiUrl}/${integrationId}/stream/orders/${encodeURIComponent(orderNo)}`;

    return this.http.get<ApiResult<unknown>>(url);
  }
}