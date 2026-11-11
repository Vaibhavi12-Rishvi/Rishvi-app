import { Component, inject, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Identifier, IdentifierQueryParams } from '../../../models/identifier.model';
import { IdentifierService } from '../../../core/services/identifier.service';

@Component({
  selector: 'app-identifier-list',
  imports: [FormsModule, TableModule, ButtonModule, CardModule, InputTextModule, IconFieldModule, InputIconModule, ToastModule],
  providers: [MessageService],
  templateUrl: './identifier-list.component.html',
  styleUrl: './identifier-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentifierListComponent {
  private readonly identifierService = inject(IdentifierService);
  private readonly messageService = inject(MessageService);

  // Constants
  private readonly DEFAULT_PAGE_SIZE = 50;

  // Form filter signals (for UI binding only)
  searchText = signal('');

  // Applied filter signals (trigger API calls)
  private readonly appliedSearchText = signal('');

  // Table state signals
  identifiers = signal<Identifier[]>([]);
  loading = signal<boolean>(false);
  totalCount = signal<number>(0);
  pageNumber = signal<number>(1);
  pageSize = signal<number>(this.DEFAULT_PAGE_SIZE);
  firstRow = signal<number>(0);
  totalPages = signal<number>(0);
  sortField = signal<string>('name');
  sortOrder = signal<number>(1); // 1 for ascending

  constructor() {
    // Effect only triggers on applied filters
    effect(() => {
      // Track only applied filters
      this.appliedSearchText();

      // Load data only when applied filters change
      this.loadIdentifiers();
    });
  }

  loadIdentifiers(): void {
    const params: IdentifierQueryParams = {
      searchText: this.appliedSearchText() ?? undefined,
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize(),
      sortBy: this.sortField(),
      sortDescending: this.sortOrder() === -1,
    };

    this.loading.set(true);

    this.identifierService.getIdentifiers(params).subscribe({
      next: (result) => {
        this.loading.set(false);

        if (result.isSuccess && result.value) {
          this.identifiers.set(result.value.data);
          this.totalCount.set(result.value.totalCount);
          this.totalPages.set(result.value.totalPages);
        } else if (result.error) {
          this.showError(result.message, result.error.validationErrors);
          this.identifiers.set([]);
          this.totalCount.set(0);
          this.totalPages.set(0);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.showError('An unexpected error occurred', [error.message]);
        this.identifiers.set([]);
        this.totalCount.set(0);
        this.totalPages.set(0);
      },
    });
  }

  applyFilters(): void {
    // Reset pagination FIRST
    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Copy form values to applied signals (triggers effect)
    this.appliedSearchText.set(this.searchText().trim());
  }

  clearFilters(): void {
    // Reset form signals
    this.searchText.set('');

    // Apply cleared filters
    this.applyFilters();
  }

  onPageChange(event: any): void {
    const page = Math.floor(event.first / event.rows) + 1;
    this.pageNumber.set(page);
    this.firstRow.set(event.first);
    this.pageSize.set(event.rows);

    // Effect will NOT trigger - call API directly
    this.loadIdentifiers();
  }

  onSort(event: any): void {
    this.sortField.set(event.field ?? 'name');
    this.sortOrder.set(event.order);
    this.pageNumber.set(1);
    this.firstRow.set(0);

    // Effect will NOT trigger - call API directly
    this.loadIdentifiers();
  }

  private showError(message: string, validationErrors?: string[]): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message + (validationErrors?.length ? '\n' + validationErrors.join('\n') : ''),
      life: 5000,
    });
  }
}
