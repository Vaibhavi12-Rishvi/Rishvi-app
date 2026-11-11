// Order Details Models

export interface OrderAddress {
  addressName: string;
  address1: string;
  address2: string | null;
  address3: string | null;
  country: string;
  city: string;
  zip: string;
  phone: string | null;
  latitude: number | null;
  longitude: number | null;
}

export interface OrderCustomerInfo {
  shopifyCustomerId: string;
  displayName: string;
  email: string;
  phone: string | null;
  defaultAddress: OrderAddress;
}

export interface OrderItem {
  id: string;
  shopifyLineItemId: string;
  shopifyVariantId: string;
  sku: string | null;
  variantSKU: string | null;
  title: string;
  quantity: number;
  pricePerUnit: number;
  unitCost: number | null;
  currency: string;
  stockLocation: string | null;
  weightValue: number;
  weightUnit: string;
  customAttributesJson: string | null;
}

export interface FulfillmentLineItem {
  id: string;
  shopifyLineItemId: string;
  quantity: number;
}

export interface OrderFulfillment {
  id: string;
  shopifyLocationId: string | null;
  locationName: string | null;
  shopifyFulfillmentOrderId: string;
  status: string;
  requestStatus: string;
  deliveryMethodTypeName: string | null;
  lineItems: FulfillmentLineItem[];
}

export interface OrderDetails {
  id: string;
  shopifyOrderId: string;
  orderName: string;
  email: string;
  phone: string | null;
  customerInfo: OrderCustomerInfo;
  shippingAddress: OrderAddress;
  items: OrderItem[];
  fulfillments: OrderFulfillment[];
  installationId: number;
  installationShopDomain: string;
  createdAtUtc: string;
  updatedAtUtc: string;
}

export interface OrderDetailsResponse {
  value: OrderDetails | null;
  error: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  } | null;
  isSuccess: boolean;
  message: string;
}
