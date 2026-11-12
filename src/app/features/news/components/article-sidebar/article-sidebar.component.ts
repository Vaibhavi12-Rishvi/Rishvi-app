import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactForm, TocEntry } from '../../../../models/home.model';

const CONTACT_EMAIL = 'info@rishvi.co.uk';

/** Sticky sidebar of an article: table of contents and a "Get Started With Us" form. */
@Component({
  selector: 'app-article-sidebar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './article-sidebar.component.html',
  styleUrl: './article-sidebar.component.scss',
})
export class ArticleSidebarComponent {
  readonly toc = input.required<TocEntry[]>();
  readonly articleTitle = input<string>('');

  readonly tocOpen = signal(true);
  readonly form: ContactForm = { name: '', email: '', phone: '', company: '', message: '' };

  /** There is no form backend yet, so submitting opens the visitor's email app with the details filled in. */
  submit(): void {
    const f = this.form;
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nCompany: ${f.company}\n\n${f.message}`;
    const subject = `Enquiry from website${this.articleTitle() ? ': ' + this.articleTitle() : ''}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
