// Common Audit Log Enums and Types

export enum AuditLevel {
  Info = 1,
  Success = 4,
  Warning = 2,
  Error = 3,
}
export enum UserAction {
  UserCreated = 1,
  PasswordChanged = 2,
  PasswordReset = 3,
}
export enum LabelAction {
  GenerateLabelRequested = 1,
  GenerateLabelCompleted = 2,
  GenerateLabelFailed = 3,
}
export enum EmailAction {
  WelcomeEmail = 1,
  PasswordResetEmail = 2,
}

export enum InstallationAuditAction {
  InstallationRequested = 1,
  InstallationCompleted = 2,
  InstallationUpdated = 3,
  InstallationFailed = 4,
  InstallationDeleted = 5,
}

export enum OrderFetchAction {
  FetchAllOrdersStarted = 1,
  FetchNewOrdersStarted = 2,
  FetchNewOrdersCompleted = 3,
  FetchFailedOrdersStarted = 4,
  FetchFailedOrdersCompleted = 5,
  FetchAllOrdersCompleted = 6,
  FetchingOrderDetails = 7,
  ProcessingOrderData = 8,
  SavingOrderToDatabase = 9,
}

export enum OrderSendAction {
  SendOrderStarted = 1,
  SendOrderCompleted = 2,
  SendOrderFailed = 3,
}

export enum IntegrationAuditAction {
  IntegrationCreateStarted = 1,
  IntegrationCreated = 2,
  IntegrationCreateFailed = 3,
  IntegrationRetrieved = 4,
  IntegrationUpdateStarted = 5,
  IntegrationUpdated = 6,
  IntegrationUpdateFailed = 7,
  IntegrationDeleteStarted = 8,
  IntegrationDeleted = 9,
  IntegrationDeleteFailed = 10,
}

export enum MasterDataSyncAction {
  SyncIdentifiersRequested = 1,
  SyncIdentifiersCompleted = 2,
  SyncIdentifiersFailed = 3,
  SyncPostalServicesRequested = 4,
  SyncPostalServicesCompleted = 5,
  SyncPostalServicesFailed = 6,
  BatchSyncIdentifiersStarted = 7,
  BatchSyncIdentifiersCompleted = 8,
  BatchSyncPostalServicesStarted = 9,
  BatchSyncPostalServicesCompleted = 10,
}

export enum WebhookAuditAction {
  EventReceived = 1,
  EventProcessingStarted = 2,
  EventProcessingSucceeded = 3,
  EventProcessingFailed = 4,
  OrderUpdateStarted = 5,
  OrderUpdateSucceeded = 6,
  OrderUpdateFailed = 7,
  OrderUpdateSkipped = 8,
  EventProcessingSkipped = 9,
}

export enum HttpStatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  UnprocessableEntity = 422,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}
