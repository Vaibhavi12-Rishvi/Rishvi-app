import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../../core/services/theme.service';
import { HeroSystem, OrbitChip } from '../../../../models/home.model';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  @ViewChild('grid', { static: true }) private gridRef!: ElementRef<HTMLElement>;
  private timer?: ReturnType<typeof setInterval>;

  readonly theme = inject(ThemeService);

  /** Systems orbiting the logo. Ring 1 is the inner ring, ring 2 the outer one. */
  readonly chips: OrbitChip[] = [
    { label: 'Linnworks', color: '#118cff', ring: 1, reverse: false, left: '50%', top: '0' },
    { label: 'Odoo ERP', color: '#7d5bff', ring: 1, reverse: true, left: '50%', top: '100%' },
    { label: 'Shopify', color: '#95bf47', ring: 2, reverse: false, left: '50%', top: '0' },
    { label: 'Custom APIs', color: '#e42bfd', ring: 2, reverse: false, left: '50%', top: '100%' },
    { label: 'Couriers', color: '#f59e0b', ring: 2, reverse: true, left: '0', top: '50%' },
    { label: 'E-Invoicing', color: '#14b8a6', ring: 2, reverse: true, left: '100%', top: '50%' },
  ];

  readonly trustItems = ['Linnworks Certified Partner', 'Odoo Partner', 'UK-based team'];

  readonly systems: HeroSystem[] = [
    { name: 'Linnworks', status: 'Synced', busy: false },
    { name: 'Shopify', status: 'Synced', busy: false },
    { name: 'Odoo ERP', status: 'Syncing', busy: true },
    { name: 'Courier API', status: 'Synced', busy: false },
  ];

  ngAfterViewInit(): void {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    // Lit squares on the background grid. Runs outside Angular so it never triggers change detection.
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 5; i++) this.spawnCell();
      this.timer = setInterval(() => this.spawnCell(), 520);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private spawnCell(): void {
    if (document.hidden) return;
    const grid = this.gridRef.nativeElement;
    const size = 64;
    const w = grid.clientWidth;
    const h = grid.clientHeight;
    // The grid tile is centred horizontally (background-position: center top), so lines start at this offset.
    const origin = ((((w - size) / 2) % size) + size) % size;
    const cols = Math.floor((w - origin) / size);
    const rows = Math.min(Math.floor(h / size), 9);
    if (cols < 2 || rows < 2) return;

    const cell = document.createElement('div');
    cell.className = 'rv-cell';
    cell.style.left = `${Math.floor(Math.random() * cols) * size + origin}px`;
    cell.style.top = `${Math.floor(Math.random() * rows) * size}px`;
    cell.addEventListener('animationend', () => cell.remove());
    grid.appendChild(cell);
    if (grid.children.length > 14) grid.firstElementChild?.remove();
  }
}
