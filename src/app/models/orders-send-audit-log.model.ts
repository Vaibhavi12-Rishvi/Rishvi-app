// Orders Send Audit Log Model

import { AuditLevel, OrderSendAction } from './audit-log.model';

export interface OrdersSendAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  message: string;
  installationId: number;
  createdAtUtc: string;
}

export interface OrdersSendAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: OrdersSendAuditLog[];
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

export interface OrdersSendAuditLogQueryParams {
  correlationId?: string;
  level?: AuditLevel;
  action?: OrderSendAction;
  installationId?: number | null;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
