// Webhook Subscription Audit Log Model

export interface WebhookSubscriptionAuditLog {
  id: number;
  timestampUtc: string;
  correlationId: string;
  action: string;
  level: string;
  message: string;
  durationMs: number | null;
  eventName: string;
  identifier: string;
  webhooksProcessed: number;
  webhooksCreated: number;
  webhooksFailed: number;
  createdAtUtc: string;
}

export interface WebhookSubscriptionAuditLogQueryParams {
  correlationId?: string;
  level?: number;
  action?: number;
  eventName?: string;
  identifier?: string;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface WebhookSubscriptionAuditLogResponse {
  isSuccess: boolean;
  message: string;
  value?: {
    data: WebhookSubscriptionAuditLog[];
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
