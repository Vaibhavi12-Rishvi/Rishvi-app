import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT_INTRO_PARAGRAPHS } from '../../data/about.data';

/** About block with a two-photo collage, used on the homepage and on the About Us page. */
@Component({
  selector: 'app-about-intro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-intro.component.html',
  styleUrl: './about-intro.component.scss',
})
export class AboutIntroComponent {
  readonly title = input<string>('Welcome To');
  /** Gradient-coloured text shown after the title. */
  readonly highlight = input<string>('RISHVI LTD');
  /** How many of the intro paragraphs to show. */
  readonly paragraphCount = input<number>(2);
  readonly ctaLabel = input<string>('Learn More About Us');
  readonly ctaRoute = input<string>('/about-us');
  readonly ctaFragment = input<string | undefined>(undefined);

  readonly paragraphs = computed(() => ABOUT_INTRO_PARAGRAPHS.slice(0, this.paragraphCount()));
}
