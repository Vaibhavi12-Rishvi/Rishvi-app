import { Component, ElementRef, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ThemeService } from '../../../../core/services/theme.service';

export interface NavChild {
  label: string;
  slug: string;
}

export interface NavItem {
  key: string;
  label: string;
  slug?: string;
  children?: NavChild[];
}

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [RouterLink, DrawerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly theme = inject(ThemeService);

  readonly navItems: NavItem[] = [
    {
      key: 'about',
      label: 'About Us',
      children: [
        { label: 'Company Overview', slug: 'company-overview' },
        { label: 'Our Team', slug: 'our-team' },
        { label: 'Why Choose Us', slug: 'why-choose-us' },
      ],
    },
    {
      key: 'linnworks',
      label: 'Linnworks',
      children: [
        { label: 'Linnworks Integration', slug: 'linnworks-integration' },
        { label: 'Custom Development', slug: 'linnworks-custom-development' },
        { label: 'Linnworks Support', slug: 'linnworks-support' },
      ],
    },
    {
      key: 'web',
      label: 'Website Development',
      children: [
        { label: 'Angular Development', slug: 'angular-development' },
        { label: 'React Development', slug: 'react-development' },
        { label: 'Custom Web Applications', slug: 'custom-web-applications' },
        { label: 'E-commerce Development', slug: 'ecommerce-development' },
      ],
    },
    {
      key: 'services',
      label: 'Services',
      children: [
        { label: 'Software Development', slug: 'software-development' },
        { label: 'API Integration', slug: 'api-integration' },
        { label: 'ERP Solutions', slug: 'erp-solutions' },
        { label: 'Digital Transformation', slug: 'digital-transformation' },
      ],
    },
    { key: 'odoo', label: 'Odoo Partner', slug: 'odoo-partner' },
    { key: 'contact', label: 'Contact Us', slug: 'contact' },
    {
      key: 'einvoicing',
      label: 'E-Invoicing',
      children: [
        { label: 'UAE E-Invoicing', slug: 'uae-e-invoicing' },
        { label: 'UK E-Invoicing', slug: 'uk-e-invoicing' },
      ],
    },
  ];

  /** Key of the desktop dropdown currently open. */
  readonly openKey = signal<string | null>(null);
  /** Key of the top-level section the visitor last navigated to. */
  readonly activeKey = signal<string | null>(null);
  readonly scrolled = signal(false);
  readonly drawerVisible = signal(false);
  readonly mobileOpenKey = signal<string | null>(null);
  readonly isDark = computed(() => this.theme.isDarkMode());

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.openKey.set(null);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.openKey.set(null);
  }

  hoverOpen(key: string, event: MouseEvent): void {
    // Hover only for real pointers; touch devices use click.
    const type = (event as PointerEvent).pointerType;
    if (!type || type === 'mouse') {
      this.openKey.set(key);
    }
  }

  hoverClose(): void {
    this.openKey.set(null);
  }

  toggle(key: string): void {
    this.openKey.update((current) => (current === key ? null : key));
  }

  onFocusOut(event: FocusEvent, li: HTMLElement): void {
    const next = event.relatedTarget as Node | null;
    if (next && !li.contains(next)) {
      this.openKey.set(null);
    }
  }

  onTriggerKeydown(event: KeyboardEvent, key: string, li: HTMLElement): void {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.openKey.set(key);
      setTimeout(() => li.querySelector<HTMLElement>('[role="menuitem"]')?.focus());
    }
  }

  onMenuKeydown(event: KeyboardEvent, li: HTMLElement): void {
    const items = Array.from(li.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    const index = items.indexOf(document.activeElement as HTMLElement);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      items[(index + 1) % items.length]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      items[(index - 1 + items.length) % items.length]?.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.openKey.set(null);
      li.querySelector<HTMLElement>('.rv-nav__trigger')?.focus();
    }
  }

  select(key: string): void {
    this.activeKey.set(key);
    this.openKey.set(null);
    this.drawerVisible.set(false);
  }

  toggleMobile(key: string): void {
    this.mobileOpenKey.update((current) => (current === key ? null : key));
  }

  toggleTheme(): void {
    this.theme.toggleDarkMode();
  }
}
