import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../core/services/theme.service';
import { AuthService } from '../../core/services/auth.service';

type GroupKey = 'installations' | 'integrations' | 'orders' | 'users' | 'webhooks';

const GROUP_ROUTES: Record<GroupKey, string[]> = {
  installations: ['/installations', '/installation-audit-logs'],
  integrations: ['/integrations', '/integration-audit-logs'],
  orders: ['/order-queue', '/orders-fetch-audit-logs', '/orders-send-audit-logs', '/orders-send-api-audit-logs'],
  users: ['/users', '/user-audit-logs', '/email-audit-logs'],
  webhooks: ['/webhook-subscriptions', '/webhook-subscription-audit-logs', '/webhook-events', '/webhook-event-audit-logs'],
};

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  host: {
    "[class.sidebar-hidden]": "!themeService.sidebarVisible()",
    "[class.mobile-active]": "themeService.sidebarVisible()",
  },
  template: `
    <div class="sidebar">
      <nav class="sidebar-nav">
        <ul class="menu-list">
          <!-- Dashboard -->
          <li>
            <a routerLink="/dashboard" routerLinkActive="active" class="menu-item" (click)="onMenuItemClick()">
              <i class="pi pi-home"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <!-- Installations -->
          <li class="menu-group">
            <button class="menu-group-header" [class.group-active]="isGroupActive('installations')" (click)="toggleGroup('installations')">
              <i class="pi pi-box"></i>
              <span>Installations</span>
              <i class="pi pi-chevron-right group-arrow" [class.open]="installationsOpen()"></i>
            </button>
            @if (installationsOpen()) {
              <ul class="submenu">
                <li>
                  <a
                    routerLink="/installations"
                    routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }"
                    class="submenu-item"
                    (click)="onMenuItemClick()"
                  >
                    <i class="pi pi-box"></i>
                    <span>Installations List</span>
                  </a>
                </li>
                @if (authService.isAdmin()) {
                  <li>
                    <a routerLink="/installation-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                      <i class="pi pi-list"></i>
                      <span>Installation Logs</span>
                    </a>
                  </li>
                }
              </ul>
            }
          </li>

          <!-- Integrations -->
          <li class="menu-group">
            <button class="menu-group-header" [class.group-active]="isGroupActive('integrations')" (click)="toggleGroup('integrations')">
              <i class="pi pi-link"></i>
              <span>Integrations</span>
              <i class="pi pi-chevron-right group-arrow" [class.open]="integrationsOpen()"></i>
            </button>
            @if (integrationsOpen()) {
              <ul class="submenu">
                <li>
                  <a
                    routerLink="/integrations"
                    routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }"
                    class="submenu-item"
                    (click)="onMenuItemClick()"
                  >
                    <i class="pi pi-link"></i>
                    <span>Integrations List</span>
                  </a>
                </li>
                <li>
                  <a routerLink="/integration-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                    <i class="pi pi-list"></i>
                    <span>Integration Logs</span>
                  </a>
                </li>
              </ul>
            }
          </li>

          <!-- Orders -->
          <li class="menu-group">
            <button class="menu-group-header" [class.group-active]="isGroupActive('orders')" (click)="toggleGroup('orders')">
              <i class="pi pi-inbox"></i>
              <span>Orders</span>
              <i class="pi pi-chevron-right group-arrow" [class.open]="ordersOpen()"></i>
            </button>
            @if (ordersOpen()) {
              <ul class="submenu">
                <li>
                  <a routerLink="/order-queue" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                    <i class="pi pi-inbox"></i>
                    <span>Order Queue</span>
                  </a>
                </li>
                <li>
                  <a routerLink="/orders-fetch-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                    <i class="pi pi-list"></i>
                    <span>Orders Fetch Logs</span>
                  </a>
                </li>
                <li>
                  <a routerLink="/orders-send-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                    <i class="pi pi-list"></i>
                    <span>Orders Send Logs</span>
                  </a>
                </li>
                <li>
                  <a routerLink="/orders-send-api-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                    <i class="pi pi-list"></i>
                    <span>Orders Send API Logs</span>
                  </a>
                </li>
              </ul>
            }
          </li>

          <!-- Users (admin only) -->
          @if (authService.isAdmin()) {
            <li class="menu-group">
              <button class="menu-group-header" [class.group-active]="isGroupActive('users')" (click)="toggleGroup('users')">
                <i class="pi pi-users"></i>
                <span>Users</span>
                <i class="pi pi-chevron-right group-arrow" [class.open]="usersOpen()"></i>
              </button>
              @if (usersOpen()) {
                <ul class="submenu">
                  <li>
                    <a
                      routerLink="/users"
                      routerLinkActive="active"
                      [routerLinkActiveOptions]="{ exact: true }"
                      class="submenu-item"
                      (click)="onMenuItemClick()"
                    >
                      <i class="pi pi-users"></i>
                      <span>Users List</span>
                    </a>
                  </li>
                  <!-- <li>
                    <a routerLink="/user-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                      <i class="pi pi-list"></i>
                      <span>User Logs</span>
                    </a>
                  </li> -->
                  <li>
                    <a routerLink="/email-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                      <i class="pi pi-envelope"></i>
                      <span>Email Logs</span>
                    </a>
                  </li>
                </ul>
              }
            </li>
          }

          <!-- Webhooks -->
          <li class="menu-group">
            <button class="menu-group-header" [class.group-active]="isGroupActive('webhooks')" (click)="toggleGroup('webhooks')">
              <i class="pi pi-bolt"></i>
              <span>Webhooks</span>
              <i class="pi pi-chevron-right group-arrow" [class.open]="webhooksOpen()"></i>
            </button>
            @if (webhooksOpen()) {
              <ul class="submenu">
                <li>
                  <a
                    routerLink="/webhook-subscriptions"
                    routerLinkActive="active"
                    [routerLinkActiveOptions]="{ exact: true }"
                    class="submenu-item"
                    (click)="onMenuItemClick()"
                  >
                    <i class="pi pi-bolt"></i>
                    <span>Webhook Subscriptions</span>
                  </a>
                </li>
                @if (authService.isAdmin()) {
                  <li>
                    <a
                      routerLink="/webhook-subscription-audit-logs"
                      routerLinkActive="active"
                      class="submenu-item"
                      (click)="onMenuItemClick()"
                    >
                      <i class="pi pi-list"></i>
                      <span>Subscription Logs</span>
                    </a>
                  </li>
                }
                @if (authService.isAdmin()) {
                  <li>
                    <a routerLink="/webhook-events" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                      <i class="pi pi-shield"></i>
                      <span>Webhook Events</span>
                    </a>
                  </li>
                }
                @if (authService.isAdmin()) {
                  <li>
                    <a routerLink="/webhook-event-audit-logs" routerLinkActive="active" class="submenu-item" (click)="onMenuItemClick()">
                      <i class="pi pi-list"></i>
                      <span>Event Logs</span>
                    </a>
                  </li>
                }
              </ul>
            }
          </li>

          <!-- Postal Services (standalone) -->
          <li>
            <a routerLink="/postal-services" routerLinkActive="active" class="menu-item" (click)="onMenuItemClick()">
              <i class="pi pi-send"></i>
              <span>Postal Services</span>
            </a>
          </li>

          <!-- Hangfire (admin standalone) -->
          @if (authService.isAdmin()) {
            <li>
              <a routerLink="/hangfire" routerLinkActive="active" class="menu-item" (click)="onMenuItemClick()">
                <i class="pi pi-clock"></i>
                <span>Hangfire</span>
              </a>
            </li>
          }
        </ul>
      </nav>
    </div>
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 60px;
        left: 0;
        width: 250px;
        height: calc(100vh - 60px);
        display: block;
        transition: transform 0.3s ease;
        z-index: 999;
      }

      :host.sidebar-hidden {
        transform: translateX(-100%);
      }

      .sidebar {
        height: 100%;
        background: var(--p-content-background);
        border-right: 1px solid var(--p-content-border-color);
        overflow-y: auto;
        transition:
          background-color 0.3s,
          border-color 0.3s;
      }

      .sidebar-nav {
        padding: 1rem 0;
      }

      .menu-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .menu-list > li {
        margin: 0.1rem 0;
      }

      /* ── Standalone menu item ── */
      .menu-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        color: var(--p-text-color);
        text-decoration: none;
        transition: all 0.2s;
        font-size: 0.95rem;
        width: 100%;
        box-sizing: border-box;
      }

      .menu-item:hover {
        background: var(--p-highlight-background);
        color: var(--p-highlight-text-color);
      }

      .menu-item.active {
        background: var(--p-primary-color);
        color: var(--p-primary-contrast-color);
      }

      .menu-item i {
        font-size: 1.1rem;
        flex-shrink: 0;
      }

      /* ── Group header (button) ── */
      .menu-group-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        width: 100%;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--p-text-color);
        font-size: 0.95rem;
        text-align: left;
        transition: all 0.2s;
        box-sizing: border-box;
      }

      .menu-group-header:hover {
        background: var(--p-highlight-background);
        color: var(--p-highlight-text-color);
      }

      .menu-group-header.group-active {
        color: var(--p-primary-color);
        font-weight: 600;
      }

      .menu-group-header i:first-child {
        font-size: 1.1rem;
        flex-shrink: 0;
      }

      .menu-group-header span {
        flex: 1;
      }

      /* ── Expand arrow ── */
      .group-arrow {
        font-size: 0.75rem !important;
        transition: transform 0.2s ease;
        flex-shrink: 0;
        opacity: 0.6;
      }

      .group-arrow.open {
        transform: rotate(90deg);
      }

      /* ── Submenu ── */
      .submenu {
        list-style: none;
        margin: 0;
        padding: 0;
        border-left: 2px solid var(--p-primary-color);
        margin-left: 1.5rem;
        margin-bottom: 0.25rem;
      }

      .submenu li {
        margin: 0;
      }

      .submenu-item {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.55rem 1rem;
        color: var(--p-text-secondary-color);
        text-decoration: none;
        font-size: 0.875rem;
        transition: all 0.2s;
        width: 100%;
        box-sizing: border-box;
      }

      .submenu-item:hover {
        background: var(--p-highlight-background);
        color: var(--p-highlight-text-color);
      }

      .submenu-item.active {
        background: var(--p-primary-color);
        color: var(--p-primary-contrast-color);
        border-radius: 0 6px 6px 0;
      }

      .submenu-item i {
        font-size: 0.9rem;
        flex-shrink: 0;
      }

      @media (max-width: 991px) {
        :host {
          transform: translateX(-100%);
        }

        :host.mobile-active {
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class SidebarComponent {
  themeService = inject(ThemeService);
  authService = inject(AuthService);
  private readonly router = inject(Router);

  // Per-group open state
  installationsOpen = signal(false);
  integrationsOpen = signal(false);
  ordersOpen = signal(false);
  usersOpen = signal(false);
  webhooksOpen = signal(false);

  private readonly groupSignals: Record<GroupKey, ReturnType<typeof signal<boolean>>> = {
    installations: this.installationsOpen,
    integrations: this.integrationsOpen,
    orders: this.ordersOpen,
    users: this.usersOpen,
    webhooks: this.webhooksOpen,
  };

  constructor() {
    // Auto-expand the correct group on init and on each navigation
    this.autoExpand(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.autoExpand(event.urlAfterRedirects));
  }

  private autoExpand(url: string): void {
    for (const key of Object.keys(GROUP_ROUTES) as Array<keyof typeof GROUP_ROUTES>) {
      if (GROUP_ROUTES[key].some((p) => url.startsWith(p))) {
        this.groupSignals[key].set(true);
      }
    }
  }

  toggleGroup(group: GroupKey): void {
    this.groupSignals[group].update((v) => !v);
  }

  isGroupActive(group: GroupKey): boolean {
    return GROUP_ROUTES[group].some((p) => this.router.url.startsWith(p));
  }

  onMenuItemClick(): void {
    if (globalThis.innerWidth <= 991) {
      this.themeService.toggleSidebar();
    }
  }
}
