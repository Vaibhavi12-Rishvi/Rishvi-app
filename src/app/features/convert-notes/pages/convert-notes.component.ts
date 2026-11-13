import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  CONVERT_CONFIG_INTRO,
  CONVERT_CONFIG_STEPS,
  CONVERT_FUNCTIONS,
  CONVERT_FUNCTIONS_INTRO,
  CONVERT_INTRO,
  CONVERT_SETUP,
} from '../data/convert-notes.data';

/** Public Convert Channel Notes to External Notes page, shown at /linnworks/convert-channel-notes-to-external-notes. */
@Component({
  selector: 'app-convert-notes',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './convert-notes.component.html',
  styleUrl: './convert-notes.component.scss',
})
export class ConvertNotesComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = CONVERT_INTRO;
  readonly setup = CONVERT_SETUP;
  readonly functionsIntro = CONVERT_FUNCTIONS_INTRO;
  readonly functions = CONVERT_FUNCTIONS;
  readonly configIntro = CONVERT_CONFIG_INTRO;
  readonly steps = CONVERT_CONFIG_STEPS;

  /** Index of the configuration step being shown. */
  readonly activeStep = signal(0);
  readonly step = computed(() => this.steps[this.activeStep()]);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  selectStep(index: number): void {
    this.activeStep.set(Math.min(Math.max(index, 0), this.steps.length - 1));
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
