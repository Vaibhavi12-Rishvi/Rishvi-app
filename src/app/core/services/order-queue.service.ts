import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { OrderQueueQueryParams, OrderQueueResponse } from "../../models/order-queue.model";
import { OrderDetailsResponse } from "../../models/order-details.model";

@Injectable({
  providedIn: "root",
})
export class OrderQueueService {
  private readonly http = inject(HttpClient);

  getOrderQueue(params?: OrderQueueQueryParams): Observable<OrderQueueResponse> {
    const httpParams = this.buildHttpParams(params);
    const url = `${environment.apiUrl}/api/orders/queue`;
    return this.http.get<OrderQueueResponse>(url, { params: httpParams }).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: "Failed to fetch order queue",
          value: {
            data: [],
            totalCount: 0,
            pageNumber: 1,
            pageSize: params?.pageSize ?? 100,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false,
          },
          error: {
            code: error?.error?.code ?? "Unknown",
            description: error?.message ?? "Unknown error",
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }

  private buildHttpParams(params?: OrderQueueQueryParams): HttpParams {
    let httpParams = new HttpParams();
    if (!params) return httpParams;

    const paramConfig: Array<{
      key: string;
      value: any;
      condition: (val: any) => boolean;
      transform?: (val: any) => string;
    }> = [
      { key: "SearchText", value: params.searchText, condition: (val) => !!val },
      { key: "orderName", value: params.orderName, condition: (val) => val !== undefined },
      {
        key: "LinnworksNumOrderId",
        value: params.linnworksNumOrderId,
        condition: (val) => val !== undefined,
        transform: (val) => val.toString(),
      },
      { key: "StreamOrderId", value: params.streamOrderId, condition: (val) => !!val },
      {
        key: "SyncStatus",
        value: params.syncStatus,
        condition: (val) => val !== undefined && val !== null,
        transform: (val) => val.toString(),
      },
      {
        key: "InstallationId",
        value: params.installationId,
        condition: (val) => val !== undefined && val !== null,
        transform: (val) => val.toString(),
      },
      { key: "DateFrom", value: params.dateFrom, condition: (val) => !!val },
      { key: "DateTo", value: params.dateTo, condition: (val) => !!val },
      {
        key: "PageNumber",
        value: params.pageNumber,
        condition: (val) => val !== undefined,
        transform: (val) => val.toString(),
      },
      {
        key: "PageSize",
        value: params.pageSize,
        condition: (val) => val !== undefined,
        transform: (val) => val.toString(),
      },
      { key: "SortBy", value: params.sortBy, condition: (val) => !!val },
      {
        key: "SortDescending",
        value: params.sortDescending,
        condition: (val) => val !== undefined,
        transform: (val) => val.toString(),
      },
    ];

    paramConfig.forEach((config) => {
      if (config.condition(config.value)) {
        const paramValue = config.transform ? config.transform(config.value) : config.value;
        httpParams = httpParams.set(config.key, paramValue);
      }
    });

    return httpParams;
  }

  getOrderById(shopifyOrderId: string): Observable<OrderDetailsResponse> {
    const encodedOrderId = encodeURIComponent(shopifyOrderId);
    const url = `${environment.apiUrl}/api/orders/${encodedOrderId}`;
    return this.http.get<OrderDetailsResponse>(url).pipe(
      catchError((error) => {
        return of({
          isSuccess: false,
          message: "Failed to fetch order details",
          value: null,
          error: {
            code: error?.error?.code ?? "Unknown",
            description: error?.message ?? "Unknown error",
            errorType: 0,
            validationErrors: [],
          },
        });
      }),
    );
  }
}
