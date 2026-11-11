// Dashboard Models

export interface DashboardStatistics {
  installations: {
    total: number;
    active: number;
    inactive: number;
  };
  integrations: {
    total: number;
    active: number;
    inactive: number;
  };
  orders: {
    total: number;
    pending: number;
    completed: number;
    failed: number;
    validationFailed: number;
    readyForRetry: number;
    sentToStream : number;
  };
  lastUpdatedUtc: string;
}

export interface DashboardStatisticsResponse {
  isSuccess: boolean;
  message: string;
  value: DashboardStatistics;
  error: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  };
}
