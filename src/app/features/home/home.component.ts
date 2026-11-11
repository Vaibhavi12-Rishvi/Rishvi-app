import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

/**
 * Public marketing homepage. Re-uses the app's ThemeService (light/dark + primary colour)
 * and applies the Rishvi brand primary palette while the page is shown.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly previousColor = this.theme.primaryColor();

  constructor() {
    // In-memory only (not persisted) so the admin app keeps the user's saved colour.
    this.theme.primaryColor.set('rishvi');
  }

  ngOnDestroy(): void {
    this.theme.primaryColor.set(this.previousColor);
  }
}
