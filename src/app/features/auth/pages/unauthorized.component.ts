import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-unauthorized',
  imports: [ButtonModule, CardModule],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthorizedComponent {
  private readonly router = inject(Router);
  themeService = inject(ThemeService);

  goToHome(): void {
    this.router.navigate(['/dashboard']);
  }
}
