import {
  Component,
  inject,
  signal,
  computed,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { httpResource } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/auth/auth.service';
import { ApiResponse, PaginatedData } from '../../../../core/http/api-types';
import { User } from '../../../../core/models/user.model';
import { UserRole } from '../../../../core/models/roles.enum';
import { WelcomeCardComponent } from '../../../../shared/components/welcome-card/welcome-card.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/data-table/data-table.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { UserFormModalComponent } from '../../modals/user-form-modal.component';

@Component({
  selector: 'pp-admin-dashboard',
  imports: [
    RouterLink,
    WelcomeCardComponent,
    StatCardComponent,
    DataTableComponent,
    BadgeComponent,
    UserFormModalComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {
  private readonly auth = inject(AuthService);

  readonly userName = computed(() => this.auth.currentUser()?.firstName ?? '');

  // ─── Stats via httpResource parallèles ────────────────────────────────────
  readonly allUsersRes = httpResource<ApiResponse<PaginatedData<User>>>(() => ({
    url: `${environment.apiUrl}/users`, params: { page: '1', limit: '1' },
  }));
  readonly patientsRes = httpResource<ApiResponse<PaginatedData<User>>>(() => ({
    url: `${environment.apiUrl}/users`, params: { page: '1', limit: '1', role: UserRole.PATIENT },
  }));
  readonly employeesRes = httpResource<ApiResponse<PaginatedData<User>>>(() => ({
    url: `${environment.apiUrl}/users`, params: { page: '1', limit: '1', role: UserRole.EMPLOYEE },
  }));
  readonly campaignsRes = httpResource<ApiResponse<PaginatedData<unknown>>>(() => ({
    url: `${environment.apiUrl}/campaigns`, params: { page: '1', limit: '1' },
  }));

  // ─── Derniers utilisateurs (5 lignes) ─────────────────────────────────────
  readonly recentUsersRes = httpResource<ApiResponse<PaginatedData<User>>>(() => ({
    url: `${environment.apiUrl}/users`, params: { page: '1', limit: '5' },
  }));

  readonly totalUsers     = computed(() => this.allUsersRes.value()?.data?.total    ?? 0);
  readonly totalPatients  = computed(() => this.patientsRes.value()?.data?.total    ?? 0);
  readonly totalEmployees = computed(() => this.employeesRes.value()?.data?.total   ?? 0);
  readonly totalCampaigns = computed(() => this.campaignsRes.value()?.data?.total   ?? 0);
  readonly recentUsers    = computed(() => this.recentUsersRes.value()?.data?.data  ?? []);
  readonly tableLoading   = computed(() => this.recentUsersRes.isLoading());
  readonly statsLoading   = computed(() => this.allUsersRes.isLoading());

  // ─── Colonnes DataTable ────────────────────────────────────────────────────
  readonly nameCell   = viewChild<TemplateRef<{ $implicit: User }>>('nameCell');
  readonly roleCell   = viewChild<TemplateRef<{ $implicit: User }>>('roleCell');
  readonly statusCell = viewChild<TemplateRef<{ $implicit: User }>>('statusCell');

  readonly columns = computed<TableColumn<User>[]>(() => [
    { key: 'firstName', label: 'Utilisateur', template: this.nameCell() },
    { key: 'role',      label: 'Rôle',        template: this.roleCell() },
    { key: 'status',    label: 'Statut',       template: this.statusCell() },
  ]);

  // ─── Modal UserForm ────────────────────────────────────────────────────────
  readonly showUserForm = signal(false);

  openCreate(): void { this.showUserForm.set(true); }
  closeForm(): void  { this.showUserForm.set(false); }

  onUserSaved(): void {
    this.allUsersRes.reload();
    this.recentUsersRes.reload();
    this.showUserForm.set(false);
  }
}
