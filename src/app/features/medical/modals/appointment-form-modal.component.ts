// src/app/features/medical/modals/appointment-form-modal.component.ts
import { Component, OnInit, output, input, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { AppointmentService, CreateAppointmentDto } from '../services/appointment.service';
import { AuthService } from '../../../core/auth/auth.service';
import { PatientSearchComponent } from '../../../shared/components/patient-search/patient-search.component';
import { LabelPipe } from '../../../core/pipes/label.pipe';
import { User } from '../../../core/models/user.model';

type AppointmentType = CreateAppointmentDto['type'];

@Component({
  selector: 'pp-appointment-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, PatientSearchComponent, LabelPipe],
  templateUrl: './appointment-form-modal.component.html',
})
export class AppointmentFormModalComponent implements OnInit {
  private readonly fb      = inject(FormBuilder);
  private readonly service = inject(AppointmentService);
  private readonly auth    = inject(AuthService);

  readonly patientId = input<string>('');

  readonly saved  = output<void>();
  readonly closed = output<void>();

  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly types: AppointmentType[] = ['CONSULTATION', 'FOLLOW_UP', 'EMERGENCY', 'HOME_VISIT'];

  readonly form = this.fb.nonNullable.group({
    patientId:   ['', Validators.required],
    type:        ['CONSULTATION' as AppointmentType, Validators.required],
    scheduledAt: ['', Validators.required],
    duration:    [30, [Validators.required, Validators.min(5)]],
    location:    [''],
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
      const { location, ...rest } = this.form.getRawValue();
      await this.service.createAppointment({
        ...rest,
        providerId:  this.auth.currentUser()!.id,
        scheduledAt: new Date(rest.scheduledAt).toISOString(),
        location:    location || undefined,
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
