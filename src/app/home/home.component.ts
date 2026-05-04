import { Component, effect, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { UserRole } from '../core/models/roles.enum';

@Component({
  selector: 'pp-home',
  standalone: true,
  template: '',
})
export class HomeComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    // L'effect se déclenche à chaque changement de `isAuthenticated` ou `isLoading`.
    effect(() => {
      console.log('HomeComponent effect - isLoading:', this.auth.isLoading(), 'isAuthenticated:', this.auth.isAuthenticated());
      // On attend que le chargement soit terminé avant de décider
      if (!this.auth.isLoading()) {
        if (this.auth.isAuthenticated()) {
          this.redirectByRole();
        } else {
          this.router.navigate(['/login']);
        }
      }
    });
  }

  ngOnInit(): void {
    // Si l'utilisateur est déjà authentifié au moment du montage (très peu probable mais possible),
    // l'effect ci-dessus le détectera aussitôt.
  }

  private redirectByRole(): void {
    const role = this.auth.userRole();
    const roleRouteMap: Record<UserRole, string> = {
      [UserRole.PATIENT]: '/patient',
      [UserRole.MEDICAL]: '/medical',
      [UserRole.AIDANT]: '/patient',
      [UserRole.EMPLOYEE]: '/employee',
      [UserRole.ADMIN]: '/admin',
      [UserRole.CEO]: '/ceo',
    };
    this.router.navigate([roleRouteMap[role!] ?? '/login']);
  }
}
