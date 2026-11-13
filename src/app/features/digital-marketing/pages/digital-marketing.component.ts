import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { DM_CHANNELS, DM_IMAGES, DM_INTRO, DM_SEO, dmLink } from '../data/digital-marketing.data';

/** Public Digital Marketing page, shown at /digital-marketing. */
@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.scss',
})
export class DigitalMarketingComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly images = DM_IMAGES;
  readonly intro = DM_INTRO;
  readonly seo = DM_SEO;
  readonly channels = DM_CHANNELS;
  readonly link = dmLink;

  /** Channel shown in the detail panel. */
  readonly active = signal(0);

  constructor() {
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  /** Left/right arrows move between channel tabs. */
  onTabKey(event: KeyboardEvent): void {
    const key = event.key;
    if (key !== 'ArrowRight' && key !== 'ArrowLeft' && key !== 'ArrowDown' && key !== 'ArrowUp') return;
    event.preventDefault();
    const last = this.channels.items.length - 1;
    const step = key === 'ArrowRight' || key === 'ArrowDown' ? 1 : -1;
    const next = Math.min(last, Math.max(0, this.active() + step));
    this.active.set(next);
    document.getElementById('dm-tab-' + next)?.focus();
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
