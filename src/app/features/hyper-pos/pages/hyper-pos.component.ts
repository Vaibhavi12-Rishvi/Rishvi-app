import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { POS_BENEFITS, POS_BENEFITS_HEAD, POS_FEATURES, POS_FEATURES_HEAD, POS_INTRO } from '../data/hyper-pos.data';

/** Public Hyper POS for Linnworks page, shown at /linnworks/hyper-pos-for-linnworks. */
@Component({
  selector: 'app-hyper-pos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './hyper-pos.component.html',
  styleUrl: './hyper-pos.component.scss',
})
export class HyperPosComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = POS_INTRO;
  readonly featuresHead = POS_FEATURES_HEAD;
  readonly features = POS_FEATURES;
  readonly benefitsHead = POS_BENEFITS_HEAD;
  readonly benefits = POS_BENEFITS;

  /** Index of the feature shown in the detail panel. */
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

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
