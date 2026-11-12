import { Component, ElementRef, HostListener, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { HeroStyle, PRIMARY_OPTIONS, SURFACE_OPTIONS, SurfaceName, ThemeColor, ThemeService } from '../../../../core/services/theme.service';
import { NavItem } from '../../../../models/home.model';
import { NAV_ITEMS } from '../../data/home.data';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [RouterLink, DrawerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly navItems: NavItem[] = NAV_ITEMS;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly theme = inject(ThemeService);
  private readonly router = inject(Router);

  /** Key of the desktop dropdown currently open. */
  readonly openKey = signal<string | null>(null);
  /** Key of the top-level section the visitor last navigated to. */
  readonly activeKey = signal<string | null>(null);
  readonly scrolled = signal(false);
  readonly drawerVisible = signal(false);
  readonly mobileOpenKey = signal<string | null>(null);
  readonly isDark = computed(() => this.theme.isDarkMode());

  openSubKey = signal<string | null>(null);

  constructor() {
    // Each page renders its own header, so the active section can be read from the current URL once.
    if (this.router.url.startsWith('/services')) {
      this.activeKey.set('services');
    } else if (this.router.url.startsWith('/about-us')) {
      this.activeKey.set('about');
    }
  }

  /** Clicking the logo while already on the homepage scrolls back to the top. */
  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  readonly paletteOpen = signal(false);
  readonly primaryOptions = PRIMARY_OPTIONS;
  readonly surfaceOptions = SURFACE_OPTIONS;

  togglePalette(): void {
    this.paletteOpen.update((v) => !v);
    this.openKey.set(null);
  }

  toggleSubmenu(id: string, event: MouseEvent): void {
    event.stopPropagation();
    this.openSubKey.update((current) => (current === id ? null : id));
  }

  setPrimary(key: ThemeColor): void {
    this.theme.changePrimaryColor(key);
  }

  setSurface(key: SurfaceName): void {
    this.theme.changeSurface(key);
  }

  setHeroStyle(style: HeroStyle): void {
    this.theme.setHeroStyle(style);
  }

  setScheme(dark: boolean): void {
    this.theme.setDarkMode(dark);
  }

  /** Light/dark halves shown on a surface swatch. */
  surfaceSwatch(scale: Record<string, string> | null, hex: string): string {
    const light = scale ? scale[50] : '#f8fafc';
    const dark = scale ? scale[800] : '#1e293b';
    return `linear-gradient(135deg, ${light} 50%, ${dark} 50%)`;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.openKey.set(null);
      this.openSubKey.set(null);
      this.paletteOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.openKey.set(null);
    this.openSubKey.set(null);
    this.paletteOpen.set(false);
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
    this.openSubKey.set(null);
  }

  toggle(key: string): void {
    this.openSubKey.set(null);
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
    this.openSubKey.set(null);
    this.drawerVisible.set(false);
  }

  toggleMobile(key: string): void {
    this.mobileOpenKey.update((current) => (current === key ? null : key));
  }

}
