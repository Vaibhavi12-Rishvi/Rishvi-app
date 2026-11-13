import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { CONTACT_EMAIL, CONTACT_IMAGE, CONTACT_SERVICES, CONTACT_WAYS, LOCATIONS, SUPPORT, SUPPORT_EMAIL } from '../data/contact-us.data';

/** Public Contact Us page, shown at /contact-us. */
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly image = CONTACT_IMAGE;
  readonly ways = CONTACT_WAYS;
  readonly services = CONTACT_SERVICES;
  readonly support = SUPPORT;
  readonly supportEmail = SUPPORT_EMAIL;
  readonly locations = LOCATIONS;
  readonly form = { name: '', email: '', phone: '', service: '', message: '' };

  constructor() {
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  /** Google Maps directions link for an address. */
  directions(address: string): string {
    return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address);
  }

  /** There is no form backend yet, so submitting opens the visitor's email app with the details filled in. */
  submit(): void {
    const f = this.form;
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${f.service}\n\n${f.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Website enquiry: ' + f.service)}&body=${encodeURIComponent(body)}`;
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
