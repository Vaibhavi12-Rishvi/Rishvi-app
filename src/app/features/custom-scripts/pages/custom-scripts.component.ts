import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { SCRIPTS, SCRIPTS_INTRO, SCRIPT_BENEFITS, SCRIPT_CATEGORIES, SCRIPT_FAQS, TAILORED } from '../data/custom-scripts.data';

/** Public Custom Scripts page, shown at /linnworks/custom-scripts. */
@Component({
  selector: 'app-custom-scripts',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './custom-scripts.component.html',
  styleUrl: './custom-scripts.component.scss',
})
export class CustomScriptsComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = SCRIPTS_INTRO;
  readonly categories = SCRIPT_CATEGORIES;
  readonly tailored = TAILORED;
  readonly faqs = SCRIPT_FAQS;
  readonly benefits = SCRIPT_BENEFITS;
  readonly total = SCRIPTS.length;

  /** Key of the selected filter chip. */
  readonly activeCategory = signal('all');

  /** Scripts shown for the selected chip. */
  readonly visibleScripts = computed(() => {
    const key = this.activeCategory();
    return key === 'all' ? SCRIPTS : SCRIPTS.filter((s) => s.category === key);
  });

  /** Index of the open FAQ answer (one at a time). */
  readonly openIndex = signal<number | null>(0);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  /** How many scripts a chip holds, shown as a small number on the chip. */
  count(key: string): number {
    return key === 'all' ? SCRIPTS.length : SCRIPTS.filter((s) => s.category === key).length;
  }

  select(key: string): void {
    this.activeCategory.set(key);
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
