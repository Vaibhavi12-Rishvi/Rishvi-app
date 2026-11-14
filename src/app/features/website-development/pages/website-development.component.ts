import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { TestimonialsComponent } from '../../../shared/components/testimonials/testimonials.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  WEB_EMAIL,
  WEB_IMAGE,
  WEB_INTRO,
  WEB_SERVICES,
  WEB_SERVICES_HEAD,
  WEB_TESTIMONIALS_HEAD,
} from '../data/website-development.data';

/** Public Website Development page, shown at /website-development. */
@Component({
  selector: 'app-website-development',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, TestimonialsComponent, RevealDirective],
  templateUrl: './website-development.component.html',
  styleUrl: './website-development.component.scss',
})
export class WebsiteDevelopmentComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly image = WEB_IMAGE;
  readonly intro = WEB_INTRO;
  readonly servicesHead = WEB_SERVICES_HEAD;
  readonly services = WEB_SERVICES;
  readonly testiHead = WEB_TESTIMONIALS_HEAD;

  /** Index of the service shown in the showcase panel. */
  readonly active = signal(0);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  select(i: number): void {
    this.active.set(i);
  }

  /** Opens the visitor's email app with the chosen service in the subject. */
  enquiry(title: string): string {
    return `mailto:${WEB_EMAIL}?subject=${encodeURIComponent('Website development enquiry: ' + title)}`;
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
