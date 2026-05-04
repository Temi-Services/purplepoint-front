import { Component, input, output, inject } from '@angular/core';
import { Medication } from '../../../../core/models/medication.model';
import { MedicationService } from '../../services/medication.service';

const FREQUENCY_LABEL: Record<string, string> = {
  ONCE_DAILY:         '1× par jour',
  TWICE_DAILY:        '2× par jour',
  THREE_TIMES_DAILY:  '3× par jour',
  WEEKLY:             '1× par semaine',
  AS_NEEDED:          'À la demande',
};

@Component({
  selector: 'pp-medication-card',
  standalone: true,
  templateUrl: './medication-card.component.html',
})
export class MedicationCardComponent {
  private readonly medService = inject(MedicationService);

  readonly medication = input.required<Medication>();
  readonly taken      = output<string>();

  readonly frequencyLabel = (freq: string) => FREQUENCY_LABEL[freq] ?? freq;

  async markAsTaken(): Promise<void> {
    const med = this.medication();
    // @ts-ignore
    await this.medService.logIntake(med.id, {
      status: 'TAKEN',
      scheduledAt: new Date().toISOString(),
      takenAt: new Date().toISOString(),
    }).toPromise();

    this.taken.emit(med.id);
  }
}
