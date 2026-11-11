// API Result Pattern Models

export enum ErrorType {
  Failure = 0,
  NotFound = 1,
  Validation = 2,
  Conflict = 3,
  AccessUnAuthorized = 4,
  AccessForbidden = 5,
}

export interface ApiError {
  code: string;
  description: string;
  errorType: ErrorType;
  validationErrors: string[];
}

export interface ApiResult<T> {
  isSuccess: boolean;
  message: string;
  value: T;
  error: ApiError | null;
}

export interface PaginatedResult<T> {
  data: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationParams {
  pageNumber?: number;
  pageSize?: number;
  searchText?: string;
  sortBy?: string;
  sortDescending?: boolean;
  dateFrom?: string;
  dateTo?: string;
  isActive?: boolean | null;
}

// Legacy models
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: boolean;
  message: string;
  statusCode: number;
  errors: Record<string, string[]>;
  timestamp: string;
}

export interface PaginationMeta {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  hasNext: boolean;
  hasPrevious: boolean;
}
export interface ApiResult<T> {
  isSuccess: boolean;
  message: string;
  value: T;
  error: ApiError | null;
}
