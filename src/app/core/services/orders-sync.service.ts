import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResult } from '../../models/api.model';

export interface OrdersSyncResponse {
  message: string;
  details?: string;
}

export interface OrderFetchResult {
  installationId: number;
  installationEmail: string;
  totalProcessed: number;
  totalSuccess: number;
  totalFailed: number;
  isFullySuccessful: boolean;
}

// API returns array directly, not wrapped in object
export type OrdersFetchSyncResponse = OrderFetchResult[];

export interface OrderSendResult {
  email: string;
  installationId: number;
  isSuccess: boolean;
  totalOrders: number;
  successfulOrders: number;
  failedOrders: number;
}

// API returns array directly, not wrapped in object
export type OrdersSendSyncResponse = OrderSendResult[];

@Injectable({
  providedIn: 'root',
})
export class OrdersSyncService {
  private readonly http = inject(HttpClient);

  /**
   * Fetch orders for a specific installation
   * Syncs all orders (failed + new) for a specific installation
   */
  fetchOrdersForInstallation(email: string): Observable<ApiResult<OrdersSyncResponse>> {
    const url = `${environment.apiUrl}/api/orders-sync/fetch/installations/${email}/orders/all`;
    return this.http.post<ApiResult<OrdersSyncResponse>>(url, {});
  }

  /**
   * Send orders for a specific installation
   * Sends all ready orders to Stream for a specific installation
   */
  sendOrdersForInstallation(email: string): Observable<ApiResult<OrdersSyncResponse>> {
    const url = `${environment.apiUrl}/api/orders-sync/send/installations/${email}/orders/all`;
    return this.http.post<ApiResult<OrdersSyncResponse>>(url, {});
  }

  /**
   * Fetch orders for all installations
   */
  fetchOrdersForAllInstallations(): Observable<ApiResult<OrdersFetchSyncResponse>> {
    const url = `${environment.apiUrl}/api/orders-sync/fetch/installations/all`;
    return this.http.post<ApiResult<OrdersFetchSyncResponse>>(url, {});
  }

  /**
   * Send orders for all installations
   */
  sendOrdersForAllInstallations(): Observable<ApiResult<OrdersSendSyncResponse>> {
    const url = `${environment.apiUrl}/api/orders-sync/send/installations/all`;
    return this.http.post<ApiResult<OrdersSendSyncResponse>>(url, {});
  }

  /**
   * Fetch and send a specific order for an installation
   * Immediately fetches and sends a specific order by ID
   */
  fetchAndSendOrder(shopDomain: string, numOrderId: string): Observable<ApiResult<OrdersSyncResponse>> {
    const encodedNumOrderId = encodeURIComponent(numOrderId);
    const url = `${environment.apiUrl}/api/orders-sync/fetch-and-send/${shopDomain}/orders/${encodedNumOrderId}`;
    return this.http.post<ApiResult<OrdersSyncResponse>>(url, {});
  }

  /**
   * Delete completed orders from Stream by comma-separated NumOrderIds
   * Only orders with Completed status can be deleted
   */
  deleteOrdersFromStream(shopDomain: string, orderIds: string): Observable<ApiResult<OrdersSyncResponse>> {
    const url = `${environment.apiUrl}/api/orders-sync/delete/installations/${encodeURIComponent(shopDomain)}/orders/${encodeURIComponent(orderIds)}`;
    return this.http.delete<ApiResult<OrdersSyncResponse>>(url);
  }
}
