import { HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router  = inject(Router);
  const auth    = inject(AuthService);

  return next(req).pipe(
    catchError(error => {
      switch (error.status) {
        case HttpStatusCode.Unauthorized:
          auth.logout();
          break;
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
