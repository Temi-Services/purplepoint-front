// src/app/features/admin/pages/user-management/user-management.component.ts
import {
  Component,
  inject,
  signal,
  computed,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { httpResource } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { AdminUserService } from '../../services/admin-user.service';
import { User } from '../../../../core/models/user.model';
import { UserRole } from '../../../../core/models/roles.enum';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/data-table/data-table.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { UserFormModalComponent } from '../../modals/user-form-modal.component';
import { ApiResponse, PaginatedData } from '../../../../core/http/api-types';

const ROLES = Object.values(UserRole);

@Component({
  selector: 'pp-user-management',
  imports: [
    FormsModule,
    DataTableComponent,
    BadgeComponent,
    ConfirmDialogComponent,
    UserFormModalComponent,
  ],
  templateUrl: './user-management.component.html',
})
export class UserManagementComponent {
  private readonly userService = inject(AdminUserService);

  readonly filterRole   = signal<UserRole | ''>('');
  readonly filterRegion = signal('');
  readonly filterName   = signal('');
  readonly page         = signal(1);
  readonly limit        = 20;
  readonly roles        = ROLES;

  readonly usersResource = httpResource<ApiResponse<PaginatedData<User>>>(() => {
    const params: Record<string, string> = {
      page:  String(this.page()),
      limit: String(this.limit),
    };
    if (this.filterRole())   params['role']   = this.filterRole() as string;
    if (this.filterRegion()) params['region'] = this.filterRegion();
    return { url: `${environment.apiUrl}/users`, params };
  });

  private readonly allUsers = computed(() => this.usersResource.value()?.data?.data ?? []);
  private readonly allTotal = computed(() => this.usersResource.value()?.data?.total ?? 0);

  readonly filteredUsers = computed(() => {
    const q = this.filterName().trim().toLowerCase();
    if (!q) return this.allUsers();
    return this.allUsers().filter(u =>
      `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q),
    );
  });

  readonly filteredTotal = computed(() => {
    const q = this.filterName().trim();
    return q ? this.filteredUsers().length : this.allTotal();
  });

  readonly loading = computed(() => this.usersResource.isLoading());

  readonly showUserForm  = signal(false);
  readonly editUserId    = signal<string | undefined>(undefined);
  readonly showConfirm   = signal(false);
  readonly deleteTarget  = signal<User | null>(null);
  readonly deleteLoading = signal(false);

  readonly roleCell   = viewChild<TemplateRef<{ $implicit: User }>>('roleCell');
  readonly statusCell = viewChild<TemplateRef<{ $implicit: User }>>('statusCell');
  readonly nameCell   = viewChild<TemplateRef<{ $implicit: User }>>('nameCell');

  readonly columns = computed<TableColumn<User>[]>(() => [
    { key: 'firstName', label: 'Utilisateur', template: this.nameCell() },
    { key: 'email',     label: 'E-mail' },
    { key: 'role',      label: 'Rôle',    template: this.roleCell() },
    { key: 'region',    label: 'Région' },
    { key: 'status',    label: 'Statut',  template: this.statusCell() },
  ]);

  openCreate(): void {
    this.editUserId.set(undefined);
    this.showUserForm.set(true);
  }

  openEdit(user: User): void {
    this.editUserId.set(user.id);
    this.showUserForm.set(true);
  }

  openDelete(user: User): void {
    this.deleteTarget.set(user);
    this.showConfirm.set(true);
  }

  closeForm(): void {
    this.showUserForm.set(false);
    this.editUserId.set(undefined);
  }

  onSaved(): void {
    this.usersResource.reload();
  }

  async confirmDelete(): Promise<void> {
    const user = this.deleteTarget();
    if (!user) return;
    this.deleteLoading.set(true);
    try {
      await this.userService.delete(user.id).toPromise();
      this.usersResource.reload();
      this.cancelDelete();
    } finally {
      this.deleteLoading.set(false);
    }
  }

  cancelDelete(): void {
    this.showConfirm.set(false);
    this.deleteTarget.set(null);
  }

  onRoleFilter(role: UserRole | ''): void {
    this.filterRole.set(role);
    this.page.set(1);
  }

  onRegionFilter(region: string): void {
    this.filterRegion.set(region);
    this.page.set(1);
  }

  onNameFilter(name: string): void {
    this.filterName.set(name);
  }

  onPageChange(p: number): void {
    this.page.set(p);
  }
}
