import type { UserRole } from './auth.model';

export interface User {
  id: number;
  email: string;
  role: UserRole;
  installationId: number;
  installationEmail: string;
  isActive: boolean;
  createdAtUtc: string;
}

export interface UserQueryParams {
  searchText?: string;
  role?: number;
  installationId?: number;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface UserResponse {
  isSuccess: boolean;
  message: string;
  value?: {
    data: User[];
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

export interface UserListItem extends User {}

// Role options for dropdown
export interface RoleOption {
  label: string;
  value: number | null;
}

// Change Password Request
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

// Change Password Response
export interface ChangePasswordResponse {
  isSuccess: boolean;
  message: string;
  error?: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  };
}

// Reset Password Request
export interface ResetPasswordRequest {
  email: string;
}

// Reset Password Response
export interface ResetPasswordResponse {
  isSuccess: boolean;
  message: string;
  error?: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  };
}

export { UserRole } from './auth.model';
