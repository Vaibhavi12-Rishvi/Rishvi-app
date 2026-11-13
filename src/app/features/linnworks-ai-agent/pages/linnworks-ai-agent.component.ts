import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../efficiency-audit/pages/count-up.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  AGENT_CONTACT,
  AGENT_CUSTOM,
  AGENT_FACTS,
  AGENT_FAQS,
  AGENT_FAQ_HEAD,
  AGENT_IMAGES,
  AGENT_INTRO,
  AGENT_LINK,
  AGENT_PLAYBOOKS,
  AGENT_VS,
} from '../data/linnworks-ai-agent.data';

/** Public Linnworks AI Agent page, shown at /linnworks/linnworks-ai-agent. */
@Component({
  selector: 'app-linnworks-ai-agent',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, CountUpDirective],
  templateUrl: './linnworks-ai-agent.component.html',
  styleUrl: './linnworks-ai-agent.component.scss',
})
export class LinnworksAiAgentComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly images = AGENT_IMAGES;
  readonly link = AGENT_LINK;
  readonly intro = AGENT_INTRO;
  readonly facts = AGENT_FACTS;
  readonly vs = AGENT_VS;
  readonly playbooks = AGENT_PLAYBOOKS;
  readonly custom = AGENT_CUSTOM;
  readonly faqHead = AGENT_FAQ_HEAD;
  readonly faqs = AGENT_FAQS;
  readonly contact = AGENT_CONTACT;

  /** Index of the open FAQ answer (one at a time). */
  readonly openFaq = signal<number | null>(0);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  toggleFaq(i: number): void {
    this.openFaq.update((current) => (current === i ? null : i));
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
