// Webhook Event Audit Log Model

export interface WebhookEventAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  message: string;
  eventCode: string;
  identifier: string;
  durationMs: number | null;
  ordersProcessed: number;
  ordersSucceeded: number;
  ordersFailed: number;
  integrationId: number;
  webhookEventId: number;
  createdAtUtc: string;
}

export interface WebhookEventAuditLogQueryParams {
  correlationId?: string;
  level?: number;
  action?: number;
  eventCode?: string;
  identifier?: string;
  integrationId?: number;
  webhookEventId?: number;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface WebhookEventAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value?: {
    data: WebhookEventAuditLog[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  error?: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  };
}
