import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { CONTACT_INTRO } from '../../hyperstock/data/hyperstock.data';
import {
  HYPERLOOK_FEATURES,
  HYPERLOOK_FEATURES_INTRO,
  HYPERLOOK_INSTALL_INTRO,
  HYPERLOOK_INTRO,
  HYPERLOOK_STEPS,
  HYPERLOOK_WHY,
} from '../data/hyperlook.data';

/** Public HyperLook page, shown at /linnworks/hyperlook-for-linnworks. */
@Component({
  selector: 'app-hyperlook',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './hyperlook.component.html',
  styleUrl: './hyperlook.component.scss',
})
export class HyperlookComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = HYPERLOOK_INTRO;
  readonly installIntro = HYPERLOOK_INSTALL_INTRO;
  readonly steps = HYPERLOOK_STEPS;
  readonly why = HYPERLOOK_WHY;
  readonly featuresIntro = HYPERLOOK_FEATURES_INTRO;
  readonly features = HYPERLOOK_FEATURES;
  readonly contactIntro = CONTACT_INTRO;

  /** Index of the install step being shown. */
  readonly activeStep = signal(0);
  readonly step = computed(() => this.steps[this.activeStep()]);
  /** 1 when moving forward, -1 when moving back; decides which way the panel slides in. */
  readonly direction = signal(1);
  /** 0 to 1: how far along the stepper line the progress bar is filled. */
  readonly progress = computed(() => (this.steps.length > 1 ? this.activeStep() / (this.steps.length - 1) : 0));

  /** Index of the feature shown on the big phone. */
  readonly activeFeature = signal(0);
  readonly feature = computed(() => this.features[this.activeFeature()]);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  selectStep(index: number): void {
    const next = Math.min(Math.max(index, 0), this.steps.length - 1);
    this.direction.set(next >= this.activeStep() ? 1 : -1);
    this.activeStep.set(next);
  }

  selectFeature(index: number): void {
    this.activeFeature.set(index);
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
