import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { ACHIEVEMENTS, EXPERIENCE_STATS, INTRO_TEXT, LINNWORKS_FAQS, LINNWORKS_SERVICES } from '../data/linnworks.data';

/** Public Linnworks page, shown at /linnworks. */
@Component({
  selector: 'app-linnworks',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './linnworks.component.html',
  styleUrl: './linnworks.component.scss',
})
export class LinnworksComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = INTRO_TEXT;
  readonly services = LINNWORKS_SERVICES;
  readonly stats = EXPERIENCE_STATS;
  readonly achievements = ACHIEVEMENTS;
  readonly faqs = LINNWORKS_FAQS;

  /** Index of the open FAQ answer (one at a time). */
  readonly openIndex = signal<number | null>(0);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
