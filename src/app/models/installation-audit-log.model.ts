// Installation Audit Log Model

import { AuditLevel, InstallationAuditAction } from './audit-log.model';

export interface InstallationAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  token: string;
  message: string;
  durationMs: number | null;
  createdAtUtc: string;
}

export interface InstallationAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: InstallationAuditLog[];
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

export interface InstallationAuditLogQueryParams {
  correlationId?: string;
  level?: AuditLevel;
  action?: InstallationAuditAction;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
