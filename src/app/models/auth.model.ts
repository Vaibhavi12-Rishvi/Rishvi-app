export interface LoginRequest {
  email: string;
  password: string;
}
export enum UserRole {
  Admin = 1,
  Client = 2,
}
export interface UserInfo {
  email: string;
  role: UserRole;
  installationId: number | undefined;
  installationEmail: string | undefined;
}
export interface LoginResponseValue {
  jwtToken: string;
  email: string;
  jwtTokenExpiresAtUtc: string;
  role: UserRole;
  installationId?: number;
  installationEmail?: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  message: string;
  value: LoginResponseValue | null;
  error: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  } | null;
}
