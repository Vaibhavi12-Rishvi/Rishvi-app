import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { SHIPPING_ABOUT, SHIPPING_APPS, SHIPPING_FAQS, SHIPPING_INTRO, SHIPPING_POINTS } from '../data/shipping-integrations.data';

/** Public Shipping Integrations page, shown at /linnworks/shipping-integrations. */
@Component({
  selector: 'app-shipping-integrations',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './shipping-integrations.component.html',
  styleUrl: './shipping-integrations.component.scss',
})
export class ShippingIntegrationsComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = SHIPPING_INTRO;
  readonly apps = SHIPPING_APPS;
  readonly about = SHIPPING_ABOUT;
  readonly faqs = SHIPPING_FAQS;
  readonly points = SHIPPING_POINTS;

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
