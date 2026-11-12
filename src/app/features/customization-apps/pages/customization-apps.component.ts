import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { CUSTOMIZATION_ABOUT, CUSTOMIZATION_FAQS, CUSTOMIZATION_INTRO, CUSTOMIZATION_POINTS } from '../data/customization-apps.data';

/** Public Customization Apps page, shown at /linnworks/customization-apps. */
@Component({
  selector: 'app-customization-apps',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './customization-apps.component.html',
  styleUrl: './customization-apps.component.scss',
})
export class CustomizationAppsComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = CUSTOMIZATION_INTRO;
  readonly about = CUSTOMIZATION_ABOUT;
  readonly points = CUSTOMIZATION_POINTS;
  readonly faqs = CUSTOMIZATION_FAQS;

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
