import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { UserRole } from '../../../core/models/roles.enum';

interface NavItem {
  label: string;
  route: string;
  roles: UserRole[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Mon espace',   route: '/patient',  roles: [UserRole.PATIENT, UserRole.AIDANT] },
  { label: 'Patients',     route: '/medical',  roles: [UserRole.MEDICAL] },
  { label: 'Mes appels',   route: '/employee', roles: [UserRole.EMPLOYEE] },
  { label: 'Administration', route: '/admin',  roles: [UserRole.ADMIN] },
  { label: 'Analytics',    route: '/ceo',      roles: [UserRole.CEO] },
];

@Component({
  selector: 'pp-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
