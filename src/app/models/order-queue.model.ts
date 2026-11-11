// Order Queue Models

export interface OrderQueueItem {
  id: string;
  shopifyOrderId: string;
  linnworksNumOrderId: number;
  streamOrderId: string;
  streamConsignmentId: string;
  streamTrackingNumber: string;
  streamTrackingUrl: string;
  syncStatus: number;
  sentToStreamAtUtc: string | null;
  completedAtUtc: string | null;
  failedAtUtc: string | null;
  lastAttemptedAtUtc: string | null;
  retryCount: number;
  lastHttpStatusCode: number;
  lastErrorMessage: string;
  lastErrorDetails: string;
  installationId: number;
  installationEmail: string;
  createdAtUtc: string;
  updatedAtUtc: string;
}

export interface OrderQueueResponse {
  isSuccess: boolean;
  message: string;
  value: {
    data: OrderQueueItem[];
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

export interface OrderQueueQueryParams {
  orderName?: string;
  searchText?: string;
  linnworksNumOrderId?: number;
  streamOrderId?: string;
  syncStatus?: number;
  installationId?: number | null;
  dateFrom?: string;
  dateTo?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
