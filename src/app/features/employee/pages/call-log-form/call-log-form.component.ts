// src/app/features/employee/pages/call-log-form/call-log-form.component.ts
import { Component, inject, signal, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';
import { OfflineCallService } from '../../services/offline-call.service';
import { UserService } from '../../../medical/services/user.service';
import { User } from '../../../../core/models/user.model';
import { CallOutcome } from '../../../../core/models/call.model';

@Component({
  selector: 'pp-call-log-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, TranslateModule],
  templateUrl: './call-log-form.component.html',
})
export class CallLogFormComponent {
  private readonly fb             = inject(FormBuilder);
  private readonly router         = inject(Router);
  private readonly auth           = inject(AuthService);
  private readonly offlineService = inject(OfflineCallService);
  private readonly userService    = inject(UserService);
  private readonly translate      = inject(TranslateService);

  readonly isLoading    = signal(false);
  readonly isOnline     = signal(navigator.onLine);
  readonly error        = signal<string | null>(null);
  readonly patientQuery = signal('');
  readonly patients     = signal<User[]>([]);
  readonly isSearching  = signal(false);
  readonly startTime    = Date.now();

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

  readonly submitLabel = computed(() => {
    if (this.isLoading()) return 'EMPLOYEE.CALL_LOG_FORM.SUBMIT_LOADING';
    return this.isOnline()
      ? 'EMPLOYEE.CALL_LOG_FORM.SUBMIT_ONLINE'
      : 'EMPLOYEE.CALL_LOG_FORM.SUBMIT_OFFLINE';
  });

  async searchPatients(query: string): Promise<void> {
    this.patientQuery.set(query);
    if (query.length < 2) {
      this.patients.set([]);
      return;
    }
    this.isSearching.set(true);
    try {
      const res = await firstValueFrom(this.userService.getPatients(1, 10));
      const patientsList = res?.data?.data ?? [];
      const q = query.toLowerCase();
      this.patients.set(
        patientsList.filter(p =>
          `${p.firstName} ${p.lastName}`.toLowerCase().includes(q)
        )
      );
    } catch {
      this.patients.set([]);
    } finally {
      this.isSearching.set(false);
    }
  }

  selectPatient(patient: User): void {
    this.form.patchValue({ patientId: patient.id });
    this.patientQuery.set(`${patient.firstName} ${patient.lastName}`);
    this.patients.set([]);
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);
    const elapsed = Math.round((Date.now() - this.startTime) / 1000);
    const { patientId, outcome, duration, notes } = this.form.getRawValue();
    try {
      await this.offlineService.submit({
        employeeId: this.auth.currentUser()!.id,
        patientId,
        outcome,
        duration:   duration || elapsed,
        notes:      notes || undefined,
        calledAt:   new Date().toISOString(),
      });
      this.router.navigate(['/employee/dashboard']);
    } catch {
      this.error.set(this.translate.instant('EMPLOYEE.CALL_LOG_FORM.ERROR_SAVE'));
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/employee/dashboard']);
  }
}
