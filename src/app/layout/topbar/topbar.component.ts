import { Component, computed, inject, input, ViewChild } from '@angular/core';
import { UserRole } from '../../models/auth.model';
import { ButtonModule } from 'primeng/button';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ThemeService, ThemeColor } from '../../core/services/theme.service';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [ButtonModule, MenuModule, CommonModule],
  template: `
    <div class="topbar">
      <div class="topbar-left">
        @if (showMenuButton()) {
          <button pButton icon="pi pi-bars" class="p-button-text p-button-rounded" (click)="toggleSidebar()"></button>
        }
        <span class="topbar-title">Shopify Stream Integration</span>
      </div>

      <div class="topbar-right">
        <!-- Color Theme Selector -->
        <div class="theme-colors">
          @for (color of colors; track color) {
            <button
              [class]="'theme-color-btn color-' + color"
              [class.active]="themeService.primaryColor() === color"
              (click)="changeColor(color)"
              [title]="color"
            ></button>
          }
        </div>

        <button
          pButton
          icon="pi pi-palette"
          class="p-button-text p-button-rounded theme-menu-button"
          (click)="toggleThemeMenu($event)"
        ></button>

        <p-menu #themeMenu [popup]="true" [model]="themeMenuItems"></p-menu>

        <!-- Dark Mode Toggle -->
        <button
          pButton
          [icon]="themeService.isDarkMode() ? 'pi pi-sun' : 'pi pi-moon'"
          class="p-button-text p-button-rounded"
          (click)="toggleDarkMode()"
        ></button>

        @if (authService.isAuthenticated()) {
          <!-- User Menu -->
          <div class="user-menu">
            <button
              pButton
              [label]="getUserDisplayLabel()"
              icon="pi pi-user"
              class="p-button-text p-button-rounded user-menu-button"
              (click)="toggleUserMenu($event)"
            ></button>

            <p-menu #userMenu [popup]="true" [model]="userMenuItems()" [appendTo]="'body'"></p-menu>
          </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .topbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: var(--p-content-background);
        border-bottom: 1px solid var(--p-content-border-color);
        transition:
          background-color 0.3s,
          border-color 0.3s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .topbar-left {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .topbar-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--p-text-color);
      }

      .topbar-right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .theme-colors {
        display: flex;
        gap: 0.5rem;
        padding: 0 0.5rem;
        border-right: 1px solid var(--p-surface-200);
        margin-right: 0.5rem;
      }

      .theme-color-btn {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.2s;
      }

      .theme-color-btn:hover {
        transform: scale(1.1);
      }

      .theme-color-btn.active {
        border-color: var(--p-text-color);
        box-shadow: 0 0 0 2px var(--p-surface-0);
      }

      .theme-menu-button {
        display: none;
      }

      .user-menu {
        position: relative;
      }

      .user-menu-button {
        max-width: 200px;
      }

      .user-menu-button .p-button-label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host ::ng-deep .user-menu .p-menu {
        min-width: 250px;
        z-index: 1001;
      }

      :host ::ng-deep .user-menu .p-menu .p-menuitem-link {
        font-size: 0.875rem;
        padding: 0.75rem 1rem;
      }

      :host ::ng-deep .p-menu.p-menu-overlay {
        z-index: 1001 !important;
      }

      .color-blue {
        background-color: #3b82f6;
      }
      .color-green {
        background-color: #10b981;
      }
      .color-purple {
        background-color: #8b5cf6;
      }
      .color-orange {
        background-color: #f59e0b;
      }
      .color-cyan {
        background-color: #06b6d4;
      }
      .color-pink {
        background-color: #ec4899;
      }

      @media (max-width: 768px) {
        .theme-colors {
          display: none;
        }

        .theme-menu-button {
          display: inline-flex;
        }

        .topbar-right {
          gap: 0.25rem;
        }

        .user-menu-button {
          max-width: 150px;
        }
      }

      :host ::ng-deep .user-menu .p-menu {
        min-width: 250px;
        z-index: 1001;
      }

      :host ::ng-deep .user-menu .p-menu .p-menuitem-link {
        font-size: 0.875rem;
        padding: 0.75rem 1rem;
      }

      :host ::ng-deep .p-menu.p-menu-overlay {
        z-index: 1001 !important;
      }

      :host ::ng-deep .user-info-item .p-menuitem-link {
        cursor: default !important;
        opacity: 0.8;
        font-weight: 500;
      }

      :host ::ng-deep .user-info-item .p-menuitem-link:hover {
        background: transparent !important;
      }

      :host ::ng-deep .menu-divider-item .p-menuitem-link {
        border-top: 1px solid var(--p-content-border-color);
        margin-top: 0.25rem;
        padding-top: 0.75rem;
      }

      :host ::ng-deep .logout-item .p-menuitem-link {
        background: var(--p-primary-color) !important;
        color: var(--p-primary-color-text) !important;
        font-weight: 600;
        border-radius: 6px;
        margin: 0.25rem;
        width: calc(100% - 0.5rem);
      }

      :host ::ng-deep .logout-item .p-menuitem-link:hover {
        background: var(--p-primary-600) !important;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        transition: all 0.2s ease;
      }

      :host ::ng-deep .logout-item .p-menuitem-icon {
        color: var(--p-primary-color-text) !important;
      }
    `,
  ],
})
export class TopbarComponent {
  themeService = inject(ThemeService);
  authService = inject(AuthService);
  private readonly router = inject(Router);

  showMenuButton = input(true);

  colors: ThemeColor[] = ['blue', 'green', 'purple', 'orange', 'cyan', 'pink'];

  themeMenuItems: MenuItem[] = this.colors.map((color) => ({
    label: color.charAt(0).toUpperCase() + color.slice(1),
    command: () => this.changeColor(color),
  }));

  userMenuItems = computed<MenuItem[]>(() => {
    const userInfo = this.authService.userInfo();
    if (!userInfo) return [];

    const items: MenuItem[] = [
      {
        label: userInfo.email,
        icon: 'pi pi-envelope',
        disabled: true,
        styleClass: 'user-info-item',
      },
      {
        label: UserRole[userInfo.role],
        icon: userInfo.role === UserRole.Admin ? 'pi pi-shield' : 'pi pi-user',
        disabled: true,
        styleClass: 'user-info-item',
      },
    ];

    if (userInfo.installationEmail) {
      items.push({
        label: userInfo.installationEmail,
        icon: 'pi pi-building',
        disabled: true,
        styleClass: 'user-info-item',
      });
    }

    items.push(
      {
        label: 'Change Password',
        icon: 'pi pi-key',
        styleClass: 'menu-divider-item',
        command: () => this.navigateToChangePassword(),
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        styleClass: 'logout-item',
        command: () => this.logout(),
      },
    );

    return items;
  });

  @ViewChild('themeMenu') themeMenu?: Menu;
  @ViewChild('userMenu') userMenu?: Menu;

  toggleSidebar(): void {
    this.themeService.toggleSidebar();
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  changeColor(color: ThemeColor): void {
    this.themeService.changePrimaryColor(color);
  }

  toggleThemeMenu(event: Event): void {
    this.themeMenu?.toggle(event);
  }

  toggleUserMenu(event: Event): void {
    this.userMenu?.toggle(event);
  }

  getUserDisplayLabel(): string {
    const email = this.authService.userEmail();
    if (!email) return 'User';

    // Show just the name part before @ for better display
    const namePart = email.split('@')[0];
    return namePart.length > 15 ? namePart.substring(0, 15) + '...' : namePart;
  }

  navigateToChangePassword(): void {
    this.router.navigate(['/change-password']);
  }

  logout(): void {
    this.authService.logout();
  }
}
