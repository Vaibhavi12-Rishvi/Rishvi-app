import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { DHL_INTRO, DHL_LEAD, DHL_STEPS } from '../data/dhl-de-integration.data';

/** Public DHL DE Integration page, shown at /linnworks/dhl-de-integration. */
@Component({
  selector: 'app-dhl-de-integration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './dhl-de-integration.component.html',
  styleUrl: './dhl-de-integration.component.scss',
})
export class DhlDeIntegrationComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = DHL_INTRO;
  readonly lead = DHL_LEAD;
  readonly steps = DHL_STEPS;
  readonly crumbs: BannerCrumb[] = [{ label: 'Linnworks', route: '/linnworks' }];

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
