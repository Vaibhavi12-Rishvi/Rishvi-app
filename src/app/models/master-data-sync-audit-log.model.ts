// Master Data Sync Audit Log Model

export interface MasterDataSyncAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  message: string;
  itemsProcessed: number;
  itemsCreated: number;
  itemsUpdated: number;
  durationMs: number | null;
  installationId: number;
  createdAtUtc: string;
}

export interface MasterDataSyncAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: MasterDataSyncAuditLog[];
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

export interface MasterDataSyncAuditLogQueryParams {
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
