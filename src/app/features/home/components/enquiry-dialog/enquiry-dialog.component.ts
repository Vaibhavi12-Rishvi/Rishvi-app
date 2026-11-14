import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

const ENQUIRY_EMAIL = 'info@rishvi.co.uk';

/** "Let's discuss your project" popup. Bind it with [(visible)]. */
@Component({
  selector: 'app-enquiry-dialog',
  standalone: true,
  imports: [FormsModule, DialogModule],
  templateUrl: './enquiry-dialog.component.html',
  styleUrl: './enquiry-dialog.component.scss',
})
export class EnquiryDialogComponent {
  readonly visible = model(false);
  readonly sent = signal(false);
  readonly form = { name: '', email: '', message: '' };

  /** There is no form backend yet, so submitting opens the visitor's email app with the details filled in. */
  submit(): void {
    const f = this.form;
    const body = `Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`;
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent('Project enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`;
    this.sent.set(true);
  }

  onHide(): void {
    this.visible.set(false);
    this.sent.set(false);
    this.form.name = this.form.email = this.form.message = '';
  }
}
