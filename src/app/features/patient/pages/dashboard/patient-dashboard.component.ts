import { Component, inject, computed } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/auth/auth.service';
import { ApiResponse, PaginatedData } from '../../../../core/http/api-types';
import { Medication } from '../../../../core/models/medication.model';
import { Appointment } from '../../../../core/models/appointment.model';
import { PatientNote } from '../../../../core/models/patient-note.model';
import { WelcomeCardComponent } from '../../../../shared/components/welcome-card/welcome-card.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { LabelPipe } from '../../../../core/pipes/label.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pp-patient-dashboard',
  imports: [RouterLink, DatePipe, LabelPipe, WelcomeCardComponent, StatCardComponent, TranslateModule],
  templateUrl: './patient-dashboard.component.html',
})
export class PatientDashboardComponent {

  private readonly auth = inject(AuthService);

  private readonly translate = inject(TranslateService);

  readonly patientId = computed(() => this.auth.currentUser()?.id ?? '');

  readonly userName = computed(() => this.auth.currentUser()?.firstName ?? '');

  readonly subtitle = computed(() => {
    const h = new Date().getHours();
    if (h < 12) return this.translate.instant('PATIENT.DASHBOARD.SUBTITLE_MORNING');
    if (h < 18) return this.translate.instant('PATIENT.DASHBOARD.SUBTITLE_AFTERNOON');
    return this.translate.instant('PATIENT.DASHBOARD.SUBTITLE_EVENING');
  });

  private readonly ready = computed(() => !!this.patientId());

  readonly medsRes = httpResource<ApiResponse<PaginatedData<Medication>>>(() => {
    if (!this.ready()) return undefined;
    return {
      url:    `${environment.apiUrl}/medications/patient/${this.patientId()}`,
      params: { status: 'ACTIVE', limit: '10' },
    };
  });

  readonly appointmentsRes = httpResource<ApiResponse<PaginatedData<Appointment>>>(() => {
    if (!this.ready()) return undefined;
    return {
      url:    `${environment.apiUrl}/appointments`,
      params: { patientId: this.patientId(), status: 'PENDING', limit: '1' },
    };
  });

  // Le backend peut renvoyer PatientNote[] ou ApiResponse<PatientNote[]> selon la version
  readonly notesRes = httpResource<ApiResponse<PatientNote[]> | PatientNote[]>(() => {
    if (!this.ready()) return undefined;
    return { url: `${environment.apiUrl}/patients/${this.patientId()}/notes` };
  });

  readonly statsLoading    = computed(() =>
    this.medsRes.isLoading() || this.appointmentsRes.isLoading() || this.notesRes.isLoading()
  );

  readonly medications     = computed(() => this.medsRes.value()?.data?.data ?? []);
  readonly nextAppointment = computed(() => this.appointmentsRes.value()?.data?.data?.[0] ?? null);
  readonly activeMedsCount = computed(() => this.medsRes.value()?.data?.total ?? 0);

  readonly notes = computed((): PatientNote[] => {
    const raw = this.notesRes.value();
    if (!raw) return [];
    // Tableau direct
    if (Array.isArray(raw)) return raw;
    // Enveloppe { data: [...] }
    const data = (raw as ApiResponse<PatientNote[]>).data;
    if (Array.isArray(data)) return data;
    return [];
  });

  readonly notesThisWeek = computed(() => {
    const weekAgo = Date.now() - 7 * 86_400_000;
    return this.notes().filter(n => new Date(n.createdAt).getTime() > weekAgo).length;
  });
}
