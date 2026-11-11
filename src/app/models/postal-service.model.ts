export interface PostalService {
  id: number;
  integrationId: number;
  serviceName: string;
  service: string;
  serviceLevel: string;
  depotId: string;
  depotName: string;
  stockLocationId: string;
  stockLocationName: string;
  deliveryMethodId: string;
  deliveryMethodName: string;
  defaultDimensionUnit: string;
  orderType: string;
  labelType: string;
  copies: number;
  isActive: boolean;
  isManualDeliveryConfig: boolean;
  manualDeliveryMethod?: string;
  manualStockLocation?: string;
  streamPartnerId?: string;
  streamPartnerName?: string;
  createdAtUtc: string;
}

export interface PostalServiceQueryParams {
  searchText?: string;
  vendor?: string;
  country?: string;
  integrationId?: number | null;
  orderType?: number | null;
  labelType?: number | null;
  isActive?: boolean | null;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface CreatePostalServicePayload {
  integrationId: number;
  serviceName: string;
  service: string;
  serviceLevel: string;
  depotId: string;
  depotName: string;
  stockLocationId: string;
  stockLocationName: string;
  deliveryMethodId: string;
  deliveryMethodName: string;
  defaultDimensionUnit: DimensionUnit;
  orderType: OrderType;
  labelType: LabelType;
  copies: number;
  manualDeliveryMethod?: string;
  manualStockLocation?: string;
  streamPartnerId?: string;
  streamPartnerName?: string;
}

export interface IntegrationOption {
  id: number;
  name: string;
}

export interface DepotLocationOption {
  value: DepotLocationValue;
  label: string;
}

export interface StreamDepotLocation {
  deliveryMethodId: string;
  deliveryMethodName: string;
  depotId: string;
  depotName: string;
  stockLocationId: string;
  stockLocationName: string;
  label: string;
}

export interface DepotLocationValue {
  deliveryMethodId: string;
  deliveryMethodName: string;
  depotId: string;
  depotName: string;
  stockLocationId: string;
  stockLocationName: string;
}

export enum OrderType {
  Delivery = 1,
  Collection = 2,
}

export enum LabelType {
  Default = 1,
  PortraitNoQr = 2,
  PortraitStandard = 3,
  Compact100x50NoQr = 4,
}

export enum DimensionUnit {
  Meter = 1,
  Centimeter = 2,
  Millimeter = 3,
  Inch = 4,
}
