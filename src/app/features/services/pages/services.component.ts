import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { TestimonialsComponent } from '../../../shared/components/testimonials/testimonials.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { SERVICE_ITEMS } from '../../home/data/home.data';
import { FEATURED_HEAD, FEATURED_MAIN, FEATURED_SERVICES, SERVICES_EMAIL, TESTIMONIALS_HEAD, TRIAL } from '../data/services.data';

/** Public services page, shown at /services. Shares the header, footer and tokens with the homepage. */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TestimonialsComponent, PageBannerComponent, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly head = FEATURED_HEAD;
  readonly main = FEATURED_MAIN;
  readonly cards = FEATURED_SERVICES;
  readonly trial = TRIAL;
  readonly testiHead = TESTIMONIALS_HEAD;
  readonly trialLink = `mailto:${SERVICES_EMAIL}?subject=${encodeURIComponent('14-day free trial')}`;

  /** Ids the header menu links to (e.g. /services#linnworks); kept so those links still land on this page. */
  readonly anchors = SERVICE_ITEMS.map((s) => s.id);

  constructor() {
    // Same behaviour as the homepage: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
