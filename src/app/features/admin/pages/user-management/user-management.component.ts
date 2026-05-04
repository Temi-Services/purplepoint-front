import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminUserService } from '../../services/admin-user.service';
import { User } from '../../../../core/models/user.model';
import { UserRole } from '../../../../core/models/roles.enum';
import { firstValueFrom } from 'rxjs';

const ROLE_STYLE: Record<UserRole, string> = {
  [UserRole.PATIENT]:  'bg-blue-50 text-blue-700',
  [UserRole.MEDICAL]:  'bg-purple-50 text-primary',
  [UserRole.AIDANT]:   'bg-gray-100 text-muted',
  [UserRole.EMPLOYEE]: 'bg-amber-50 text-warning',
  [UserRole.ADMIN]:    'bg-red-50 text-danger',
  [UserRole.CEO]:      'bg-green-50 text-success',
};

@Component({
  selector: 'pp-user-management',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './user-management.component.html',
})
export class UserManagementComponent implements OnInit {
  private readonly userService = inject(AdminUserService);

  readonly users       = signal<User[]>([]);
  readonly isLoading   = signal(true);
  readonly search      = signal('');
  readonly filterRole  = signal<UserRole | ''>('');
  readonly page        = signal(1);
  readonly total       = signal(0);
  readonly limit       = 20;

  readonly roles = Object.values(UserRole);

  readonly filtered = computed(() => {
    const q = this.search().toLowerCase().trim();
    return this.users().filter(u => {
      const matchSearch = !q ||
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q);
      const matchRole = !this.filterRole() || u.role === this.filterRole();
      return matchSearch && matchRole;
    });
  });

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  readonly roleStyle = (role: UserRole) => ROLE_STYLE[role] ?? 'bg-gray-100 text-muted';

  async ngOnInit(): Promise<void> {
    await this.loadUsers();
  }

  // user-management.component.ts
  async loadUsers(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(
        this.userService.getAll(
          this.page(),
          this.limit,
          this.filterRole() as UserRole || undefined,
        )
      );
      // ✅ Même correction
      this.users.set(res?.data?.data ?? []);
      this.total.set(res?.data?.total ?? 0);
    } catch (error) {
      console.error('Error loading users:', error);
      this.users.set([]);
      this.total.set(0);
    } finally {
      this.isLoading.set(false);
    }
  }

  async onRoleFilter(role: UserRole | ''): Promise<void> {
    this.filterRole.set(role);
    this.page.set(1);
    await this.loadUsers();
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadUsers();
  }

  async deactivate(user: User): Promise<void> {
    if (!confirm(`Désactiver ${user.firstName} ${user.lastName} ?`)) return;
    await this.userService
      .update(user.id, { status: 'INACTIVE' })
      .toPromise();
    await this.loadUsers();
  }
}
