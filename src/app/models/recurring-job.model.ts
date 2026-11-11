export interface RecurringJob {
  id: string;
  cron: string;
  queue: string;
  jobName: string;
  methodName: string;
  timeZoneId: string;
  nextExecution: string;
  lastExecution: string;
  lastJobId: string;
  lastJobState: string;
  createdAt: string;
  removed: boolean;
  error: string;
}

export interface RecurringJobResponse {
  isSuccess: boolean;
  message: string;
  value: RecurringJob[] | null;
  error: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  } | null;
}
