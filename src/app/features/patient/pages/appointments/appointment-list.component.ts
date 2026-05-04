import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { MedicalAppointmentService } from '../../../medical/services/appointment.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { Appointment } from '../../../../core/models/appointment.model';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'pp-appointment-list',
  standalone: true,
  imports: [AppointmentCardComponent],
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent implements OnInit {
  private readonly auth        = inject(AuthService);
  private readonly apptService = inject(AppointmentService);

  readonly appointments = signal<Appointment[]>([]);
  readonly isLoading    = signal(true);
  readonly activeTab    = signal<'upcoming' | 'past'>('upcoming');

  readonly tabs: { key: 'upcoming' | 'past'; label: string }[] = [
    { key: 'upcoming', label: 'À venir'  },
    { key: 'past',     label: 'Passés'   },
  ];

  readonly filtered = computed(() => {
    const now = new Date();
    return this.appointments().filter(a =>
      this.activeTab() === 'upcoming'
        ? new Date(a.scheduledAt) >= now
        : new Date(a.scheduledAt) < now
    );
  });

  async ngOnInit(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;

    this.isLoading.set(true);
    try {
      // @ts-ignore
      const res = await this.apptService
        .getByPatient(patientId)
        .toPromise();
      this.appointments.set(res?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }

  setTab(tab: 'upcoming' | 'past'): void {
    this.activeTab.set(tab);
  }
}
