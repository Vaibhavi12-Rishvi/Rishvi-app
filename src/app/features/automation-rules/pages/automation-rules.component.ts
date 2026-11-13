import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { AUDIT_EMAIL, AUDIT_PHONE, HELP_OPTIONS } from '../../efficiency-audit/data/efficiency-audit.data';
import { CountUpDirective } from '../../efficiency-audit/pages/count-up.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { ENGAGEMENT, EXAMPLES, AUTO_CTA, AUTO_INTRO, AUTO_STATS, OUTCOMES } from '../data/automation-rules.data';

/** Public Linnworks Automation & Rules Engine page, shown at /linnworks-automation-rules-engine. */
@Component({
  selector: 'app-automation-rules',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, CountUpDirective],
  templateUrl: './automation-rules.component.html',
  styleUrl: './automation-rules.component.scss',
})
export class AutomationRulesComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = AUTO_INTRO;
  readonly engagement = ENGAGEMENT;
  readonly examples = EXAMPLES;
  readonly stats = AUTO_STATS;
  readonly outcomes = OUTCOMES;
  readonly cta = AUTO_CTA;
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
