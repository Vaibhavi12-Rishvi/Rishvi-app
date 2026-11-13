import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  UAE_CERTS,
  UAE_FAQ_HEAD,
  UAE_FAQS,
  UAE_FLOW,
  UAE_IMAGES,
  UAE_INTRO,
  UAE_LINK,
  UAE_NEWS,
  UAE_RISK,
  UAE_SERVICES,
  UAE_TIMELINE,
  UAE_WHY,
} from '../data/uae-einvoicing.data';

/** Public UAE E-Invoicing page, shown at /uae-e-invoicing. */
@Component({
  selector: 'app-uae-einvoicing',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './uae-einvoicing.component.html',
  styleUrl: './uae-einvoicing.component.scss',
})
export class UaeEinvoicingComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly images = UAE_IMAGES;
  readonly link = UAE_LINK;
  readonly intro = UAE_INTRO;
  readonly timeline = UAE_TIMELINE;
  readonly risk = UAE_RISK;
  readonly services = UAE_SERVICES;
  readonly flow = UAE_FLOW;
  readonly why = UAE_WHY;
  readonly certs = UAE_CERTS;
  readonly faqHead = UAE_FAQ_HEAD;
  readonly faqs = UAE_FAQS;
  readonly news = UAE_NEWS;

  /** Timeline phase shown in the detail card. */
  readonly phase = signal(0);
  /** Open FAQ (one at a time). */
  readonly openFaq = signal<number | null>(0);

  constructor() {
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  toggleFaq(i: number): void {
    this.openFaq.update((c) => (c === i ? null : i));
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
