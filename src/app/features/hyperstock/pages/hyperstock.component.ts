import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { ThemeService } from '../../../core/services/theme.service';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { CONTACT_INTRO, HYPERSTOCK_FEATURES, HYPERSTOCK_VIDEO, INSTALL_INTRO, INSTALL_STEPS } from '../data/hyperstock.data';

/** Public HyperStock page, shown at /linnworks/hyperstock-inventory-management. */
@Component({
  selector: 'app-hyperstock',
  standalone: true,
  imports: [DialogModule, HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './hyperstock.component.html',
  styleUrl: './hyperstock.component.scss',
})
export class HyperstockComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly features = HYPERSTOCK_FEATURES;
  readonly installIntro = INSTALL_INTRO;
  readonly steps = INSTALL_STEPS;
  readonly video = HYPERSTOCK_VIDEO;
  readonly contactIntro = CONTACT_INTRO;

  /** Index of the install step being shown. */
  readonly activeStep = signal(0);
  readonly step = computed(() => this.steps[this.activeStep()]);

  /** 1 when moving forward, -1 when moving back; decides which way the panel slides in. */
  readonly direction = signal(1);

  /** 0 to 1: how far along the stepper line the progress bar is filled. */
  readonly progress = computed(() => (this.steps.length > 1 ? this.activeStep() / (this.steps.length - 1) : 0));

  readonly dialogOpen = signal(false);

  /** Embed URL built only from the fixed YouTube id in HYPERSTOCK_VIDEO, so it is safe to trust. */
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

  selectStep(index: number): void {
    const next = Math.min(Math.max(index, 0), this.steps.length - 1);
    this.direction.set(next >= this.activeStep() ? 1 : -1);
    this.activeStep.set(next);
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
