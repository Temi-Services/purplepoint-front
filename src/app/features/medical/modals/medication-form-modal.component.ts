// src/app/features/medical/modals/medication-form-modal.component.ts
import { Component, OnInit, output, input, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { MedicationService, PrescribeMedicationDto } from '../services/medication.service';
import { AuthService } from '../../../core/auth/auth.service';
import { PatientSearchComponent } from '../../../shared/components/patient-search/patient-search.component';
import { LabelPipe } from '../../../core/pipes/label.pipe';
import { User } from '../../../core/models/user.model';

type MedicationFrequency = PrescribeMedicationDto['frequency'];

@Component({
  selector: 'pp-medication-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, PatientSearchComponent, LabelPipe],
  templateUrl: './medication-form-modal.component.html',
})
export class MedicationFormModalComponent implements OnInit {
  private readonly fb      = inject(FormBuilder);
  private readonly service = inject(MedicationService);
  private readonly auth    = inject(AuthService);

  readonly patientId = input<string>('');

  readonly saved  = output<void>();
  readonly closed = output<void>();

  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly frequencies: MedicationFrequency[] = [
    'ONCE_DAILY', 'TWICE_DAILY', 'THREE_TIMES_DAILY', 'WEEKLY', 'AS_NEEDED',
  ];

  readonly form = this.fb.nonNullable.group({
    patientId:  ['', Validators.required],
    name:       ['', Validators.required],
    dosage:     ['', Validators.required],
    frequency:  ['ONCE_DAILY' as MedicationFrequency, Validators.required],
    startDate:  ['', Validators.required],
    endDate:    [''],
    notes:      [''],
  });

  ngOnInit(): void {
    if (this.patientId()) {
      this.form.patchValue({ patientId: this.patientId() });
    }
  }

  onPatientSelected(patient: User): void {
    this.form.patchValue({ patientId: patient.id });
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.isLoading.set(true);
    this.error.set(null);
    try {
      const { endDate, notes, ...rest } = this.form.getRawValue();
      await this.service.prescribe({
        ...rest,
        prescribedBy: this.auth.currentUser()!.id,
        startDate:    new Date(rest.startDate).toISOString(),
        endDate:      endDate ? new Date(endDate).toISOString() : undefined,
        notes:        notes   || undefined,
      }).toPromise();
      this.saved.emit();
      this.closed.emit();
    } catch {
      this.error.set('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
