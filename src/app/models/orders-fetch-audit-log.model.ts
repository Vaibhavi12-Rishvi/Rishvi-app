// Orders Fetch Audit Log Model

import { AuditLevel, OrderFetchAction } from './audit-log.model';

export interface OrdersFetchAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  message: string;
  ordersProcessed: number;
  ordersSuccess: number;
  ordersFailed: number;
  durationMs: number;
  installationId: number;
  createdAtUtc: string;
}

export interface OrdersFetchAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: OrdersFetchAuditLog[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  error: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  };
}

export interface OrdersFetchAuditLogQueryParams {
  correlationId?: string;
  level?: AuditLevel;
  action?: OrderFetchAction;
  installationId?: number | null;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
