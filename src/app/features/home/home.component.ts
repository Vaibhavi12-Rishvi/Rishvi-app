import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ClientsMarqueeComponent } from '../about/components/clients-marquee/clients-marquee.component';
import { StatsBandComponent } from '../about/components/stats-band/stats-band.component';
import { AboutIntroComponent } from '../about/components/about-intro/about-intro.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { LatestNewsComponent } from "./components/latest-news/latest-news.component";
import { CertificationsComponent } from "./components/certifications/certifications.component";
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { FeaturedServicesComponent } from './components/featured-services/featured-services.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

/**
 * Public marketing homepage. Re-uses the app's ThemeService (light/dark, primary colour, surface palette).
 * Until the visitor picks a colour, the page shows the Rishvi brand colour without saving it,
 * so the admin app keeps its own default.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutIntroComponent,
    FeaturedServicesComponent,
    ClientsMarqueeComponent,
    StatsBandComponent,
    FaqSectionComponent,
    WhoWeAreComponent,
    TestimonialsComponent,
    TechnologiesComponent,
    LatestNewsComponent,
    CertificationsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  constructor() {
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  ngOnDestroy(): void {
    // Only undo the in-memory default; a colour the visitor chose is saved and kept.
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
