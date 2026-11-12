import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../core/services/theme.service';
import { CareerForm, JobOpening } from '../../../models/home.model';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { CAREER_EMAIL, JOB_OPENINGS, WHY_JOIN_POINTS } from '../data/career.data';

/** Public Career page, shown at /career. Shares the header, footer and tokens with the other public pages. */
@Component({
  selector: 'app-career',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, PageBannerComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly jobs = JOB_OPENINGS;
  readonly whyJoin = WHY_JOIN_POINTS;

  fileName: string | null = null;

  /** The job whose responsibilities are shown. */
  readonly selected = signal<JobOpening>(JOB_OPENINGS[0]);
  readonly form: CareerForm = { name: '', email: '', phone: '', position: '', message: '' };

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  /** Pre-fills the position in the form and scrolls down to it. */
  apply(job: JobOpening): void {
    this.form.position = job.title;
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  }

  /** There is no form backend yet, so submitting opens the visitor's email app with the details filled in. */
  submit(): void {
    const f = this.form;
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nPosition: ${f.position}\n\n${f.message}`;
    const subject = `Career enquiry${f.position ? ': ' + f.position : ''}`;
    window.location.href = `mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
      // You can also store the file in the form object if needed
      // this.form.cvFile = file; // Uncomment if you want to store the file
    }
  }


}
