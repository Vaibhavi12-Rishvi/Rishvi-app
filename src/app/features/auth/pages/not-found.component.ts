import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-not-found',
  imports: [ButtonModule, CardModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  private readonly router = inject(Router);
  themeService = inject(ThemeService);

  goToHome(): void {
    this.router.navigate(['/dashboard']);
  }
}
