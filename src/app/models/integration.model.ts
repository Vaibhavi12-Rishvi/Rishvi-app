import { PaginationMeta } from './api.model';

// Integration entity from API
export interface Integration {
  id: number;
  installationId: number;
  shopDomain: string;
  shopName: string;
  email: string;
  integrationName: string;
  linnworksAccountName: string;
  linnworksUniqueIdentifier: string;
  shippingApiConfigId: number;
  streamClientId: string;
  streamClientSecret?: string;
  streamUrl: string;
  streamClientUrl: string;
  contactName: string;
  companyName: string;
  addressLine1: string;
  city: string;
  county: string;
  countryCode: string;
  postCode: string;
  labelReference: string;
  isOrderSyncEnabled: boolean;
  isOrderDispatchSyncEnabled: boolean;
  updateTrackingAfterPlanning?: boolean;
  isWebhookFeaturesEnabled?: boolean;
  useDefaultLocation: boolean;
  defaultLocation: string;
  orderLookbackDays: number;
  useCurrentDateAsHandsOnDate?: boolean;
  profileType?: string;
  profileName: string;
  configStage: IntegrationConfigStage;
  isActive: boolean;
  isUsingStreamPartnerAccount?: boolean;
  streamPartnerAccountId?: string;
  streamPartnerAccountName?: string;
  orderNumPrefix?: string;
  addTrackingToOrderNote?: boolean;
  enableAutomaticOrderSync?: boolean;
  createdAtUtc: string;
  updatedAtUtc: string;
  createdBy: string | null;
  updatedBy: string | null;
}

// Config Stage Enum
export enum IntegrationConfigStage {
  SelectProfile = 1,
  ConfigureSettings = 2,
  SetupCompleted = 3,
}

export interface ActiveIntegration {
  id: number;
  integrationName: string;
}

export interface IntegrationProfileTypeOption {
  value: string;
  label: string;
  description: string;
}

export interface CreateIntegrationPayload {
  installationId?: number;
  streamClientId: string;
  streamClientSecret: string;
  integrationName: string;
  streamUrl: string;
  orderLookbackDays: number;
  isOrderSyncEnabled: boolean;
  isOrderDispatchSyncEnabled: boolean;
  useCurrentDateAsHandsOnDate: boolean;
  updateTrackingAfterPlanning: boolean;
  isWebhookFeaturesEnabled: boolean;
  profileType: string;
  isUsingStreamPartnerAccount: boolean;
  streamPartnerAccountId?: string;
  streamPartnerAccountName?: string;
  orderNumPrefix?: string;
  addTrackingToOrderNote: boolean;
  enableAutomaticOrderSync: boolean;
}

export interface UpsertIntegrationPayload extends CreateIntegrationPayload {
  id?: number;
}

// Query parameters for filtering
export interface IntegrationQueryParams {
  searchText?: string;
  installationId?: number | null;
  profileName?: string;
  configStage?: IntegrationConfigStage | null;
  isActive?: boolean | null;
  dateFrom?: string;
  dateTo?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

// Legacy models (kept for backward compatibility)
export interface IntegrationListResponse {
  items: Integration[];
  pagination: PaginationMeta;
}
