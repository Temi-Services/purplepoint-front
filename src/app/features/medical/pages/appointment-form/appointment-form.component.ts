// 📁 src/app/features/medical/pages/appointment-form/appointment-form.component.ts
// ─────────────────────────────────────────────────────────────────────────────
import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'pp-appointment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
})
export class AppointmentFormComponent {
  private readonly fb      = inject(FormBuilder);
  private readonly router  = inject(Router);
  private readonly apptSvc = inject(AppointmentService);
  private readonly auth    = inject(AuthService);

  readonly id        = input.required<string>();
  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly types = [
    { value: 'CONSULTATION', label: 'Consultation'       },
    { value: 'FOLLOW_UP',    label: 'Suivi'              },
    { value: 'EMERGENCY',    label: 'Urgence'            },
    { value: 'HOME_VISIT',   label: 'Visite à domicile'  },
  ];

  readonly form = this.fb.nonNullable.group({
    type:        ['CONSULTATION', Validators.required],
    scheduledAt: ['', Validators.required],
    duration:    [30, [Validators.required, Validators.min(5)]],
    location:    [''],
    notes:       [''],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    const { type, scheduledAt, duration, location, notes } = this.form.getRawValue();

    try {
      await this.apptSvc.createAppointment({
        patientId:   this.id(),
        providerId:  this.auth.currentUser()!.id,
        type:        type as 'CONSULTATION' | 'FOLLOW_UP' | 'EMERGENCY' | 'HOME_VISIT',
        scheduledAt: new Date(scheduledAt).toISOString(),
        duration,
        location:    location || undefined,
        notes:       notes    || undefined,
      }).toPromise();

      this.router.navigate(['/medical/patients', this.id()]);
    } catch {
      this.error.set('Erreur lors de la création du rendez-vous. Réessayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/medical/patients', this.id()]);
  }
}
