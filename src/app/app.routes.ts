import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';
import { ARTICLES } from './features/news/data/articles.data';

// One public page per news article, at /<category>/<slug>.
const articleRoutes: Routes = ARTICLES.map((a) => ({
  path: `${a.category}/${a.slug}`,
  data: { slug: a.slug },
  loadComponent: () => import('./features/news/pages/article.component').then((m) => m.ArticleComponent),
}));

export const routes: Routes = [
  // Public marketing homepage (no login required)
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/pages/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./features/about/pages/about.component').then((m) => m.AboutComponent),
  },
  ...articleRoutes,
  {
    path: 'unauthorized',
    loadComponent: () => import('./features/auth/pages/unauthorized.component').then((m) => m.UnauthorizedComponent),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./features/auth/pages/not-found.component').then((m) => m.NotFoundComponent),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/pages/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'installations',
        loadComponent: () => import('./features/installations/pages/installation-list.component').then((m) => m.InstallationListComponent),
      },
      {
        path: 'integrations/add',
        loadComponent: () => import('./features/integrations/pages/integration-add.component').then((m) => m.IntegrationAddComponent),
      },
      {
        path: 'integrations',
        loadComponent: () => import('./features/integrations/pages/integration-list.component').then((m) => m.IntegrationListComponent),
      },
      {
        path: 'postal-services',
        loadComponent: () =>
          import('./features/postal-services/pages/postal-service-list.component').then((m) => m.PostalServiceListComponent),
      },
      {
        path: 'postal-services/add',
        loadComponent: () =>
          import('./features/postal-services/pages/postal-service-add.component').then((m) => m.PostalServiceAddComponent),
      },
      {
        path: 'identifiers',
        loadComponent: () => import('./features/identifiers/pages/identifier-list.component').then((m) => m.IdentifierListComponent),
      },
      {
        path: 'installation-audit-logs',
        loadComponent: () =>
          import('./features/audit-logs/pages/installation-audit-log.component').then((m) => m.InstallationAuditLogComponent),
      },
      {
        path: 'integration-audit-logs',
        loadComponent: () =>
          import('./features/audit-logs/pages/integration-audit-log.component').then((m) => m.IntegrationAuditLogComponent),
      },
      {
        path: 'master-data-sync-audit-logs',
        loadComponent: () =>
          import('./features/audit-logs/pages/master-data-sync-audit-log.component').then((m) => m.MasterDataSyncAuditLogComponent),
      },
      {
        path: 'orders-fetch-audit-logs',
        loadComponent: () =>
          import('./features/audit-logs/pages/orders-fetch-audit-log.component').then((m) => m.OrdersFetchAuditLogComponent),
      },
      {
        path: 'orders-send-audit-logs',
        loadComponent: () =>
          import('./features/audit-logs/pages/orders-send-audit-log.component').then((m) => m.OrdersSendAuditLogComponent),
      },
      {
        path: 'orders-send-api-audit-logs',
        loadComponent: () =>
          import('./features/audit-logs/pages/orders-send-api-audit-log.component').then((m) => m.OrdersSendApiAuditLogComponent),
      },
      {
        path: 'webhook-subscriptions',
        loadComponent: () =>
          import('./features/webhooks/pages/webhook-subscription-list.component').then((m) => m.WebhookSubscriptionListComponent),
      },
      {
        path: 'change-password',
        loadComponent: () => import('./features/auth/pages/change-password.component').then((m) => m.ChangePasswordComponent),
      },
      {
        path: 'webhook-subscription-audit-logs',
        loadComponent: () =>
          import('./features/webhooks/pages/webhook-subscription-audit-log.component').then((m) => m.WebhookSubscriptionAuditLogComponent),
      },
      {
        path: 'webhook-events',
        loadComponent: () => import('./features/webhooks/pages/webhook-event-list.component').then((m) => m.WebhookEventListComponent),
      },
      {
        path: 'webhook-event-audit-logs',
        loadComponent: () =>
          import('./features/webhooks/pages/webhook-event-audit-log.component').then((m) => m.WebhookEventAuditLogComponent),
      },
      {
        path: 'order-queue',
        loadComponent: () => import('./features/order-queue/pages/order-queue.component').then((m) => m.OrderQueueComponent),
      },
      {
        path: 'hangfire',
        loadComponent: () => import('./features/hangfire/pages/hangfire.component').then((m) => m.HangfireComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./features/users/pages/user-list.component').then((m) => m.UserListComponent),
      },
      {
        path: 'user-audit-logs',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/audit-logs/pages/user-audit-log.component').then((m) => m.UserAuditLogComponent),
      },
      {
        path: 'email-audit-logs',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/audit-logs/pages/email-audit-log.component').then((m) => m.EmailAuditLogComponent),
      },
      {
        path: 'label-audit-logs',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/audit-logs/pages/label-audit-log.component').then((m) => m.LabelAuditLogComponent),
      },
      {
        path: 'users/create',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/users/pages/user-create.component').then((m) => m.UserCreateComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
