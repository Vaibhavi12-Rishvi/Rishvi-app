import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { InstallationAuditLogResponse, InstallationAuditLogQueryParams } from '../../models/installation-audit-log.model';
import { IntegrationAuditLogResponse, IntegrationAuditLogQueryParams } from '../../models/integration-audit-log.model';
import { MasterDataSyncAuditLogResponse, MasterDataSyncAuditLogQueryParams } from '../../models/master-data-sync-audit-log.model';
import { OrdersFetchAuditLogResponse, OrdersFetchAuditLogQueryParams } from '../../models/orders-fetch-audit-log.model';
import { OrdersSendAuditLogResponse, OrdersSendAuditLogQueryParams } from '../../models/orders-send-audit-log.model';
import { OrdersSendApiAuditLogResponse, OrdersSendApiAuditLogQueryParams } from '../../models/orders-send-api-audit-log.model';
import { EmailAuditLogQueryParams, EmailAuditLogResponse } from '../../models/email-audit-log.model';
import { LabelAuditLogQueryParams, LabelAuditLogResponse } from '../../models/label-audit-log.model';
import { UserAuditLogQueryParams, UserAuditLogResponse } from '../../models/user-audit-log.model';

type QueryParamValue = string | number | boolean | null | undefined;
type QueryParamMode = 'present' | 'defined';
type QueryParamSpec<T> = readonly [keyof T, string, QueryParamMode];

@Injectable({
  providedIn: 'root',
})
export class AuditLogService {
  private readonly http = inject(HttpClient);

  getInstallationAuditLogs(params?: InstallationAuditLogQueryParams): Observable<InstallationAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'present'],
      ['action', 'Action', 'present'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['searchText', 'SearchText', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/installations/audit-logs`;
    return this.http.get<InstallationAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  getIntegrationAuditLogs(params?: IntegrationAuditLogQueryParams): Observable<IntegrationAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'defined'],
      ['action', 'Action', 'defined'],
      ['installationId', 'InstallationId', 'defined'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['searchText', 'SearchText', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/integrations/audit-logs`;
    return this.http.get<IntegrationAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch integration audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  getMasterDataSyncAuditLogs(params?: MasterDataSyncAuditLogQueryParams): Observable<MasterDataSyncAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'defined'],
      ['action', 'Action', 'defined'],
      ['installationId', 'InstallationId', 'defined'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['searchText', 'SearchText', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/master-data-sync/audit-logs`;
    return this.http.get<MasterDataSyncAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch master data sync audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  getOrdersFetchAuditLogs(params?: OrdersFetchAuditLogQueryParams): Observable<OrdersFetchAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'defined'],
      ['action', 'Action', 'defined'],
      ['installationId', 'InstallationId', 'defined'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['searchText', 'SearchText', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/orders-sync/audit-logs/fetch`;
    return this.http.get<OrdersFetchAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch orders fetch audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  getOrdersSendAuditLogs(params?: OrdersSendAuditLogQueryParams): Observable<OrdersSendAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'defined'],
      ['action', 'Action', 'defined'],
      ['installationId', 'InstallationId', 'defined'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['searchText', 'SearchText', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/orders-sync/audit-logs/send`;
    return this.http.get<OrdersSendAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch orders send audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  getOrdersSendApiAuditLogs(params?: OrdersSendApiAuditLogQueryParams): Observable<OrdersSendApiAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['correlationId', 'CorrelationId', 'present'],
      ['apiEndpoint', 'ApiEndpoint', 'present'],
      ['httpStatusCode', 'HttpStatusCode', 'defined'],
      ['isSuccess', 'IsSuccess', 'defined'],
      ['orderQueueId', 'OrderQueueId', 'present'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['searchText', 'SearchText', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/orders-sync/audit-logs/api`;
    return this.http.get<OrdersSendApiAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch orders send API audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  getOrdersSendApiRequestResponse(id: string): Observable<{ id: string; requestJson: string; responseJson: string } | null> {
    const url = `${environment.apiUrl}/api/orders-sync/audit-logs/api/${id}/req-res-json`;
    return this.http
      .get<{ isSuccess: boolean; message: string; value: { id: string; requestJson: string; responseJson: string }; error: any }>(url)
      .pipe(
        map((response) => (response.isSuccess && response.value ? response.value : null)),
        catchError((error) => {
          console.error('Error fetching request/response JSON:', error);
          return of(null);
        }),
      );
  }
  getEmailAuditLogs(params?: EmailAuditLogQueryParams): Observable<EmailAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['recipientEmail', 'RecipientEmail', 'present'],
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'defined'],
      ['action', 'Action', 'defined'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['isSuccess', 'IsSuccess', 'defined'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/email/audit-logs`;
    return this.http.get<EmailAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch email audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }
  getLabelAuditLogs(params?: LabelAuditLogQueryParams): Observable<LabelAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'defined'],
      ['action', 'Action', 'defined'],
      ['installationId', 'InstallationId', 'defined'],
      ['orderId', 'OrderId', 'defined'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/labels/audit-logs`;
    return this.http.get<LabelAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch label audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }
  getUserAuditLogs(params?: UserAuditLogQueryParams): Observable<UserAuditLogResponse> {
    const httpParams = this.buildHttpParams(params, [
      ['email', 'Email', 'present'],
      ['correlationId', 'CorrelationId', 'present'],
      ['level', 'Level', 'defined'],
      ['action', 'Action', 'defined'],
      ['dateFrom', 'DateFrom', 'present'],
      ['dateTo', 'DateTo', 'present'],
      ['searchText', 'SearchText', 'present'],
      ['pageNumber', 'PageNumber', 'defined'],
      ['pageSize', 'PageSize', 'defined'],
      ['sortBy', 'SortBy', 'present'],
      ['sortDescending', 'SortDescending', 'defined'],
    ]);
    const url = `${environment.apiUrl}/api/users/audit-logs`;
    return this.http.get<UserAuditLogResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: 'Failed to fetch user audit logs',
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
            code: error?.error?.code ?? 'Unknown',
            description: error?.message ?? 'Unknown error',
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

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

  private shouldIncludeQueryParam(value: QueryParamValue, mode: QueryParamMode): boolean {
    return mode === 'present' ? Boolean(value) : value !== undefined && value !== null;
  }
}
