// Webhook Event Model

export enum WebhookStatus {
  Pending = 1,
  Processing = 2,
  Completed = 3,
  Failed = 4,
  Skipped = 5,
  ReadyForRetry = 6,
}

export interface WebhookEvent {
  id: number;
  receivedAtUtc: string;
  correlationId: string;
  eventCode: string;
  identifier: string;
  partyId: string;
  idempotencyKey: string;
  status: string;
  processedAtUtc: string | null;
  processingError: string | null;
  retryCount: number;
  integrationId: number;
  createdAtUtc: string;
  rawPayload?: string;
}

export interface WebhookEventQueryParams {
  correlationId?: string;
  eventCode?: string;
  identifier?: string;
  partyId?: string;
  status?: WebhookStatus;
  integrationId?: number;
  dateFrom?: string;
  dateTo?: string;
  searchText?: string;
  hasErrors?: boolean | null;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface WebhookEventResponse {
  isSuccess: boolean;
  message: string;
  value?: {
    data: WebhookEvent[];
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
