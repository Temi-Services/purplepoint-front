// src/app/features/employee/modals/call-log-form-modal.component.ts
import { Component, output, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { CallService } from '../services/call.service';
import { AuthService } from '../../../core/auth/auth.service';
import { CallOutcome } from '../../../core/models/call.model';
import { PatientSearchComponent } from '../../../shared/components/patient-search/patient-search.component';
import { User } from '../../../core/models/user.model';

const OUTCOMES: { value: CallOutcome; label: string }[] = [
  { value: 'REACHED',            label: 'Contact abouti'  },
  { value: 'NO_ANSWER',          label: 'Pas de réponse'  },
  { value: 'BUSY',               label: 'Occupé'          },
  { value: 'WRONG_NUMBER',       label: 'Mauvais numéro'  },
  { value: 'CALLBACK_REQUESTED', label: 'Rappel demandé'  },
];

@Component({
  selector: 'pp-call-log-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, PatientSearchComponent],
  templateUrl: './call-log-form-modal.component.html',
})
export class CallLogFormModalComponent {
  private readonly fb      = inject(FormBuilder);
  private readonly service = inject(CallService);
  private readonly auth    = inject(AuthService);

  readonly saved  = output<void>();
  readonly closed = output<void>();

  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);
  readonly outcomes  = OUTCOMES;

  readonly form = this.fb.nonNullable.group({
    patientId: ['', Validators.required],
    outcome:   ['REACHED' as CallOutcome, Validators.required],
    duration:  [0],
    notes:     [''],
  });

  onPatientSelected(patient: User): void {
    this.form.patchValue({ patientId: patient.id });
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.isLoading.set(true);
    this.error.set(null);
    try {
      const { notes, ...rest } = this.form.getRawValue();
      await this.service.create({
        ...rest,
        employeeId: this.auth.currentUser()!.id,
        calledAt:   new Date().toISOString(),
        notes:      notes || undefined,
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
