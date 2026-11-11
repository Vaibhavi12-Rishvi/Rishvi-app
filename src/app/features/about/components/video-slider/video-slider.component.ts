import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { VideoItem } from '../../../../models/home.model';
import { WORK_VIDEOS } from '../../data/about.data';

/** "Explore Our Work" tutorial videos. Banner images are local; the video plays from YouTube in a dialog. */
@Component({
  selector: 'app-video-slider',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './video-slider.component.html',
  styleUrl: './video-slider.component.scss',
})
export class VideoSliderComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly videos: VideoItem[] = WORK_VIDEOS;

  private readonly width = signal(typeof window === 'undefined' ? 1200 : window.innerWidth);
  private readonly start = signal(0);

  readonly perPage = computed(() => (this.width() >= 960 ? 3 : this.width() >= 640 ? 2 : 1));
  readonly pageCount = computed(() => Math.max(1, this.videos.length - this.perPage() + 1));
  readonly current = computed(() => Math.min(this.start(), this.pageCount() - 1));
  readonly visible = computed(() => this.videos.slice(this.current(), this.current() + this.perPage()));
  readonly pages = computed(() => Array.from({ length: this.pageCount() }, (_, i) => i));
  readonly sliding = computed(() => this.videos.length > this.perPage());

  readonly dialogOpen = signal(false);
  readonly active = signal<VideoItem | null>(null);

  /** Embed URL built only from the fixed YouTube ids in WORK_VIDEOS, so it is safe to trust. */
  readonly embedUrl = computed<SafeResourceUrl | null>(() => {
    const video = this.active();
    return video
      ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`)
      : null;
  });

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

  play(video: VideoItem): void {
    this.active.set(video);
    this.dialogOpen.set(true);
  }

  onDialogHide(): void {
    this.dialogOpen.set(false);
    this.active.set(null); // removes the iframe so the video stops
  }
}
