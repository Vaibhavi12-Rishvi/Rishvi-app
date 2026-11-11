import { Injectable } from '@angular/core';

type AuditLogSeverity = 'info' | 'success' | 'warn' | 'danger' | 'secondary';

@Injectable({
  providedIn: 'root',
})
export class AuditLogHelperService {
  truncateId(id: string | null | undefined): string {
    if (!id) return '-';
    return id.length > 8 ? id.substring(0, 8) + '...' : id;
  }

  formatUtcToLocal(utcDateString: string | null | undefined): string {
    if (!utcDateString) {
      return '-';
    }

    const isoString = utcDateString.endsWith('Z') ? utcDateString : `${utcDateString}Z`;
    const date = new Date(isoString);

    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  }

  getLevelSeverity(level: string): AuditLogSeverity {
    const levelUpper = level?.toUpperCase();
    switch (levelUpper) {
      case 'INFO':
        return 'info';
      case 'SUCCESS':
        return 'success';
      case 'WARNING':
        return 'warn';
      case 'ERROR':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  getInstallationActionSeverity(action: string): AuditLogSeverity {
    switch (action) {
      case 'InstallationRequested':
        return 'info';
      case 'InstallationCompleted':
        return 'success';
      case 'InstallationUpdated':
        return 'warn';
      case 'InstallationFailed':
        return 'danger';
      case 'InstallationDeleted':
        return 'warn';
      default:
        return 'secondary';
    }
  }
  getIntegrationActionSeverity(action: string): AuditLogSeverity {
    switch (action) {
      case 'IntegrationCreateStarted':
        return 'info';
      case 'IntegrationCreated':
        return 'success';
      case 'IntegrationCreateFailed':
        return 'danger';
      case 'IntegrationRetrieved':
        return 'info';
      case 'IntegrationUpdateStarted':
        return 'warn';
      case 'IntegrationUpdated':
        return 'success';
      case 'IntegrationUpdateFailed':
        return 'danger';
      case 'IntegrationDeleteStarted':
        return 'warn';
      case 'IntegrationDeleted':
        return 'success';
      case 'IntegrationDeleteFailed':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  getOrderFetchActionSeverity(action: string): AuditLogSeverity {
    switch (action) {
      case 'FetchAllOrdersStarted':
        return 'info';
      case 'FetchNewOrdersStarted':
        return 'warn';
      case 'FetchNewOrdersCompleted':
        return 'success';
      case 'FetchFailedOrdersStarted':
        return 'warn';
      case 'FetchFailedOrdersCompleted':
        return 'danger';
      case 'FetchAllOrdersCompleted':
        return 'success';
      case 'FetchingOrderDetails':
        return 'info';
      case 'ProcessingOrderData':
        return 'info';
      case 'SavingOrderToDatabase':
        return 'warn';
      default:
        return 'secondary';
    }
  }

  getMasterDataSyncActionSeverity(action: string): AuditLogSeverity {
    switch (action) {
      case 'SyncIdentifiersRequested':
        return 'info';
      case 'SyncIdentifiersCompleted':
        return 'success';
      case 'SyncIdentifiersFailed':
        return 'danger';
      case 'SyncPostalServicesRequested':
        return 'info';
      case 'SyncPostalServicesCompleted':
        return 'success';
      case 'SyncPostalServicesFailed':
        return 'danger';
      case 'BatchSyncIdentifiersStarted':
        return 'info';
      case 'BatchSyncIdentifiersCompleted':
        return 'success';
      case 'BatchSyncPostalServicesStarted':
        return 'info';
      case 'BatchSyncPostalServicesCompleted':
        return 'success';
      default:
        return 'secondary';
    }
  }

  getOrderSendActionSeverity(action: string): AuditLogSeverity {
    switch (action) {
      case 'SendOrderStarted':
        return 'info';
      case 'SendOrderCompleted':
        return 'success';
      case 'SendOrderFailed':
        return 'danger';
      case 'DeleteOrderStarted':
        return 'warn';
      case 'DeleteOrderCompleted':
        return 'success';
      case 'DeleteOrderFailed':
        return 'danger';
      default:
        return 'secondary';
    }
  }
}
