import { Component, HostListener, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import {
  UK_CAPS,
  UK_CERTS,
  UK_FAQ_HEAD,
  UK_FAQS,
  UK_FLOW,
  UK_HERO,
  UK_IMAGES,
  UK_LINK,
  UK_ORBIT,
  UK_NEWS,
  UK_SERVICES,
  UK_SUPPORT,
  UK_TIMELINE,
  UK_WHY,
  UK_WHY_MOVE,
} from '../data/uk-einvoicing.data';

/** Public UK E-Invoicing page, shown at /uk-e-invoicing. */
@Component({
  selector: 'app-uk-einvoicing',
  standalone: true,
  imports: [RouterLink, FooterComponent, RevealDirective],
  templateUrl: './uk-einvoicing.component.html',
  styleUrl: './uk-einvoicing.component.scss',
})
export class UkEinvoicingComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly images = UK_IMAGES;
  readonly link = UK_LINK;
  readonly hero = UK_HERO;
  readonly orbit = UK_ORBIT;
  readonly caps = UK_CAPS;
  readonly support = UK_SUPPORT;
  readonly whyMove = UK_WHY_MOVE;
  readonly timeline = UK_TIMELINE;
  readonly why = UK_WHY;
  readonly services = UK_SERVICES;
  readonly flow = UK_FLOW;
  readonly certs = UK_CERTS;
  readonly faqHead = UK_FAQ_HEAD;
  readonly faqs = UK_FAQS;
  readonly news = UK_NEWS;

  /** Menu of the standalone UK e-invoicing site. */
  readonly nav = [
    { label: 'Home', href: '#home' },
    { label: 'Why Us', href: '#why-rishvi' },
    { label: 'Services', href: '#services' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Resources', href: '#news' },
    { label: 'Contact', href: UK_LINK },
  ];
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  /** In-page links: scroll to the section (a plain #hash would resolve against the app base URL and leave this page). */
  go(event: Event, href: string): void {
    this.menuOpen.set(false);
    if (!href.startsWith('#')) return;
    event.preventDefault();
    const el = href === '#home' ? null : document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  /** Comparison view: which invoice type is highlighted. */
  readonly mode = signal<'traditional' | 'electronic'>('electronic');
  /** Timeline phase shown in the detail card. */
  readonly phase = signal(0);
  /** Corner shown in the model explorer. */
  readonly corner = signal(0);
  /** Open FAQ (one at a time). */
  readonly openFaq = signal<number | null>(0);

  constructor() {
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  newsImage(i: number): string {
    return this.images.news[i] ?? this.news.newsImageFallback;
  }

  toggleFaq(i: number): void {
    this.openFaq.update((c) => (c === i ? null : i));
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
