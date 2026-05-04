import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalMedicationService } from '../../services/medication.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'pp-medication-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './medication-form.component.html',
})
export class MedicationFormComponent implements OnInit {
  private readonly fb      = inject(FormBuilder);
  private readonly router  = inject(Router);
  private readonly medSvc  = inject(MedicalMedicationService);
  private readonly auth    = inject(AuthService);

  readonly id        = input.required<string>();
  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly frequencies = [
    { value: 'ONCE_DAILY',        label: '1× par jour'     },
    { value: 'TWICE_DAILY',       label: '2× par jour'     },
    { value: 'THREE_TIMES_DAILY', label: '3× par jour'     },
    { value: 'WEEKLY',            label: '1× par semaine'  },
    { value: 'AS_NEEDED',         label: 'À la demande'    },
  ];

  readonly form = this.fb.nonNullable.group({
    name:      ['', Validators.required],
    dosage:    ['', Validators.required],
    frequency: ['ONCE_DAILY', Validators.required],
    startDate: ['', Validators.required],
    endDate:   [''],
    notes:     [''],
  });

  ngOnInit() {
    // @ts-ignore
    console.log('MedicationFormComponent id:', this.id());
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    const { name, dosage, frequency, startDate, endDate, notes } =
      this.form.getRawValue();

    try {
      await this.medSvc.prescribe({
        // @ts-ignore
        patientId:    this.id(),
        prescribedBy: this.auth.currentUser()!.id,
        name,
        dosage,
        frequency,
        startDate:    new Date(startDate).toISOString(),
        endDate:      endDate ? new Date(endDate).toISOString() : undefined,
        notes:        notes || undefined,
      }).toPromise();

      // @ts-ignore
      this.router.navigate(['/medical/patients', this.id()]);
    } catch {
      this.error.set('Erreur lors de la prescription. Réessayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    // @ts-ignore
    this.router.navigate(['/medical/patients', this.id()]);
  }
}
