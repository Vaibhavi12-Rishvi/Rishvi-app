import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Identifier, IdentifierQueryParams } from '../../models/identifier.model';
import { ApiResult, PaginatedResult } from '../../models/api.model';

type QueryParamValue = string | number | boolean | null | undefined;
type QueryParamMode = 'present' | 'defined';
type QueryParamSpec<T> = readonly [keyof T, string, QueryParamMode];

@Injectable({
  providedIn: 'root'
})
export class IdentifierService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/master-data/identifiers`;

  /**
   * Get paginated identifiers
   */
  getIdentifiers(params?: IdentifierQueryParams): Observable<ApiResult<PaginatedResult<Identifier>>> {
    const httpParams = this.buildHttpParams(params, [
      ["searchText", "SearchText", "present"],
      ["pageNumber", "PageNumber", "defined"],
      ["pageSize", "PageSize", "defined"],
      ["sortBy", "SortBy", "present"],
      ["sortDescending", "SortDescending", "defined"],
    ]);

    return this.http.get<ApiResult<PaginatedResult<Identifier>>>(this.apiUrl, { params: httpParams });
  }

  /**
   * Build HTTP params from query parameters using configuration array approach
   * This reduces cognitive complexity by eliminating nested if statements
   */
  private buildHttpParams<T extends object>(params: T | undefined, specs: QueryParamSpec<T>[]): HttpParams {
    if (!params) {
      return new HttpParams();
    }

    return specs.reduce((httpParams, [sourceKey, targetKey, mode]) => {
      const value = params[sourceKey] as QueryParamValue;

      if (this.shouldIncludeQueryParam(value, mode)) {
        return httpParams.set(targetKey, String(value));
      }

      return httpParams;
    }, new HttpParams());
  }

  /**
   * Determine if a query parameter should be included based on its mode
   * - 'present': Include if truthy (excludes empty strings, 0, false)
   * - 'defined': Include if not undefined/null (includes 0, false, empty strings)
   */
  private shouldIncludeQueryParam(value: QueryParamValue, mode: QueryParamMode): boolean {
    return mode === "present" ? Boolean(value) : value !== undefined && value !== null;
  }
}
