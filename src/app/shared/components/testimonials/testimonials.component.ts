import { Component, HostListener, computed, signal } from '@angular/core';
import { Testimonial } from '../../../models/home.model';
import { TESTIMONIALS } from '../../../features/home/data/home.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  private readonly all: Testimonial[] = TESTIMONIALS;

  private readonly width = signal(typeof window === 'undefined' ? 1200 : window.innerWidth);
  private readonly start = signal(0);

  /** Cards shown at once: 3 on desktop, 2 on tablet, 1 on phones. */
  readonly perPage = computed(() => (this.width() >= 960 ? 3 : this.width() >= 640 ? 2 : 1));
  readonly pageCount = computed(() => this.all.length - this.perPage() + 1);
  readonly current = computed(() => Math.min(this.start(), this.pageCount() - 1));
  readonly visible = computed(() => this.all.slice(this.current(), this.current() + this.perPage()));
  readonly pages = computed(() => Array.from({ length: this.pageCount() }, (_, i) => i));

  @HostListener('window:resize')
  onResize(): void {
    this.width.set(window.innerWidth);
  }

  go(index: number): void {
    this.start.set(index);
  }

  next(): void {
    this.start.set((this.current() + 1) % this.pageCount());
  }

  prev(): void {
    this.start.set((this.current() - 1 + this.pageCount()) % this.pageCount());
  }
}
