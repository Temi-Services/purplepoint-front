import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { MedicationService } from '../../services/medication.service';
import { AppointmentService } from '../../services/appointment.service';
import { Medication } from '../../../../core/models/medication.model';
import { Appointment } from '../../../../core/models/appointment.model';
import { MedicationCardComponent } from '../../components/medication-card/medication-card.component';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { AdherenceBadgeComponent } from '../../components/adherence-badge/adherence-badge';

@Component({
  selector: 'pp-patient-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MedicationCardComponent,
    AppointmentCardComponent,
    AdherenceBadgeComponent,
  ],
  templateUrl: './patient-dashboard.component.html',
})
export class PatientDashboardComponent implements OnInit {
  private readonly auth        = inject(AuthService);
  private readonly medService  = inject(MedicationService);
  private readonly apptService = inject(AppointmentService);

  readonly user         = this.auth.currentUser;
  readonly medications  = signal<Medication[]>([]);
  readonly appointments = signal<Appointment[]>([]);
  readonly isLoading    = signal(true);

  readonly todayMedications = computed(() =>
    this.medications().filter(m => m.status === 'ACTIVE').slice(0, 4)
  );

  readonly upcomingAppointments = computed(() =>
    this.appointments()
      .filter(a => new Date(a.scheduledAt) > new Date())
      .slice(0, 3)
  );

  readonly adherenceScore = computed(() => {
    const total = this.medications().length;
    if (total === 0) return 0;
    const active = this.medications().filter(m => m.status === 'ACTIVE').length;
    return Math.round((active / total) * 100);
  });

  async ngOnInit(): Promise<void> {
    const patientId = this.user()?.id;
    if (!patientId) return;

    try {
      const [meds, appts] = await Promise.all([
        this.medService.getByPatient(patientId, 'ACTIVE').toPromise(),
        this.apptService.getByPatient(patientId).toPromise(),
      ]);

      console.log('meds : ', meds);

      this.medications.set(meds?.data ?? []);
      this.appointments.set(appts?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }
}
