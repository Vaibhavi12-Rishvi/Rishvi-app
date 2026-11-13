import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../efficiency-audit/pages/count-up.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  ODOO_FAQS,
  ODOO_FAQ_HEAD,
  ODOO_IMAGE,
  ODOO_INTRO,
  ODOO_NEWS,
  ODOO_NEWS_IMAGES,
  ODOO_SERVICES,
  ODOO_STATS,
  ODOO_VIDEO,
  ODOO_VIDEO_HEAD,
  ODOO_WHY,
} from '../data/odoo-partner.data';

/** Public Odoo Partner page, shown at /odoo-partner. */
@Component({
  selector: 'app-odoo-partner',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, CountUpDirective],
  templateUrl: './odoo-partner.component.html',
  styleUrl: './odoo-partner.component.scss',
})
export class OdooPartnerComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly image = ODOO_IMAGE;
  readonly intro = ODOO_INTRO;
  readonly services = ODOO_SERVICES;
  readonly videoHead = ODOO_VIDEO_HEAD;
  readonly video = ODOO_VIDEO;
  readonly faqHead = ODOO_FAQ_HEAD;
  readonly faqs = ODOO_FAQS;
  readonly stats = ODOO_STATS;
  readonly why = ODOO_WHY;
  readonly news = ODOO_NEWS;
  readonly newsImages = ODOO_NEWS_IMAGES;

  /** The YouTube player is only loaded after the visitor presses play, which keeps the page fast. */
  readonly playing = signal(false);
  readonly videoUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${ODOO_VIDEO.id}?autoplay=1&rel=0`),
  );

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
