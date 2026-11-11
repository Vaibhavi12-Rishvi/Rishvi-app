import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Title banner for the public inner pages. It slides up under the transparent sticky header,
 * so it must be placed directly below `<app-home-header />` inside a page that includes the Rishvi tokens.
 */
@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.scss',
})
export class PageBannerComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input<string>('');
}
