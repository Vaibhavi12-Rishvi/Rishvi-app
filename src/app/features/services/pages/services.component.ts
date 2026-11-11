import { Component, OnDestroy, inject } from '@angular/core';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { ThemeService } from '../../../core/services/theme.service';
import { ServiceItem } from '../../../models/home.model';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { SERVICE_ITEMS } from '../../home/data/home.data';
import { TestimonialsComponent } from '../../../shared/components/testimonials/testimonials.component';

/** Public services page, shown at /services. Shares the header, footer and tokens with the homepage. */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TestimonialsComponent, PageBannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly services: ServiceItem[] = SERVICE_ITEMS;

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
