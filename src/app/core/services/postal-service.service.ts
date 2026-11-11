import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  CreatePostalServicePayload,
  StreamDepotLocation,
  PostalService,
  PostalServiceQueryParams,
} from '../../models/postal-service.model';
import { ApiResult, PaginatedResult } from '../../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class PostalServiceService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/postal-services`;

  /**
   * Get paginated and filtered postal services
   */
  getPostalServices(params?: PostalServiceQueryParams): Observable<ApiResult<PaginatedResult<PostalService>>> {
    let httpParams = new HttpParams();

    if (params) {
      const queryParams: Array<[string, string | number | boolean | null | undefined]> = [
        ['SearchText', params.searchText],
        ['Vendor', params.vendor],
        ['Country', params.country],
        ['IntegrationId', params.integrationId],
        ['OrderType', params.orderType],
        ['LabelType', params.labelType],
        ['IsActive', params.isActive],
        ['PageNumber', params.pageNumber],
        ['PageSize', params.pageSize],
        ['SortBy', params.sortBy],
        ['SortDescending', params.sortDescending],
      ];

      queryParams.forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          httpParams = httpParams.set(key, String(value));
        }
      });
    }

    return this.http.get<ApiResult<PaginatedResult<PostalService>>>(this.apiUrl, { params: httpParams });
  }

  createPostalService(payload: CreatePostalServicePayload): Observable<ApiResult<null>> {
    return this.http.post<ApiResult<null>>(this.apiUrl, payload);
  }

  getPostalServiceById(id: number): Observable<ApiResult<PostalService>> {
    return this.http.get<ApiResult<PostalService>>(`${this.apiUrl}/${id}`);
  }

  updatePostalService(id: number, payload: CreatePostalServicePayload): Observable<ApiResult<null>> {
    return this.http.put<ApiResult<null>>(`${this.apiUrl}/${id}`, payload);
  }

  getStreamDepotLocations(integrationId: number): Observable<ApiResult<StreamDepotLocation[]>> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('integrationId', integrationId.toString());

    return this.http.get<ApiResult<StreamDepotLocation[]>>(`${this.apiUrl}/stream-depot-locations`, {
      params: httpParams,
    });
  }

  deletePostalService(id: number): Observable<ApiResult<null>> {
    return this.http.delete<ApiResult<null>>(`${this.apiUrl}/${id}`);
  }
}
