import { Component, OnDestroy, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { PLAN_FEATURES, PLANS_HEAD, SUPPORT_FAQS, SUPPORT_INTRO, SUPPORT_PLANS } from '../data/technical-support.data';

/** Linnworks Technical Support page, shown at /linnworks-technical-support. */
@Component({
  selector: 'app-technical-support',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './technical-support.component.html',
  styleUrl: './technical-support.component.scss',
})
export class TechnicalSupportComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = SUPPORT_INTRO;
  readonly plansHead = PLANS_HEAD;
  readonly plans = SUPPORT_PLANS;
  readonly features = PLAN_FEATURES;
  readonly faqs = SUPPORT_FAQS;
  readonly crumbs: BannerCrumb[] = [];

  readonly openIndex = signal<number | null>(0);

  constructor() {
    inject(Title).setTitle('Linnworks Technical Support | Rishvi Ltd');
    inject(Meta).updateTag({
      name: 'description',
      content: 'Monthly and hourly Linnworks technical support plans from Linnworks Certified Partner Rishvi Ltd.',
    });
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
