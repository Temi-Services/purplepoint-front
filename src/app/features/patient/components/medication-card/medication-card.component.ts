// src/app/features/patient/components/medication-card/medication-card.component.ts
import { Component, input, output, inject, signal, OnInit, computed } from '@angular/core';
import { Medication } from '../../../../core/models/medication.model';
import { MedicationService } from '../../services/medication.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LabelPipe } from '../../../../core/pipes/label.pipe';

const FREQUENCY_LABEL: Record<string, string> = {
  ONCE_DAILY:        '1× par jour',
  TWICE_DAILY:       '2× par jour',
  THREE_TIMES_DAILY: '3× par jour',
  WEEKLY:            '1× par semaine',
  AS_NEEDED:         'À la demande',
};

function isSameDay(date: string | Date): boolean {
  const d   = new Date(date);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth()    === now.getMonth()    &&
    d.getDate()     === now.getDate()
  );
}

@Component({
  selector: 'pp-medication-card',
  standalone: true,
  imports: [ConfirmDialogComponent, TranslateModule, LabelPipe],
  templateUrl: './medication-card.component.html',
})
export class MedicationCardComponent implements OnInit {

  private readonly medService = inject(MedicationService);
  private readonly translate = inject(TranslateService);

  readonly medication = input.required<Medication>();
  readonly taken      = output<string>();

  readonly frequencyLabel = (freq: string) => FREQUENCY_LABEL[freq] ?? freq;

  readonly showConfirm = signal(false);
  readonly isLoading   = signal(false);
  readonly takenToday  = signal(false);

  readonly confirmMessage = computed(() =>
    this.translate.instant('PATIENT.MED_CARD.CONFIRM_MESSAGE', {
      name:   this.medication().name,
      dosage: this.medication().dosage,
    })
  );

  ngOnInit(): void {
    const alreadyTaken = this.medication().intakes?.some(
      i => i.status === 'TAKEN' && isSameDay(i.scheduledAt),
    ) ?? false;
    this.takenToday.set(alreadyTaken);
  }

  openConfirm(): void {
    this.showConfirm.set(true);
  }

  cancelConfirm(): void {
    this.showConfirm.set(false);
  }

  async confirmTaken(): Promise<void> {
    this.showConfirm.set(false);
    this.isLoading.set(true);
    const med     = this.medication();
    const now     = new Date();
    const dateStr = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    try {
      await this.medService.logIntake(med.id, {
        status:      'TAKEN',
        scheduledAt: now.toISOString(),
        takenAt:     now.toISOString(),
        note: this.translate.instant('PATIENT.MED_CARD.INTAKE_NOTE', {
          date: now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
        }),
      }).toPromise();
      this.takenToday.set(true);
      this.taken.emit(med.id);
    } catch (err: any) {
      if (err?.error?.statusCode === 422) {
        // Le backend dit qu'une prise existe déjà — on met à jour l'état local
        this.takenToday.set(true);
      }
    } finally {
      this.isLoading.set(false);
    }
  }
}
