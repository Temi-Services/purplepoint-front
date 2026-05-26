// src/app/core/auth/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  // Le service est déjà initialisé (constructor synchrone) — on peut décider immédiatement
  if (auth.initialized()) {
    return auth.isAuthenticated() ? true : router.createUrlTree(['/login']);
  }

  // Fallback : attendre l'initialisation (ne devrait pas arriver en pratique)
  return toObservable(auth.initialized).pipe(
    filter(initialized => initialized),
    take(1),
    map(() => auth.isAuthenticated() ? true : router.createUrlTree(['/login'])),
  );
};
