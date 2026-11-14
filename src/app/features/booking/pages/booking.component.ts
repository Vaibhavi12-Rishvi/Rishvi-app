import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

interface BookingService {
  id: string;
  title: string;
  text: string;
  minutes: number;
  icon: string;
}

interface Day {
  date: Date;
  label: number;
  blank: boolean;
  disabled: boolean;
}

const BOOKING_EMAIL = 'info@rishvi.co.uk';

/** Public Booking page, shown at /booking. */
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly services: BookingService[] = [
    { id: 'uae-e-invoicing', title: 'UAE E Invoicing', text: 'Talk to us about UAE e-invoicing readiness and accredited service provider integration.', minutes: 30, icon: 'pi-file-check' },
    {
      id: 'linnworks-technical-support',
      title: 'Linnworks Technical Support',
      text: 'Maximize your e-commerce potential with Rishvi Ltd’s professional Linnworks support services.',
      minutes: 30,
      icon: 'pi-headphones',
    },
  ];

  readonly weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  readonly times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

  readonly serviceId = signal('');
  readonly month = signal(this.startOfMonth(new Date()));
  readonly date = signal<Date | null>(null);
  readonly time = signal('');
  readonly form = { name: '', email: '', address: '', phone: '', message: '' };
  readonly sent = signal(false);

  readonly service = computed(() => this.services.find((s) => s.id === this.serviceId()));
  readonly monthLabel = computed(() => this.month().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }));
  readonly canPrev = computed(() => this.month() > this.startOfMonth(new Date()));

  readonly days = computed<Day[]>(() => {
    const m = this.month();
    const first = new Date(m.getFullYear(), m.getMonth(), 1);
    const count = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
    const offset = (first.getDay() + 6) % 7; // Monday first
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const out: Day[] = Array.from({ length: offset }, () => ({ date: first, label: 0, blank: true, disabled: true }));
    for (let d = 1; d <= count; d++) {
      const date = new Date(m.getFullYear(), m.getMonth(), d);
      const weekend = date.getDay() === 0 || date.getDay() === 6;
      out.push({ date, label: d, blank: false, disabled: weekend || date < today });
    }
    return out;
  });

  readonly ready = computed(
    () => !!this.service() && !!this.date() && !!this.time() && !!this.form.name.trim() && /\S+@\S+\.\S+/.test(this.form.email),
  );

  constructor() {
    inject(Title).setTitle('Book a Free Consultation | Rishvi Ltd');
    inject(Meta).updateTag({ name: 'description', content: 'Schedule your free Linnworks consultation with Rishvi Ltd.' });
    const wanted = inject(ActivatedRoute).snapshot.queryParamMap.get('service');
    if (wanted && this.services.some((s) => s.id === wanted)) {
      this.serviceId.set(wanted);
    }
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  private startOfMonth(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }

  shift(by: number): void {
    const m = this.month();
    this.month.set(new Date(m.getFullYear(), m.getMonth() + by, 1));
  }

  pick(day: Day): void {
    if (day.disabled || day.blank) return;
    this.date.set(day.date);
    this.time.set('');
  }

  isPicked(day: Day): boolean {
    const d = this.date();
    return !!d && !day.blank && d.getTime() === day.date.getTime();
  }

  /** There is no booking backend yet, so confirming opens the visitor's email app with the request filled in. */
  book(): void {
    if (!this.ready()) return;
    const f = this.form;
    const when = this.date()!.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const body = `Service: ${this.service()!.title} (${this.service()!.minutes} minutes)\nDate: ${when}\nTime: ${this.time()}\n\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nAddress: ${f.address}\n\n${f.message}`;
    this.sent.set(true);
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent('Booking request: ' + this.service()!.title)}&body=${encodeURIComponent(body)}`;
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
