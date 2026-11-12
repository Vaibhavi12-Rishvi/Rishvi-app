import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { DEVELOPER_TYPES, HIRE_FAQS, HIRING_MODELS, HOW_IT_WORKS_STEPS, INTRO_TEXT } from '../data/hire-developer.data';

/** Public Hire Developer page, shown at /hire-developer. */
@Component({
  selector: 'app-hire-developer',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './hire-developer.component.html',
  styleUrl: './hire-developer.component.scss',
})
export class HireDeveloperComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = INTRO_TEXT;
  readonly types = DEVELOPER_TYPES;
  readonly models = HIRING_MODELS;
  readonly steps = HOW_IT_WORKS_STEPS;
  readonly faqs = HIRE_FAQS;

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
