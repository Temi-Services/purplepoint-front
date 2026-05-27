// src/app/features/medical/pages/dashboard/medical-dashboard.component.ts
import {
  Component,
  inject,
  computed,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { httpResource } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/auth/auth.service';
import { ApiResponse, PaginatedData } from '../../../../core/http/api-types';
import { User } from '../../../../core/models/user.model';
import { UserRole } from '../../../../core/models/roles.enum';
import { WelcomeCardComponent } from '../../../../shared/components/welcome-card/welcome-card.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/data-table/data-table.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { AppointmentFormModalComponent } from '../../modals/appointment-form-modal.component';
import { MedicalNoteFormModalComponent } from '../../modals/medical-note-form-modal.component';
import { MedicationFormModalComponent } from '../../modals/medication-form-modal.component';

@Component({
  selector: 'pp-medical-dashboard',
  imports: [
    RouterLink,
    TranslateModule,
    WelcomeCardComponent,
    StatCardComponent,
    DataTableComponent,
    BadgeComponent,
    AppointmentFormModalComponent,
    MedicalNoteFormModalComponent,
    MedicationFormModalComponent,
  ],
  templateUrl: './medical-dashboard.component.html',
})
export class MedicalDashboardComponent {
  private readonly auth      = inject(AuthService);
  private readonly translate = inject(TranslateService);

  readonly providerId = computed(() => this.auth.currentUser()?.id ?? '');
  readonly userName   = computed(() => this.auth.currentUser()?.firstName ?? '');
  private readonly ready = computed(() => !!this.providerId());

  readonly patientsRes = httpResource<ApiResponse<PaginatedData<User>>>(() => ({
    url:    `${environment.apiUrl}/users`,
    params: { page: '1', limit: '5', role: UserRole.PATIENT },
  }));

  readonly apptTodayRes = httpResource<ApiResponse<PaginatedData<unknown>>>(() => {
    if (!this.ready()) return undefined;
    const from = new Date(); from.setHours(0, 0, 0, 0);
    const to   = new Date(); to.setHours(23, 59, 59, 999);
    return {
      url:    `${environment.apiUrl}/appointments`,
      params: {
        providerId: this.providerId(),
        from:       from.toISOString(),
        to:         to.toISOString(),
        limit:      '1',
      },
    };
  });

  readonly totalPatients  = computed(() => this.patientsRes.value()?.data?.total  ?? 0);
  readonly totalApptToday = computed(() => this.apptTodayRes.value()?.data?.total ?? 0);
  readonly recentPatients = computed(() => this.patientsRes.value()?.data?.data   ?? []);
  readonly statsLoading   = computed(() => this.patientsRes.isLoading());
  readonly tableLoading   = computed(() => this.patientsRes.isLoading());

  readonly nameCell   = viewChild<TemplateRef<{ $implicit: User }>>('nameCell');
  readonly statusCell = viewChild<TemplateRef<{ $implicit: User }>>('statusCell');

  readonly columns = computed<TableColumn<User>[]>(() => [
    { key: 'firstName', label: this.translate.instant('MEDICAL.COLUMNS.PATIENT'),  template: this.nameCell() },
    { key: 'region',    label: this.translate.instant('MEDICAL.COLUMNS.REGION') },
    { key: 'status',    label: this.translate.instant('MEDICAL.COLUMNS.STATUS'),   template: this.statusCell() },
  ]);

  readonly showAppt = signal(false);
  readonly showNote = signal(false);
  readonly showMed  = signal(false);

  onSaved(): void {
    this.showAppt.set(false);
    this.showNote.set(false);
    this.showMed.set(false);
  }
}
