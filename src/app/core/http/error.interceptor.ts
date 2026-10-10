import { HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, from, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router  = inject(Router);
  const auth    = inject(AuthService);

  // Les routes d'auth gèrent elles-mêmes leurs erreurs (ex. mauvais mot de passe → 401)
  const isAuthCall = req.url.includes('/auth/');

  return next(req).pipe(
    catchError(error => {
      switch (error.status) {
        case HttpStatusCode.Unauthorized:
          if (isAuthCall) break;
          // Access token expiré : on tente un refresh, puis on rejoue la requête une seule fois
          return from(auth.refreshSession()).pipe(
            switchMap(token => {
              if (!token) {
                auth.logout();
                return throwError(() => error);
              }
              return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
            }),
          );
        case HttpStatusCode.Forbidden:
          router.navigate(['/unauthorized']);
          break;
        case HttpStatusCode.InternalServerError:
          // TODO: brancher sur NotificationService
          console.error('Server error', error);
          break;
      }
      return throwError(() => error);
    }),
  );
};
