import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { OfflineCallService } from '../../services/offline-call.service';
import { UserService } from '../../../medical/services/user.service';
import { User } from '../../../../core/models/user.model';
import { CallOutcome } from '../../../../core/models/call.model';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-call-log-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './call-log-form.component.html',
})
export class CallLogFormComponent {
  private readonly fb             = inject(FormBuilder);
  private readonly router         = inject(Router);
  private readonly auth           = inject(AuthService);
  private readonly offlineService = inject(OfflineCallService);
  private readonly userService    = inject(UserService);

  readonly isLoading    = signal(false);
  readonly isOnline     = signal(navigator.onLine);
  readonly error        = signal<string | null>(null);
  readonly patientQuery = signal('');
  readonly patients     = signal<User[]>([]);
  readonly isSearching  = signal(false);
  readonly startTime    = Date.now();

  readonly outcomes: { value: CallOutcome; label: string }[] = [
    { value: 'REACHED',            label: 'Contact abouti'         },
    { value: 'NO_ANSWER',          label: 'Pas de réponse'         },
    { value: 'BUSY',               label: 'Occupé'                 },
    { value: 'WRONG_NUMBER',       label: 'Mauvais numéro'         },
    { value: 'CALLBACK_REQUESTED', label: 'Rappel demandé'         },
  ];

  readonly form = this.fb.nonNullable.group({
    patientId: ['', Validators.required],
    outcome:   ['REACHED' as CallOutcome, Validators.required],
    duration:  [0],
    notes:     [''],
  });

  // call-log-form.component.ts
  async searchPatients(query: string): Promise<void> {
    this.patientQuery.set(query);
    if (query.length < 2) {
      this.patients.set([]);
      return;
    }

    this.isSearching.set(true);
    try {
      const res = await firstValueFrom(this.userService.getPatients(1, 10));
      // ✅ Correction : res.data.data au lieu de res.data
      const patientsList = res?.data?.data ?? [];
      const q = query.toLowerCase();
      this.patients.set(
        patientsList.filter(p =>
          `${p.firstName} ${p.lastName}`.toLowerCase().includes(q)
        )
      );
    } catch (error) {
      console.error('Error searching patients:', error);
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
      this.error.set('Erreur lors de l\'enregistrement. Réessayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/employee/dashboard']);
  }
}
