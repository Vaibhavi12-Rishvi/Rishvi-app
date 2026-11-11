import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ThemeService } from '../core/services/theme.service';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, SidebarComponent, TopbarComponent],
    template: `
    <div class="layout-wrapper">
      <app-topbar></app-topbar>
      <app-sidebar></app-sidebar>
      <div class="layout-main-container" [class.sidebar-collapsed]="!themeService.sidebarVisible()">
        <div class="layout-main">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .layout-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: var(--p-surface-ground);
      transition: background-color 0.3s;
    }

    .layout-main-container {
      flex: 1;
      margin-left: 250px;
      margin-top: 60px;
      transition: margin-left 0.3s ease;
    }

    .layout-main-container.sidebar-collapsed {
      margin-left: 0;
    }

    .layout-main {
      padding: 2rem;
      background: var(--p-surface-ground);
      transition: background-color 0.3s;
    }

    @media (max-width: 991px) {
      .layout-main-container {
        margin-left: 0;
      }
    }
  `]
})
export class LayoutComponent {
  themeService = inject(ThemeService);
}
