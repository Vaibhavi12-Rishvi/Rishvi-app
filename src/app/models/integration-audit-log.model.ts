// Integration Audit Log Model

export interface IntegrationAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  message: string;
  durationMs: number | null;
  installationId: number;
  createdAtUtc: string;
}

export interface IntegrationAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: IntegrationAuditLog[];
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

export interface IntegrationAuditLogQueryParams {
  correlationId?: string;
  level?: number;
  action?: number;
  installationId?: number;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
