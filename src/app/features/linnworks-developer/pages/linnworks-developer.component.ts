import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  DEVELOPMENT_SERVICES,
  HOW_WE_WORK_STEPS,
  INTRO_HIGHLIGHTS,
  INTRO_PARAGRAPHS,
  WHY_CHOOSE_POINTS,
} from '../data/linnworks-developer.data';

/** Public Linnworks Developer Services page, shown at /linnworks-developer-services. */
@Component({
  selector: 'app-linnworks-developer',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './linnworks-developer.component.html',
  styleUrl: './linnworks-developer.component.scss',
})
export class LinnworksDeveloperComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = INTRO_PARAGRAPHS;
  readonly highlights = INTRO_HIGHLIGHTS;
  readonly whyChoose = WHY_CHOOSE_POINTS;
  readonly steps = HOW_WE_WORK_STEPS;
  readonly services = DEVELOPMENT_SERVICES;

  /** The step whose description is shown. */
  readonly activeStep = signal(0);

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
