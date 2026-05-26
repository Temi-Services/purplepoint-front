import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from '../models/roles.enum';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {

  console.log('roleGuard - URL:', route.url);
  const auth     = inject(AuthService);
  const router   = inject(Router);
  const allowed  = (route.data['roles'] as UserRole[]) ?? [];
  console.log('allowed roles:', allowed);

  if (allowed.length === 0) {
    return true;
  }

  return auth.hasAnyRole(allowed)
    ? true
    : router.createUrlTree(['/unauthorized']);
};


