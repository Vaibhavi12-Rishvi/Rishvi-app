// Email Audit Log Model

import { AuditLevel, EmailAction } from './audit-log.model';

export interface EmailAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  recipientEmail: string;
  subject: string;
  userId: number;
  isSuccess: boolean;
  message: string;
  createdAtUtc: string;
}

export interface EmailAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: EmailAuditLog[];
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

export interface EmailAuditLogQueryParams {
  recipientEmail?: string;
  correlationId?: string;
  level?: AuditLevel;
  action?: EmailAction;
  dateFrom?: string;
  dateTo?: string;
  isSuccess?: boolean;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
