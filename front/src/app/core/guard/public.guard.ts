import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const publicGuard: CanActivateFn = (route, state) => {
  const authSerive = inject(AuthService);
  const router = inject(Router);

  if (authSerive.isLoggedIn()) {
    return router.createUrlTree(['/']);
  }

  return true;
};
