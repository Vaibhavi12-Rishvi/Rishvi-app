# GitHub Copilot Instructions for Stream Integration V3 Frontend

## Project Overview
This is an Angular 21 application for managing Stream Integration installations, integrations, and audit logs. The application follows a modern Angular architecture with standalone components, signals API for reactive state management, and PrimeNG UI components.

## Core Technology Stack
- **Framework**: Angular 21 (Standalone Components, Signals API)
- **UI Library**: PrimeNG 21 with PrimeIcons and PrimeFlex
- **State Management**: Angular Signals (reactive programming)
- **Styling**: SCSS with PrimeNG Theming
- **HTTP**: Angular HttpClient with RxJS observables
- **Change Detection**: OnPush strategy for optimal performance

## Architecture Principles

### 1. Standalone Components
- All components MUST be standalone (no NgModule)
- Use `imports` array in component decorator for dependencies
- Use `inject()` function for dependency injection (no constructor injection)

### 2. Signals API for State Management
- Use `signal()` for mutable reactive state
- Use `computed()` for derived state
- Use `effect()` for side effects (API calls, subscriptions)
- **NEVER** write to signals inside `effect()` unless using `{ allowSignalWrites: true }`
- Prefer signals over subjects/BehaviorSubjects for component state

### 3. Change Detection Strategy
- Always use `ChangeDetectionStrategy.OnPush` in component decorator
- Signals automatically trigger change detection when updated

## Project Structure

```
src/
├── app/
│   ├── core/                      # Core singleton services
│   │   └── services/              # Shared services (API, helper services)
│   ├── features/                  # Feature modules (lazy-loaded)
│   │   ├── installations/         # Installation management
│   │   ├── integrations/          # Integration management
│   │   └── audit-logs/            # Audit log pages
│   ├── layout/                    # Layout components (sidebar, topbar)
│   ├── models/                    # TypeScript interfaces and types
│   ├── app.component.ts          # Root component
│   ├── app.config.ts             # Application configuration
│   └── app.routes.ts             # Routing configuration
├── environments/                  # Environment configurations
└── styles.scss                   # Global styles
```

## Coding Standards

### Component Structure
```typescript
@Component({
  selector: 'app-feature-name',
  imports: [CommonModule, FormsModule, PrimeNGModules],
  providers: [MessageService],  // Component-level services only
  templateUrl: './feature-name.component.html',
  styleUrl: './feature-name.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureNameComponent {
  private serviceInjection = inject(ServiceName);
  
  // Signals for state
  data = signal<Type[]>([]);
  loading = signal<boolean>(false);
  
  constructor() {
    effect(() => {
      // Side effects here
      this.loadData();
    });
  }
}
```

### Reactive State Pattern (Filters & Pagination)

**CRITICAL**: Follow this exact pattern for all list/table pages:

#### 1. Signal Structure
```typescript
// Form filter signals (for UI binding only)
searchText = signal('');
selectedStatus = signal(this.statusOptions[0]);

// Applied filter signals (trigger API calls via effect)
private appliedSearchText = signal('');
private appliedStatus = signal(this.statusOptions[0]);

// Pagination signals (NOT in effect dependencies)
pageNumber = signal<number>(1);
pageSize = signal<number>(100);
firstRow = signal<number>(0);  // For PrimeNG table [first] binding
sortField = signal<string>('createdAtUtc');
sortOrder = signal<number>(-1);
```

#### 2. Effect Pattern (Filters ONLY)
```typescript
constructor() {
  effect(() => {
    // Track ONLY applied filters (NOT pagination or sort)
    this.appliedSearchText();
    this.appliedStatus();
    // ... other filters
    
    this.loadData();
  });
}
```

#### 3. Pagination & Sorting (Direct Calls)
```typescript
onPageChange(event: any) {
  const page = Math.floor(event.first / event.rows) + 1;
  this.pageNumber.set(page);
  this.firstRow.set(event.first);
  this.pageSize.set(event.rows);
  // Effect will NOT trigger - call API directly
}

onSort(event: any) {
  this.sortField.set(event.field || 'defaultField');
  this.sortOrder.set(event.order);
  this.pageNumber.set(1);
  this.firstRow.set(0);
  // Effect will NOT trigger - call API directly
}
```

#### 4. Apply Filters (Reset Pagination FIRST)
```typescript
applyFilters() {
  this.pageNumber.set(1);
  this.firstRow.set(0);
  
  // Copy form values to applied signals (triggers effect)
  this.appliedSearchText.set(this.searchText());
  this.appliedStatus.set(this.selectedStatus());
}
```

#### 5. PrimeNG Table Bindings
```html
<p-table 
  [value]="data()"
  [first]="firstRow()"
  [lazy]="true"
  [paginator]="true"
  [rows]="pageSize()"
  [totalRecords]="totalCount()"
  [loading]="loading()"
  [sortField]="sortField()"
  [sortOrder]="sortOrder()"
  (onPage)="onPageChange($event)"
  (onSort)="onSort($event)">
```

### Service Pattern
```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  
  getData(params: QueryParams): Observable<Response> {
    let httpParams = new HttpParams();
    if (params.pageNumber !== undefined) {
      httpParams = httpParams.set('PageNumber', params.pageNumber.toString());
    }
    // Always check !== undefined for numeric values (including 0)
    
    return this.http.get<Response>(url, { params: httpParams });
  }
}
```

### Model Pattern
```typescript
export interface DataModel {
  id: number;
  name: string;
  createdAtUtc: string;
}

export interface DataQueryParams {
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface DataResponse {
  isSuccess: boolean;
  message: string;
  value?: {
    data: DataModel[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
  error?: {
    code: string;
    description: string;
    errorType: number;
    validationErrors: string[];
  };
}
```

## Common Patterns

### Date Range Defaults (Current Month)
```typescript
// Add these helper methods to components with date filters
private getCurrentMonthStart(): string {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  return this.formatDateForInput(firstDay);
}

private getCurrentMonthEnd(): string {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return this.formatDateForInput(lastDay);
}

private formatDateForInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Initialize date signals
dateFromValue = signal(this.getCurrentMonthStart());
dateToValue = signal(this.getCurrentMonthEnd());
```

### Error Handling
```typescript
private showError(message: string, validationErrors?: string[]): void {
  this.messageService.add({
    severity: 'error',
    summary: 'Error',
    detail: message + (validationErrors?.length ? '\n' + validationErrors.join('\n') : ''),
    life: 5000
  });
}
```

### PrimeNG Severity Mapping
```typescript
// Use switch statements for exact string matching
getLevelSeverity(level: string): 'success' | 'info' | 'warn' | 'danger' {
  switch (level) {
    case 'Success': return 'success';
    case 'Info': return 'info';
    case 'Warning': return 'warn';
    case 'Error': return 'danger';
    default: return 'info';
  }
}
```

## Important Rules

### DO:
✅ Use standalone components with explicit imports
✅ Use `inject()` for dependency injection
✅ Use signals for reactive state management
✅ Use `ChangeDetectionStrategy.OnPush`
✅ Separate "form signals" from "applied signals" for filters
✅ Keep pagination/sorting outside effect dependencies
✅ Reset pagination before applying new filters
✅ Use `!== undefined` when checking numeric parameters (not truthy checks)
✅ Initialize signals with default values or use constructor for complex initialization
✅ Use PrimeNG's `[first]` binding with `firstRow` signal for proper pagination state
✅ Default page size to 100 records
✅ Default date filters to current month (start to end)

### DON'T:
❌ Don't use NgModules
❌ Don't use constructor injection
❌ Don't write to signals inside `effect()` without `allowSignalWrites: true`
❌ Don't put pagination/sorting signals in effect dependencies
❌ Don't use `onLazyLoad` - split into `onPageChange` and `onSort`
❌ Don't update `pageSize` in `onPageChange` (it triggers unnecessary re-renders)
❌ Don't use truthy checks for numeric parameters (0 is falsy but valid)
❌ Don't reset pagination AFTER setting applied filters
❌ Don't forget to add `[loading]` binding to tables
❌ Don't use `include()` for string matching - use exact equality or switch statements

## File Naming Conventions
- Components: `feature-name.component.ts`
- Services: `feature-name.service.ts`
- Models: `feature-name.model.ts`
- Routes: `feature-name.routes.ts`
- Use kebab-case for all file names
- Use PascalCase for class names

## Git Commit Messages
- Use conventional commits format: `type(scope): message`
- Types: `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `chore`
- Example: `feat(audit-logs): add pagination with signals API`

## Performance Optimization
- Use `OnPush` change detection strategy
- Use signals instead of RxJS for component state
- Avoid unnecessary effect dependencies
- Use `trackBy` functions in `*ngFor` loops
- Lazy load feature modules via routing
- Use PrimeNG's virtual scrolling for large datasets

## Testing Approach
- Unit tests with Jasmine/Karma
- Test signal updates and computed values
- Mock HTTP services with `HttpClientTestingModule`
- Test form validation and user interactions
- Focus on business logic and state management

## Common PrimeNG Components
- `p-table`: Data tables with pagination, sorting, filtering
- `p-button`: Buttons with icons and labels
- `p-dropdown`: Select dropdowns
- `p-calendar`: Date pickers
- `p-inputText`: Text inputs
- `p-toast`: Toast notifications
- `p-tag`: Status badges
- `p-card`: Card containers

## Environment Configuration
- `environment.ts`: Development environment
- `environment.prod.ts`: Production environment
- Use `environment.apiUrl` for API base URL

## When Generating Code
1. Always use standalone components
2. Implement the reactive state pattern correctly
3. Add proper TypeScript types/interfaces
4. Include error handling with PrimeNG toast
5. Use OnPush change detection
6. Follow the folder structure
7. Add meaningful comments for complex logic
8. Use signals for all reactive state
9. Keep effects simple and focused on filters only
