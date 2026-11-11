// Webhook Subscription Model

export interface WebhookSubscription {
  id: number;
  installationId: number;
  integrationId: number;
  eventName: string;
  identifier: string;
  callbackUrl: string;
  httpMethod: string;
  contentType: string;
  isActive: boolean;
  createdAtUtc: string;
}

export interface WebhookSubscriptionQueryParams {
  searchText?: string;
  installationId?: number;
  integrationId?: number;
  isActive?: boolean | null;
  eventName?: string;
  identifier?: string;
  dateFrom?: string;
  dateTo?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface WebhookSubscriptionResponse {
  isSuccess: boolean;
  message: string;
  value?: {
    data: WebhookSubscription[];
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
