import { Component, OnInit, inject, signal, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MedicalRecordService } from '../../services/medical-record.service';
import { MedicalMedicationService } from '../../services/medication.service';
import { MedicalAppointmentService } from '../../services/appointment.service';
import { User } from '../../../../core/models/user.model';
import { MedicalRecord } from '../../../../core/models/medical-record.model';
import { Medication } from '../../../../core/models/medication.model';
import { Appointment } from '../../../../core/models/appointment.model';
import { AdherenceBadgeComponent } from '../../../patient/components/adherence-badge/adherence-badge';
import { firstValueFrom } from 'rxjs';

type Tab = 'record' | 'medications' | 'appointments' | 'notes';

@Component({
  selector: 'pp-patient-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, AdherenceBadgeComponent],
  templateUrl: './patient-detail.component.html',
})
export class PatientDetailComponent implements OnInit {
  private readonly userService  = inject(UserService);
  private readonly recordSvc    = inject(MedicalRecordService);
  private readonly medSvc       = inject(MedicalMedicationService);
  private readonly apptSvc      = inject(MedicalAppointmentService);

  // withComponentInputBinding() permet de récupérer :id directement
  readonly id = input.required<string>();

  readonly patient      = signal<User | null>(null);
  readonly record       = signal<MedicalRecord | null>(null);
  readonly medications  = signal<Medication[]>([]);
  readonly appointments = signal<Appointment[]>([]);
  readonly isLoading    = signal(true);
  readonly activeTab    = signal<Tab>('record');

  readonly adherenceScore = computed(() => {
    const meds = this.medications();
    if (meds.length === 0) return 0;
    const active = meds.filter(m => m.status === 'ACTIVE').length;
    return Math.round((active / meds.length) * 100);
  });

  readonly tabs: { key: Tab; label: string }[] = [
    { key: 'record',       label: 'Dossier médical' },
    { key: 'medications',  label: 'Traitements'     },
    { key: 'appointments', label: 'Rendez-vous'     },
    { key: 'notes',        label: 'Notes'           },
  ];

  async ngOnInit(): Promise<void> {
    const id = this.id();
    this.isLoading.set(true); // ✅ activer le loader avant les appels
    try {
      const [patient, record, meds, appts] = await Promise.all([
        firstValueFrom(this.userService.getById(id)),
        firstValueFrom(this.recordSvc.getByPatient(id)),
        firstValueFrom(this.medSvc.getByPatient(id)),
        firstValueFrom(this.apptSvc.getByPatient(id)),
      ]);

      this.patient.set(patient ?? null);       // maintenant patient est User
      this.record.set(record ?? null);         // MedicalRecord
      this.medications.set(meds?.data ?? []);  // meds est PaginatedData → .data = tableau
      this.appointments.set(appts?.data ?? []);// appts est PaginatedData → .data = tableau

      console.log('record notes : ', this.record());

    } catch (error) {
      console.error('Error loading patient details', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }
}
