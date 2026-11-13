import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { MC_INTRO, MC_SERVICES, mcLink } from '../data/multichannel-solutions.data';

/** Public Multichannel Solutions page, shown at /multichannel-solutions. */
@Component({
  selector: 'app-multichannel-solutions',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './multichannel-solutions.component.html',
  styleUrl: './multichannel-solutions.component.scss',
})
export class MultichannelSolutionsComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = MC_INTRO;
  readonly services = MC_SERVICES;
  readonly link = mcLink;

  constructor() {
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
