import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { AUDIT_EMAIL, AUDIT_PHONE, HELP_OPTIONS } from '../../efficiency-audit/data/efficiency-audit.data';
import { CountUpDirective } from '../../efficiency-audit/pages/count-up.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { ENGAGEMENT, EXAMPLES, API_CTA, API_INTRO, API_STATS, OUTCOMES } from '../data/api-integration.data';

/** Public Linnworks Automation & Rules Engine page, shown at /linnworks-api-integration-engine. */
@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, CountUpDirective],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.scss',
})
export class ApiIntegrationComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = API_INTRO;
  readonly engagement = ENGAGEMENT;
  readonly examples = EXAMPLES;
  readonly stats = API_STATS;
  readonly outcomes = OUTCOMES;
  readonly cta = API_CTA;
  readonly helpOptions = HELP_OPTIONS;
  readonly email = AUDIT_EMAIL;
  readonly phone = AUDIT_PHONE;

  readonly form = { name: '', email: '', phone: '', company: '', help: '', message: '' };

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  /** There is no form backend yet, so submitting opens the visitor's email app with the details filled in. */
  submit(): void {
    const f = this.form;
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nCompany: ${f.company}\nHelp with: ${f.help}\n\n${f.message}`;
    window.location.href = `mailto:${AUDIT_EMAIL}?subject=${encodeURIComponent('Free Linnworks Efficiency Audit request')}&body=${encodeURIComponent(body)}`;
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
