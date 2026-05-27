// src/app/shared/components/navbar/navbar.component.ts
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../core/auth/auth.service';
import { UserRole } from '../../../core/models/roles.enum';

interface NavItem {
  labelKey: string;
  route: string;
  roles: UserRole[];
}

const NAV_ITEMS: NavItem[] = [
  { labelKey: 'NAV.MY_SPACE',       route: '/patient',  roles: [UserRole.PATIENT, UserRole.AIDANT] },
  { labelKey: 'NAV.PATIENTS',       route: '/medical',  roles: [UserRole.MEDICAL] },
  { labelKey: 'NAV.MY_CALLS',       route: '/employee', roles: [UserRole.EMPLOYEE] },
  { labelKey: 'NAV.ADMINISTRATION', route: '/admin',    roles: [UserRole.ADMIN] },
  { labelKey: 'NAV.ANALYTICS',      route: '/ceo',      roles: [UserRole.CEO] },
];

@Component({
  selector: 'pp-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private readonly auth = inject(AuthService);

  readonly user = this.auth.currentUser;

  readonly visibleItems = computed(() => {
    const role = this.auth.userRole();
    if (!role) return [];
    return NAV_ITEMS.filter(item => item.roles.includes(role));
  });

  readonly userInitials = computed(() => {
    const u = this.user();
    if (!u) return '';
    return `${u.email[0]}${u.email[5]}`.toUpperCase();
  });

  logout(): void {
    this.auth.logout();
  }
}
