import { Injectable, inject, signal } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { Installation, InstallationQueryParams } from "../../models/installation.model";
import { ApiResult, PaginatedResult, ErrorType } from "../../models/api.model";

@Injectable({
  providedIn: "root",
})
export class InstallationService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/installations`;

  // Signals for state management
  installations = signal<Installation[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  totalCount = signal<number>(0);
  currentPage = signal<number>(1);
  pageSize = signal<number>(10);
  totalPages = signal<number>(0);

  /**
   * Get paginated and filtered installations
   */
  getInstallations(params?: InstallationQueryParams): Observable<ApiResult<PaginatedResult<Installation>>> {
    const httpParams = this.buildHttpParams(params);

    return this.http.get<ApiResult<PaginatedResult<Installation>>>(this.apiUrl, { params: httpParams }).pipe(
      catchError((error) => {
        console.error("Error fetching installations:", error);
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
   * Build HttpParams from InstallationQueryParams
   * Uses a configuration-based approach to reduce cognitive complexity
   */
  private buildHttpParams(params?: InstallationQueryParams): HttpParams {
    if (!params) {
      return new HttpParams();
    }

    // Configuration mapping: [paramKey, httpParamName, shouldConvert]
    const paramConfig: Array<[keyof InstallationQueryParams, string, boolean?]> = [
      ["searchText", "SearchText"],
      ["isActive", "IsActive", true],
      ["dateFrom", "DateFrom"],
      ["dateTo", "DateTo"],
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
    params: InstallationQueryParams,
    config: Array<[keyof InstallationQueryParams, string, boolean?]>,
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

  /**
   * Get all active installations (for dropdowns)
   */
  getActiveInstallations(): Observable<ApiResult<Installation[]>> {
    const url = `${this.apiUrl}/active`;
    return this.http.get<ApiResult<Installation[]>>(url).pipe(
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
}
