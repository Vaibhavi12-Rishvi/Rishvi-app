import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { MACRO_APPS, MACRO_BENEFITS, MACRO_FAQS, MACRO_INTRO, MACRO_TYPES, MACRO_VIDEO } from '../data/macros.data';

/** Public Macros page, shown at /linnworks/macros. */
@Component({
  selector: 'app-macros',
  standalone: true,
  imports: [DialogModule, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './macros.component.html',
  styleUrl: './macros.component.scss',
})
export class MacrosComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly intro = MACRO_INTRO;
  readonly apps = MACRO_APPS;
  readonly types = MACRO_TYPES;
  readonly faqs = MACRO_FAQS;
  readonly benefits = MACRO_BENEFITS;
  readonly video = MACRO_VIDEO;

  /** Index of the open FAQ answer (one at a time). */
  readonly openIndex = signal<number | null>(0);

  readonly dialogOpen = signal(false);

  /** Embed URL built only from the fixed YouTube id in MACRO_VIDEO, so it is safe to trust. */
  readonly embedUrl = computed<SafeResourceUrl | null>(() =>
    this.dialogOpen()
      ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.video.youtubeId}?autoplay=1&rel=0`)
      : null,
  );

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }

  play(): void {
    this.dialogOpen.set(true);
  }

  closeVideo(): void {
    this.dialogOpen.set(false); // removes the iframe so the video stops
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
