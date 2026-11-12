import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * Add `appReveal` to any element and style `.is-visible` in the page's scss.
 * Visitors who prefer reduced motion (or old browsers) see the element straight away.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'rv-reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      this.el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    this.observer.observe(this.el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
