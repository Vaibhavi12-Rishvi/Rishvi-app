import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  MAGENTO_BENEFITS,
  MAGENTO_BENEFITS_HEAD,
  MAGENTO_INTRO,
  MAGENTO_REASONS,
  MAGENTO_TRUST,
} from '../data/magento-services.data';

/** Public Magento Services page, shown at /magento-services. */
@Component({
  selector: 'app-magento-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './magento-services.component.html',
  styleUrl: './magento-services.component.scss',
})
export class MagentoServicesComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = MAGENTO_INTRO;
  readonly trust = MAGENTO_TRUST;
  readonly reasons = MAGENTO_REASONS;
  readonly benefitsHead = MAGENTO_BENEFITS_HEAD;
  readonly benefits = MAGENTO_BENEFITS;
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
