// 📁 src/app/features/patient/pages/medications/medication-list.component.ts

import { Component, OnInit, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MedicationService } from '../../services/medication.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { Medication, MedicationStatus } from '../../../../core/models/medication.model';
import { MedicationCardComponent } from '../../components/medication-card/medication-card.component';

@Component({
  selector: 'pp-medication-list',
  imports: [MedicationCardComponent],
  templateUrl: './medication-list.component.html',
})
export class MedicationListComponent implements OnInit {
  private readonly auth       = inject(AuthService);
  private readonly medService = inject(MedicationService);

  readonly medications = signal<Medication[]>([]);
  readonly isLoading   = signal(true);
  readonly activeTab   = signal<MedicationStatus>('ACTIVE');

  readonly tabs: { key: MedicationStatus; label: string }[] = [
    { key: 'ACTIVE',       label: 'En cours'  },
    { key: 'COMPLETED',    label: 'Terminés'  },
    { key: 'DISCONTINUED', label: 'Arrêtés'   },
  ];

  async ngOnInit(): Promise<void> {
    await this.loadMedications();
  }

  async setTab(tab: MedicationStatus): Promise<void> {
    this.activeTab.set(tab);
    await this.loadMedications();
  }

  onTaken(medicationId: string): void {
    this.medications.update(meds => meds.filter(m => m.id !== medicationId));
  }

  private async loadMedications(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;

    this.isLoading.set(true);
    try {
      // getByPatient accepte (patientId, status) — retourne PaginatedData
      const res = await firstValueFrom(
        this.medService.getByPatient(patientId, this.activeTab())
      );
      this.medications.set(res?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }
}
