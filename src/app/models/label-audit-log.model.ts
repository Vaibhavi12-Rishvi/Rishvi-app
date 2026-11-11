// Label Audit Log Model

import { AuditLevel, LabelAction } from './audit-log.model';

export interface LabelAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  installationId: number;
  orderId: number;
  packageCount: number;
  message: string;
  createdAtUtc: string;
}

export interface LabelAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: LabelAuditLog[];
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

export interface LabelAuditLogQueryParams {
  correlationId?: string;
  level?: AuditLevel;
  action?: LabelAction;
  installationId?: number;
  orderId?: number;
  dateFrom?: string;
  dateTo?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
