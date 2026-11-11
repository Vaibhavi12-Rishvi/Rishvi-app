import { PaginationMeta } from './api.model';

// Installation entity from API
export interface Installation {
  id: number;
  shopDomain: string;
  shopName: string;
  email: string;
  shopOwnerName: string | null;
  isActive: boolean;
  installedAt: string;
  lastTokenRefresh: string | null;
  uninstalledAt: string | null;
}

export interface ActiveInstallation {
  id: number;
  email: string;
}

// Query parameters for filtering
export interface InstallationQueryParams {
  searchText?: string;
  isActive?: boolean | null;
  dateFrom?: string;
  dateTo?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

// Legacy models (kept for backward compatibility)
export interface InstallationListResponse {
  items: Installation[];
  pagination: PaginationMeta;
}
