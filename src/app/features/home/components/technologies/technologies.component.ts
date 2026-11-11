import { Component, computed, signal } from '@angular/core';
import { TechCategory } from '../../../../models/home.model';
import { TECH_CATEGORIES } from '../../data/home.data';

/** "Technologies we use": category tabs (shown when there is more than one) and a grid of logo tiles. */
@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  readonly categories: TechCategory[] = TECH_CATEGORIES;
  readonly active = signal(0);
  readonly items = computed(() => this.categories[this.active()].items);
}
