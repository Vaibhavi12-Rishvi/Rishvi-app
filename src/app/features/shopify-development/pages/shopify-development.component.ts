import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  SHOPIFY_FEATURES,
  SHOPIFY_INTRO,
  SHOPIFY_PROCESS,
  SHOPIFY_PROCESS_HEAD,
  SHOPIFY_SETUP,
  SHOPIFY_WHY,
} from '../data/shopify-development.data';

/** Public Shopify Development page, shown at /shopify-development. */
@Component({
  selector: 'app-shopify-development',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './shopify-development.component.html',
  styleUrl: './shopify-development.component.scss',
})
export class ShopifyDevelopmentComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = SHOPIFY_INTRO;
  readonly why = SHOPIFY_WHY;
  readonly features = SHOPIFY_FEATURES;
  readonly setup = SHOPIFY_SETUP;
  readonly processHead = SHOPIFY_PROCESS_HEAD;
  readonly process = SHOPIFY_PROCESS;
  readonly crumbs: BannerCrumb[] = [{ label: 'Website Development', route: '/website-development' }];

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
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
