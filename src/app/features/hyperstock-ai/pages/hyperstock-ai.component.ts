import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../efficiency-audit/pages/count-up.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  HAI_CAPS,
  HAI_CAPS_HEAD,
  HAI_CONTACT,
  HAI_DEMO_LINK,
  HAI_FAQS,
  HAI_FAQ_HEAD,
  HAI_IMAGES,
  HAI_INTRO,
  HAI_MULTI,
  HAI_PROBLEM,
  HAI_STATS,
} from '../data/hyperstock-ai.data';

/** Public Hyperstock AI for Linnworks page, shown at /linnworks/hyperstock-ai-hai. */
@Component({
  selector: 'app-hyperstock-ai',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, CountUpDirective],
  templateUrl: './hyperstock-ai.component.html',
  styleUrl: './hyperstock-ai.component.scss',
})
export class HyperstockAiComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();
  private chatTimer?: ReturnType<typeof setTimeout>;

  readonly images = HAI_IMAGES;
  readonly demoLink = HAI_DEMO_LINK;
  readonly intro = HAI_INTRO;
  readonly problem = HAI_PROBLEM;
  readonly capsHead = HAI_CAPS_HEAD;
  readonly caps = HAI_CAPS;
  readonly multi = HAI_MULTI;
  readonly stats = HAI_STATS;
  readonly faqHead = HAI_FAQ_HEAD;
  readonly faqs = HAI_FAQS;
  readonly contact = HAI_CONTACT;

  /** Example question shown in the chat preview, and whether Hyperstock is still "thinking". */
  readonly asked = signal<string | null>(null);
  readonly thinking = signal(false);

  /** Index of the capability shown in the detail panel. */
  readonly activeCap = signal(0);

  /** Index of the open FAQ answer (one at a time). */
  readonly openFaq = signal<number | null>(0);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  /** Shows the question as a chat message, then a short "checking" pause before the reply. */
  ask(question: string): void {
    clearTimeout(this.chatTimer);
    this.asked.set(question);
    this.thinking.set(true);
    this.chatTimer = setTimeout(() => this.thinking.set(false), 1300);
  }

  selectCap(i: number): void {
    this.activeCap.set(i);
  }

  toggleFaq(i: number): void {
    this.openFaq.update((current) => (current === i ? null : i));
  }

  ngOnDestroy(): void {
    clearTimeout(this.chatTimer);
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
