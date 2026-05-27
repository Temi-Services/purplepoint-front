// src/app/features/employee/modals/call-log-form-modal.component.ts
import { Component, output, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { CallService } from '../services/call.service';
import { AuthService } from '../../../core/auth/auth.service';
import { CallOutcome } from '../../../core/models/call.model';
import { PatientSearchComponent } from '../../../shared/components/patient-search/patient-search.component';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'pp-call-log-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, PatientSearchComponent, TranslateModule],
  templateUrl: './call-log-form-modal.component.html',
})
export class CallLogFormModalComponent {
  private readonly fb        = inject(FormBuilder);
  private readonly service   = inject(CallService);
  private readonly auth      = inject(AuthService);
  private readonly translate = inject(TranslateService);

  readonly saved  = output<void>();
  readonly closed = output<void>();

  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly outcomes: { value: CallOutcome; labelKey: string }[] = [
    { value: 'REACHED',            labelKey: 'LABELS.CALL_OUTCOME.REACHED' },
    { value: 'NO_ANSWER',          labelKey: 'LABELS.CALL_OUTCOME.NO_ANSWER' },
    { value: 'BUSY',               labelKey: 'LABELS.CALL_OUTCOME.BUSY' },
    { value: 'WRONG_NUMBER',       labelKey: 'LABELS.CALL_OUTCOME.WRONG_NUMBER' },
    { value: 'CALLBACK_REQUESTED', labelKey: 'LABELS.CALL_OUTCOME.CALLBACK_REQUESTED' },
  ];

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
      this.error.set(this.translate.instant('EMPLOYEE.CALL_LOG_MODAL.ERROR_GENERIC'));
    } finally {
      this.isLoading.set(false);
    }
  }
}
