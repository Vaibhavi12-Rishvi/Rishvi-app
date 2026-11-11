// Orders Send API Audit Log Model

import { HttpStatusCode } from './audit-log.model';

export interface OrdersSendApiAuditLog {
  id: string;
  apiEndpoint: string;
  correlationId: string;
  requestJson: string;
  responseJson: string;
  httpStatusCode: number;
  isSuccess: boolean;
  durationMs: number;
  orderQueueId: string;
  createdAtUtc: string;
}

export interface OrdersSendApiAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: OrdersSendApiAuditLog[];
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

export interface OrdersSendApiAuditLogQueryParams {
  correlationId?: string;
  apiEndpoint?: string;
  httpStatusCode?: HttpStatusCode | null;
  isSuccess?: boolean | null;
  orderQueueId?: string;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
