// src/app/features/medical/pages/patient-detail/patient-detail.component.ts
import { Component, OnInit, inject, signal, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { AdminUserService } from '../../../admin/services/admin-user.service';
import { MedicalRecordService } from '../../services/medical-record.service';
import { MedicationService } from '../../services/medication.service';
import { AppointmentService } from '../../services/appointment.service';
import { User } from '../../../../core/models/user.model';
import { MedicalRecord } from '../../../../core/models/medical-record.model';
import { Medication } from '../../../../core/models/medication.model';
import { Appointment } from '../../../../core/models/appointment.model';
import { AdherenceBadgeComponent } from '../../../patient/components/adherence-badge/adherence-badge';
import { LabelPipe } from '../../../../core/pipes/label.pipe';
import { AppointmentFormModalComponent } from '../../modals/appointment-form-modal.component';
import { MedicationFormModalComponent } from '../../modals/medication-form-modal.component';
import { MedicalNoteFormModalComponent } from '../../modals/medical-note-form-modal.component';

type Tab = 'record' | 'medications' | 'appointments' | 'notes';

@Component({
  selector: 'pp-patient-detail',
  imports: [
    RouterLink, DatePipe, TranslateModule, AdherenceBadgeComponent, LabelPipe,
    AppointmentFormModalComponent,
    MedicationFormModalComponent,
    MedicalNoteFormModalComponent,
  ],
  templateUrl: './patient-detail.component.html',
})
export class PatientDetailComponent implements OnInit {
  private readonly userService = inject(AdminUserService);
  private readonly recordSvc   = inject(MedicalRecordService);
  private readonly medSvc      = inject(MedicationService);
  private readonly apptSvc     = inject(AppointmentService);
  private readonly translate   = inject(TranslateService);

  readonly id = input.required<string>();

  readonly patient      = signal<User | null>(null);
  readonly record       = signal<MedicalRecord | null>(null);
  readonly medications  = signal<Medication[]>([]);
  readonly appointments = signal<Appointment[]>([]);
  readonly isLoading    = signal(true);
  readonly activeTab    = signal<Tab>('record');

  readonly showApptModal = signal(false);
  readonly showMedModal  = signal(false);
  readonly showNoteModal = signal(false);

  readonly adherenceScore = computed(() => {
    const meds = this.medications();
    if (meds.length === 0) return 0;
    const active = meds.filter(m => m.status === 'ACTIVE').length;
    return Math.round((active / meds.length) * 100);
  });

  readonly tabs: { key: Tab; labelKey: string }[] = [
    { key: 'record',       labelKey: 'MEDICAL.PATIENT_DETAIL.TAB_RECORD' },
    { key: 'medications',  labelKey: 'MEDICAL.PATIENT_DETAIL.TAB_MEDICATIONS' },
    { key: 'appointments', labelKey: 'MEDICAL.PATIENT_DETAIL.TAB_APPOINTMENTS' },
    { key: 'notes',        labelKey: 'MEDICAL.PATIENT_DETAIL.TAB_NOTES' },
  ];

  async ngOnInit(): Promise<void> {
    const id = this.id();
    this.isLoading.set(true);
    try {
      const [patient, record, meds, appts] = await Promise.all([
        firstValueFrom(this.userService.getById(id)),
        firstValueFrom(this.recordSvc.getByPatient(id)),
        firstValueFrom(this.medSvc.getByPatient(id)),
        firstValueFrom(this.apptSvc.getByPatient(id)),
      ]);
      this.patient.set(patient ?? null);
      this.record.set(record  ?? null);
      this.medications.set(meds?.data   ?? []);
      this.appointments.set(appts?.data ?? []);
    } catch (err) {
      console.error('Error loading patient detail:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  setTab(tab: Tab): void { this.activeTab.set(tab); }

  async onModalSaved(): Promise<void> {
    this.showApptModal.set(false);
    this.showMedModal.set(false);
    this.showNoteModal.set(false);
    const id = this.id();
    const [meds, appts, record] = await Promise.all([
      firstValueFrom(this.medSvc.getByPatient(id)),
      firstValueFrom(this.apptSvc.getByPatient(id)),
      firstValueFrom(this.recordSvc.getByPatient(id)),
    ]);
    this.medications.set(meds?.data ?? []);
    this.appointments.set(appts?.data ?? []);
    this.record.set(record ?? null);
  }
}
