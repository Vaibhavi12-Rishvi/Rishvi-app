import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../efficiency-audit/pages/count-up.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  MCP_CONTACT,
  MCP_FACTS,
  MCP_FAQS,
  MCP_FAQ_HEAD,
  MCP_GROUPS,
  MCP_IMAGES,
  MCP_INTRO,
  MCP_LINK,
  MCP_RAW,
  MCP_TOOLS_HEAD,
  MCP_WHAT,
} from '../data/linnworks-mcp.data';

/** Public Linnworks MCP Server page, shown at /linnworks/linnworks-mcp-server. */
@Component({
  selector: 'app-linnworks-mcp',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, CountUpDirective],
  templateUrl: './linnworks-mcp.component.html',
  styleUrl: './linnworks-mcp.component.scss',
})
export class LinnworksMcpComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly images = MCP_IMAGES;
  readonly link = MCP_LINK;
  readonly intro = MCP_INTRO;
  readonly facts = MCP_FACTS;
  readonly what = MCP_WHAT;
  readonly toolsHead = MCP_TOOLS_HEAD;
  readonly groups = MCP_GROUPS;
  readonly raw = MCP_RAW;
  readonly faqHead = MCP_FAQ_HEAD;
  readonly faqs = MCP_FAQS;
  readonly contact = MCP_CONTACT;

  /** Index of the tool group shown in the panel. */
  readonly activeGroup = signal(0);

  /** Index of the open FAQ answer (one at a time). */
  readonly openFaq = signal<number | null>(0);

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  selectGroup(i: number): void {
    this.activeGroup.set(i);
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
