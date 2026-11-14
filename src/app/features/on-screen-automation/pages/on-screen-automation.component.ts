import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { AUTOMATION_ABOUT, AUTOMATION_APPS, AUTOMATION_FAQS, AUTOMATION_INTRO, AUTOMATION_POINTS } from '../data/on-screen-automation.data';

/** Public On Screen Automation page, shown at /linnworks/on-screen-automation. */
@Component({
  selector: 'app-on-screen-automation',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, RouterLink],
  templateUrl: './on-screen-automation.component.html',
  styleUrl: './on-screen-automation.component.scss',
})
export class OnScreenAutomationComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = AUTOMATION_INTRO;
  readonly apps = AUTOMATION_APPS;
  readonly about = AUTOMATION_ABOUT;
  readonly faqs = AUTOMATION_FAQS;
  readonly points = AUTOMATION_POINTS;

  /** Index of the open FAQ answer (one at a time). */
  readonly openIndex = signal<number | null>(0);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
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
