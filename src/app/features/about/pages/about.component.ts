import { Component, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { AboutIntroComponent } from '../components/about-intro/about-intro.component';
import { StatsBandComponent } from '../components/stats-band/stats-band.component';
import { VideoSliderComponent } from '../components/video-slider/video-slider.component';
import { CLIENT_POINTS, MOTIVE_PARAGRAPHS, VISION_MISSION, WHY_US_POINTS } from '../data/about.data';

/** Public About Us page, shown at /about-us. Shares the header, footer and tokens with the homepage. */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, AboutIntroComponent, StatsBandComponent, VideoSliderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly motive = MOTIVE_PARAGRAPHS;
  readonly vision = VISION_MISSION;
  readonly whyUs = WHY_US_POINTS;
  readonly clientPoints = CLIENT_POINTS;

  constructor() {
    // Same behaviour as the homepage: show the Rishvi colour unless the visitor chose one.
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
