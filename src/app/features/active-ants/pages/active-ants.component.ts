import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  ANTS_BENEFITS,
  ANTS_BENEFITS_INTRO,
  ANTS_FEATURES,
  ANTS_FEATURES_INTRO,
  ANTS_INTRO,
  ANTS_ORDER_SYNC,
} from '../data/active-ants.data';

/** Public Active Ants Fulfilment page, shown at /linnworks/active-ants-fulfilment. */
@Component({
  selector: 'app-active-ants',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './active-ants.component.html',
  styleUrl: './active-ants.component.scss',
})
export class ActiveAntsComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = ANTS_INTRO;
  readonly featuresIntro = ANTS_FEATURES_INTRO;
  readonly orderSync = ANTS_ORDER_SYNC;
  readonly features = ANTS_FEATURES;
  readonly benefitsIntro = ANTS_BENEFITS_INTRO;
  readonly benefits = ANTS_BENEFITS;

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
