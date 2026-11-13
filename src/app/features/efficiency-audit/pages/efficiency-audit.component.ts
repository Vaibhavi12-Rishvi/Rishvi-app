import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import {
  AUDIT_EMAIL,
  AUDIT_FAQS,
  AUDIT_GET,
  AUDIT_INTRO,
  AUDIT_PHONE,
  AUDIT_SERVICES,
  AUDIT_STATS,
  BEFORE_AFTER,
  GET_HEAD,
  HELP_OPTIONS,
  PROBLEMS,
  SERVICES_HEAD,
  WHY_US,
} from '../data/efficiency-audit.data';
import { CountUpDirective } from './count-up.directive';

/** Public Linnworks Efficiency Audit page, shown at /linnworks-efficiency-audit. */
@Component({
  selector: 'app-efficiency-audit',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, CountUpDirective],
  templateUrl: './efficiency-audit.component.html',
  styleUrl: './efficiency-audit.component.scss',
})
export class EfficiencyAuditComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = AUDIT_INTRO;
  readonly problems = PROBLEMS;
  readonly getHead = GET_HEAD;
  readonly gets = AUDIT_GET;
  readonly stats = AUDIT_STATS;
  readonly servicesHead = SERVICES_HEAD;
  readonly services = AUDIT_SERVICES;
  readonly why = WHY_US;
  readonly beforeAfter = BEFORE_AFTER;
  readonly faqs = AUDIT_FAQS;
  readonly helpOptions = HELP_OPTIONS;
  readonly email = AUDIT_EMAIL;
  readonly phone = AUDIT_PHONE;

  /** Indexes of the problems the visitor ticked. */
  readonly ticked = signal<ReadonlySet<number>>(new Set());
  readonly tickedCount = computed(() => this.ticked().size);
  readonly tickedPercent = computed(() => (this.tickedCount() / PROBLEMS.items.length) * 100);
  readonly verdict = computed(() => {
    const n = this.tickedCount();
    if (n === 0) return 'Tick what sounds familiar to see how much your setup could improve.';
    if (n <= 2) return 'A few quick wins are likely. An audit will show you exactly where.';
    if (n <= 4) return 'Your setup is probably costing you time every day. An audit is well worth it.';
    return 'Your workflows have likely outgrown your setup. A free audit will pay for itself.';
  });

  /** Index of the open FAQ answer (one at a time). */
  readonly openIndex = signal<number | null>(0);

  readonly form = { name: '', email: '', phone: '', company: '', help: '', message: '' };

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  toggleProblem(i: number): void {
    this.ticked.update((current) => {
      const next = new Set(current);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  }

  toggleFaq(i: number): void {
    this.openIndex.update((current) => (current === i ? null : i));
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
