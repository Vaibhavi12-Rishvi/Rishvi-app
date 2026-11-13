import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { VS_HELP, VS_IMAGES, VS_INTRO, VS_OFFER, VS_RUN, VS_TASKS, vsLink } from '../data/virtual-services.data';

/** Public Virtual Services page, shown at /virtual-services. */
@Component({
  selector: 'app-virtual-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './virtual-services.component.html',
  styleUrl: './virtual-services.component.scss',
})
export class VirtualServicesComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly images = VS_IMAGES;
  readonly intro = VS_INTRO;
  readonly tasks = VS_TASKS;
  readonly help = VS_HELP;
  readonly offer = VS_OFFER;
  readonly run = VS_RUN;
  readonly link = vsLink;

  /** Offering shown in the explorer panel. */
  readonly active = signal(0);

  constructor() {
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  /** Arrow keys move between the offering tabs. */
  onTabKey(event: KeyboardEvent): void {
    const last = this.offer.items.length - 1;
    const key = event.key;
    if (key !== 'ArrowDown' && key !== 'ArrowUp' && key !== 'ArrowRight' && key !== 'ArrowLeft') return;
    event.preventDefault();
    const step = key === 'ArrowDown' || key === 'ArrowRight' ? 1 : -1;
    const next = Math.min(last, Math.max(0, this.active() + step));
    this.active.set(next);
    document.getElementById('vs-tab-' + next)?.focus();
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
