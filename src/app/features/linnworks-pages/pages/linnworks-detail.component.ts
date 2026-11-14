import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { LINNWORKS_PAGES } from '../data/linnworks-pages.data';
import { LinnworksPage, LinnworksPageKind } from '../data/linnworks-page.model';

interface KindInfo {
  parentLabel: string;
  parentRoute: string;
  badge: string;
  icon: string;
  relatedTitle: string;
}

const KINDS: Record<LinnworksPageKind, KindInfo> = {
  macro: { parentLabel: 'Macros', parentRoute: '/linnworks/macros', badge: 'Linnworks macro', icon: 'pi-bolt', relatedTitle: 'More macros' },
  script: { parentLabel: 'Custom Scripts', parentRoute: '/linnworks/custom-scripts', badge: 'Custom script', icon: 'pi-chart-bar', relatedTitle: 'More custom scripts' },
  shipping: { parentLabel: 'Shipping Integrations', parentRoute: '/linnworks/shipping-integrations', badge: 'Shipping integration', icon: 'pi-truck', relatedTitle: 'More shipping integrations' },
  automation: { parentLabel: 'On Screen Automation', parentRoute: '/linnworks/on-screen-automation', badge: 'On-screen automation', icon: 'pi-desktop', relatedTitle: 'More on-screen automation' },
};

/** "1. A: x 2. B: y" in one paragraph becomes separate lines. */
export function splitNumbered(text: string): string[] {
  const parts = text.split(/\s(?=\d{1,2}\.\s)/).map((p) => p.trim()).filter(Boolean);
  return parts.length > 1 ? parts : [text];
}

/** "Name: description" becomes a label/value pair when it has that shape. */
export function splitLabel(line: string): { label: string; text: string } | null {
  const clean = line.replace(/^\d{1,2}\.\s*/, '');
  const m = clean.match(/^([@A-Za-z0-9_ ./-]{2,40}):\s+(.+)$/);
  return m ? { label: m[1].trim(), text: m[2].trim() } : null;
}

/** One data-driven page for every remaining Linnworks macro, script, shipping and automation page. */
@Component({
  selector: 'app-linnworks-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, RouterLink],
  templateUrl: './linnworks-detail.component.html',
  styleUrl: './linnworks-detail.component.scss',
})
export class LinnworksDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly splitNumbered = splitNumbered;
  readonly splitLabel = splitLabel;
  /** Numbered lines for a card (one paragraph or several), or null when it is plain text. */
  readonly cardLines = (paras: string[]): string[] | null => {
    const lines = paras.flatMap(splitNumbered);
    return lines.length > 1 && lines.every((l) => /^\d{1,2}\.\s/.test(l)) ? lines : null;
  };
  /** Lines are numbered in the source text; the list adds its own numbers. */
  readonly stripNo = (t: string): string => t.replace(/^\d{1,2}\.\s*/, '');

  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), { initialValue: '' });

  readonly page = computed<LinnworksPage | undefined>(() => LINNWORKS_PAGES.find((p) => p.slug === this.slug()));
  readonly info = computed<KindInfo | undefined>(() => {
    const p = this.page();
    return p ? KINDS[p.kind] : undefined;
  });

  /** The macro / script code, such as RIS-RM-1013, when the headline starts with one. */
  readonly code = computed(() => this.page()?.headline.match(/^RIS-[A-Z]+-\d+/)?.[0] ?? '');
  readonly headline = computed(() => (this.page()?.headline ?? '').replace(/^RIS-[A-Z]+-\d+\s*/, ''));

  private readonly sameAsTitle = computed(() => {
    const p = this.page();
    return !!p && this.headline().trim().toLowerCase() === p.title.trim().toLowerCase();
  });

  /** Sub-heading in the hero; skipped when it would only repeat the page title. */
  readonly leadText = computed(() => {
    const p = this.page();
    if (!p) return '';
    const h = this.headline();
    return h.trim().toLowerCase() === p.title.trim().toLowerCase() ? '' : h;
  });

  readonly overviewHeading = computed(() => {
    const p = this.page();
    if (!p) return '';
    if (!this.sameAsTitle()) return this.headline();
    const noun = { macro: 'this macro', script: 'this script', shipping: p.title, automation: p.title }[p.kind];
    return `About ${noun}`;
  });

  readonly related = computed(() => {
    const p = this.page();
    if (!p) return [];
    const same = LINNWORKS_PAGES.filter((x) => x.kind === p.kind);
    const i = same.findIndex((x) => x.slug === p.slug);
    return [1, 2, 3].map((n) => same[(i + n) % same.length]).filter((x) => x.slug !== p.slug);
  });

  readonly crumbs = computed<BannerCrumb[]>(() => {
    const k = this.info();
    return k ? [{ label: 'Linnworks', route: '/linnworks' }, { label: k.parentLabel, route: k.parentRoute }] : [];
  });

  readonly active = signal(0);

  constructor() {
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
    inject(DestroyRef).onDestroy(() => {
      if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
        this.theme.primaryColor.set(this.previousColor);
      }
    });

    effect(() => {
      const p = this.page();
      if (!this.slug()) return;
      if (!p) {
        void this.router.navigateByUrl('/not-found', { skipLocationChange: true });
        return;
      }
      this.active.set(0);
      this.title.setTitle(p.seoTitle || `${p.title} | Rishvi Ltd`);
      const description = p.description || p.introParas[0] || p.headline;
      this.meta.updateTag({ name: 'description', content: description.slice(0, 300) });
    });
  }

  go(i: number): void {
    const n = this.page()?.steps.length ?? 0;
    this.active.set(Math.max(0, Math.min(n - 1, i)));
  }
}
