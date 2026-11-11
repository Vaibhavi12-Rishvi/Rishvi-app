import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { AuditLevel, HttpStatusCode } from '../../../models/audit-log.model';



export interface SelectFilterOption {
  label: string;
  value: string | number | boolean | null;
}

export interface SelectHttpMethodFilterOption {
  label: string;
  value: HttpStatusCode | null;
}

export interface SelectIntegrationFilterOption {
  label: string;
  value: number | null;
}

export interface SelectInstallationFilterOption {
  label: string;
  value: number | null;
}

export interface SelectStatusFilterOption {
  label: string;
  value: boolean | null;
}

export interface SelectStringStatusFilterOption {
  label: string;
  value: string | null;
}

export interface SelectDropdownFilterOption<T = string | AuditLevel | null> {
  label: string;
  value: T;
}

export interface SelectLevelFilterOption extends SelectDropdownFilterOption<AuditLevel | null> {}
export interface SelectActionFilterOption extends SelectDropdownFilterOption<any> {}

export type SelectFilterOptionWithString = SelectFilterOption & { value: string | null };
export type SelectFilterOptionWithNumber = SelectFilterOption & { value: number | null };

/**
 * Shared filter bar component for audit log list pages.
 * Handles the common search, date-from, date-to inputs and Apply/Clear buttons.
 * Component-specific filters are projected via ng-content between the search and date inputs.
 */
@Component({
  selector: 'app-audit-log-filter-bar',
  imports: [FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule],
  templateUrl: './audit-log-filter-bar.component.html',
  styleUrls: ['./audit-log-filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditLogFilterBarComponent {
  searchText = input<string>('');
  dateFrom = input<string>('');
  dateTo = input<string>('');

  correlationId = input<string>('');

  selectedInstallation = input<SelectInstallationFilterOption>({ label: 'All', value: null });
  installationOptions = input<SelectInstallationFilterOption[]>([]);
  compareOptions = input<(a: SelectInstallationFilterOption, b: SelectInstallationFilterOption) => boolean>((a, b) => {
    if (!a || !b) return a === b;
    return a.value === b.value;
  });
  compareStatusOptions = input<(a: SelectStatusFilterOption, b: SelectStatusFilterOption) => boolean>((a, b) => {
      if (!a || !b) return a === b;
    return a.value === b.value;
    });

  selectedIntegration = input<SelectIntegrationFilterOption>({ label: 'All', value: null });
  integrationOptions = input<SelectIntegrationFilterOption[]>([]);

  selectedStatus = input< SelectStatusFilterOption>({ label: 'All', value: null });
  statusOption = input< SelectStatusFilterOption[]>([]);
  statusOptions = input< SelectStatusFilterOption[]>([]);
  showStatusFilter = input<boolean>(false);
  statusFilterLabel = input<string>('Status');
  succesFilterLabel = input<string>('Success')

  selectedHttpMethod = input<SelectHttpMethodFilterOption>({ label: 'All', value: null });
  httpMethodOption = input<SelectHttpMethodFilterOption[]>([]);
  showHttpMethodFilter = input<boolean>(false);

  showCorrelationIdFilter = input<boolean>(false);
  showIntegrationFilter = input<boolean>(false);
  showInstallationFilter = input<boolean>(false);
  showDateFilter = input<boolean>(false);

  selectedLevel = input<SelectLevelFilterOption>({ label: 'All', value: null });
  levelOptions = input<SelectLevelFilterOption[]>([]);
  showLevelFilter = input<boolean>(false);

  selectedAction = input<SelectActionFilterOption>({ label: 'All', value: null });
  actionOptions = input<SelectActionFilterOption[]>([]);
  showActionFilter = input<boolean>(true);
  showSearchFilter = input<boolean>(true);

  searchTextChange = output<string>();
  dateFromChange = output<string>();
  dateToChange = output<string>();
  filtersApplied = output<void>();
  filtersCleared = output<void>();
  correlationIdChange = output<string>();
  selectedInstallationChange = output<SelectInstallationFilterOption>();

  selectedIntegrationChange = output<SelectIntegrationFilterOption>();
  selectedStatusChange = output< SelectStatusFilterOption>();
  selectedHttpMethodChange = output<SelectHttpMethodFilterOption>();
  selectedLevelChange = output<SelectLevelFilterOption>();
  selectActionChange = output<SelectActionFilterOption>();
  selectedActionChange = output<SelectActionFilterOption>();
}
