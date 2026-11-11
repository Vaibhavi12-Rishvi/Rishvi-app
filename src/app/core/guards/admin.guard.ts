import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if user is authenticated
  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  // Check if user has admin role
  if (authService.isAdmin()) {
    return true;
  }

  // Redirect to unauthorized page if not admin
  return router.createUrlTree(['/unauthorized']);
};
