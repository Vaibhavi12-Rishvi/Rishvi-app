import { Component, signal } from '@angular/core';
import { FaqItem } from '../../../../models/home.model';
import { FAQ_ITEMS } from '../../data/home.data';

/** "Help of the following FAQ's" section: an image with highlights, and an accordion (one answer open at a time). */
@Component({
  selector: 'app-faq-section',
  standalone: true,
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  readonly faqs: FaqItem[] = FAQ_ITEMS;
  readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
