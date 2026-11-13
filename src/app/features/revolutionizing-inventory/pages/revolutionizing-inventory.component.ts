import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  BENEFITS,
  EFFICIENT,
  EFFICIENT_POINTS,
  PROMISES,
  REVO_CHANNELS,
  REVO_INTRO,
  SLA,
  WHY,
  WHY_STATS,
} from '../data/revolutionizing-inventory.data';

/** Public Revolutionizing Inventory Management page, shown at /linnworks/revolutionizing-inventory-management. */
@Component({
  selector: 'app-revolutionizing-inventory',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './revolutionizing-inventory.component.html',
  styleUrl: './revolutionizing-inventory.component.scss',
})
export class RevolutionizingInventoryComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = REVO_INTRO;
  readonly channels = REVO_CHANNELS;
  readonly efficient = EFFICIENT;
  readonly points = EFFICIENT_POINTS;
  readonly benefits = BENEFITS;
  readonly sla = SLA;
  readonly promises = PROMISES;
  readonly why = WHY;
  readonly stats = WHY_STATS;

  /** The efficiency topic being shown in the detail panel. */
  readonly active = signal(0);
  readonly point = computed(() => this.points[this.active()]);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  select(index: number): void {
    this.active.set(index);
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
