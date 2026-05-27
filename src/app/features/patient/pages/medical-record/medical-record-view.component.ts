// src/app/features/patient/pages/medical-record/medical-record-view.component.ts
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { MedicalRecordService, CreateMedicalRecordDto } from '../../services/medical-record.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { MedicalRecord, BloodType } from '../../../../core/models/medical-record.model';
import { TagInputComponent } from '../../../../shared/components/tag-input/tag-input.component';
import { TranslateModule } from '@ngx-translate/core';

const BLOOD_TYPE_LABEL: Record<BloodType, string> = {
  A_POSITIVE:  'A+',
  A_NEGATIVE:  'A-',
  B_POSITIVE:  'B+',
  B_NEGATIVE:  'B-',
  AB_POSITIVE: 'AB+',
  AB_NEGATIVE: 'AB-',
  O_POSITIVE:  'O+',
  O_NEGATIVE:  'O-',
  UNKNOWN:     'Inconnu',
};

const BLOOD_TYPES: BloodType[] = [
  'A_POSITIVE', 'A_NEGATIVE',
  'B_POSITIVE', 'B_NEGATIVE',
  'AB_POSITIVE', 'AB_NEGATIVE',
  'O_POSITIVE', 'O_NEGATIVE',
  'UNKNOWN',
];

@Component({
  selector: 'pp-medical-record-view',
  standalone: true,
  imports: [FormsModule, DatePipe, TagInputComponent, TranslateModule],
  templateUrl: './medical-record-view.component.html',
})
export class MedicalRecordViewComponent implements OnInit {
  private readonly auth      = inject(AuthService);
  private readonly recordSvc = inject(MedicalRecordService);

  readonly record    = signal<MedicalRecord | null>(null);
  readonly isLoading = signal(true);
  readonly isSaving  = signal(false);
  readonly error     = signal<string | null>(null);
  readonly success   = signal<string | null>(null);

  // Mode : 'view' | 'create' | 'edit'
  readonly mode = signal<'view' | 'create' | 'edit'>('view');

  // Formulaire
  readonly formBloodType      = signal<BloodType>('UNKNOWN');
  readonly formAllergies      = signal<string[]>([]);
  readonly formChronicDiseases = signal<string[]>([]);

  readonly bloodTypeLabel = (type: BloodType) => BLOOD_TYPE_LABEL[type] ?? type;
  readonly bloodTypes     = BLOOD_TYPES;

  async ngOnInit(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(this.recordSvc.getByPatient(patientId));
      this.record.set(res ?? null);
      if (!res) this.mode.set('create');
    } catch {
      this.mode.set('create');
    } finally {
      this.isLoading.set(false);
    }
  }

  startEdit(): void {
    const r = this.record();
    if (!r) return;
    this.formBloodType.set(r.bloodType);
    this.formAllergies.set([...r.allergies]);
    this.formChronicDiseases.set([...r.chronicDiseases]);
    this.error.set(null);
    this.success.set(null);
    this.mode.set('edit');
  }

  cancelEdit(): void {
    this.mode.set('view');
    this.error.set(null);
  }

  async save(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;
    this.isSaving.set(true);
    this.error.set(null);
    this.success.set(null);
    try {
      const dto = {
        bloodType:       this.formBloodType(),
        allergies:       this.formAllergies(),
        chronicDiseases: this.formChronicDiseases(),
      };
      let updated: MedicalRecord;
      if (this.mode() === 'create') {
        updated = await firstValueFrom(
          this.recordSvc.createRecord({ patientId, ...dto }),
        );
      } else {
        updated = await firstValueFrom(
          this.recordSvc.updateRecord(this.record()!.id, dto),
        );
      }
      this.record.set(updated);
      this.mode.set('view');
      this.success.set('Dossier médical mis à jour.');
      setTimeout(() => this.success.set(null), 4000);
    } catch {
      this.error.set('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      this.isSaving.set(false);
    }
  }
}
