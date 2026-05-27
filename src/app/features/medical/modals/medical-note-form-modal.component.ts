// src/app/features/medical/modals/medical-note-form-modal.component.ts
import { Component, OnInit, output, input, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { MedicalRecordService } from '../services/medical-record.service';
import { AuthService } from '../../../core/auth/auth.service';
import { PatientSearchComponent } from '../../../shared/components/patient-search/patient-search.component';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'pp-medical-note-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, PatientSearchComponent, TranslateModule],
  templateUrl: './medical-note-form-modal.component.html',
})
export class MedicalNoteFormModalComponent implements OnInit {
  private readonly fb        = inject(FormBuilder);
  private readonly service   = inject(MedicalRecordService);
  private readonly auth      = inject(AuthService);
  private readonly translate = inject(TranslateService);

  readonly patientId = input<string>('');
  readonly saved  = output<void>();
  readonly closed = output<void>();

  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);
  resolvedPatientId  = '';

  readonly form = this.fb.nonNullable.group({
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  ngOnInit(): void {
    if (this.patientId()) {
      this.resolvedPatientId = this.patientId();
    }
  }

  onPatientSelected(patient: User): void { this.resolvedPatientId = patient.id; }
  clearPatient(): void { this.resolvedPatientId = ''; }

  async onSubmit(): Promise<void> {
    if (this.form.invalid || !this.resolvedPatientId) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.error.set(null);
    try {
      await this.service.addNote(this.resolvedPatientId, {
        authorId: this.auth.currentUser()!.id,
        content:  this.form.getRawValue().content,
      }).toPromise();
      this.saved.emit();
      this.closed.emit();
    } catch {
      this.error.set(this.translate.instant('MEDICAL.NOTE_MODAL.ERROR_GENERIC'));
    } finally {
      this.isLoading.set(false);
    }
  }
}
