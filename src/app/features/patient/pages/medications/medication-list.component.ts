import { Component, OnInit, inject, signal } from '@angular/core';
import { MedicalMedicationService } from '../../../medical/services/medication.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { Medication } from '../../../../core/models/medication.model';
import { MedicationCardComponent } from '../../components/medication-card/medication-card.component';

@Component({
  selector: 'pp-medication-list',
  standalone: true,
  imports: [MedicationCardComponent],
  templateUrl: './medication-list.component.html',
})
export class MedicationListComponent implements OnInit {
  private readonly auth       = inject(AuthService);
  private readonly medService = inject(MedicalMedicationService);

  readonly medications = signal<Medication[]>([]);
  readonly isLoading   = signal(true);
  readonly activeTab   = signal<'ACTIVE' | 'COMPLETED' | 'SUSPENDED'>('ACTIVE');

  readonly tabs: { key: 'ACTIVE' | 'COMPLETED' | 'SUSPENDED'; label: string }[] = [
    { key: 'ACTIVE',    label: 'En cours'   },
    { key: 'COMPLETED', label: 'Terminés'   },
    { key: 'SUSPENDED', label: 'Suspendus'  },
  ];

  async ngOnInit(): Promise<void> {
    await this.loadMedications();
  }

  async setTab(tab: 'ACTIVE' | 'COMPLETED' | 'SUSPENDED'): Promise<void> {
    this.activeTab.set(tab);
    await this.loadMedications();
  }

  async onTaken(medicationId: string): Promise<void> {
    this.medications.update(meds => meds.filter(m => m.id !== medicationId));
  }

  private async loadMedications(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;

    this.isLoading.set(true);
    try {
      const res = await this.medService
        .getByPatient(patientId, this.activeTab())
        .toPromise();
      this.medications.set(res?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }
}
