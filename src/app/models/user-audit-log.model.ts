// User Audit Log Model

import { AuditLevel, UserAction } from './audit-log.model';

export interface UserAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  email: string;
  userId: number;
  ipAddress: string;
  userAgent: string;
  message: string;
  createdAtUtc: string;
}

export interface UserAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: UserAuditLog[];
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

export interface UserAuditLogQueryParams {
  email?: string;
  correlationId?: string;
  level?: AuditLevel;
  action?: UserAction;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
