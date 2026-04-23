import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authSerive = inject(AuthService);
  const router = inject(Router);

  if (!authSerive.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  return true;
};
