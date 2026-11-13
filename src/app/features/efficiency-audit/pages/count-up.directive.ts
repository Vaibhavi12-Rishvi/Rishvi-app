import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

/** Counts a number up from 0 the first time the element scrolls into view. */
@Directive({ selector: '[appCountUp]', standalone: true })
export class CountUpDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;
  private frame = 0;

  @Input({ required: true }) appCountUp = 0;
  @Input() countSuffix = '';

  ngOnInit(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      this.el.textContent = `${this.appCountUp}${this.countSuffix}`;
      return;
    }
    this.el.textContent = `0${this.countSuffix}`;
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.observer?.disconnect();
          this.run();
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(this.el);
  }

  private run(): void {
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number): void => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      this.el.textContent = `${Math.round(this.appCountUp * eased)}${this.countSuffix}`;
      if (t < 1) {
        this.frame = requestAnimationFrame(tick);
      }
    };
    this.frame = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }
}
