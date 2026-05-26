// src/app/shared/components/patient-search/patient-search.component.ts
import {
  Component,
  inject,
  input,
  output,
  signal,
  computed,
  OnDestroy,
} from '@angular/core';
import { UserService } from '../../../features/medical/services/user.service';
import { User } from '../../../core/models/user.model';
import { firstValueFrom } from 'rxjs';

/**
 * PatientSearchComponent
 *
 * Composant partagé : champ de recherche avec liste déroulante filtrée
 * pour sélectionner un patient par son nom (renvoie l'UUID en output).
 *
 * Usage dans un template parent :
 *   <pp-patient-search
 *     (patientSelected)="onPatientSelected($event)"
 *     (patientCleared)="onPatientCleared()"
 *   />
 *
 * Puis dans le TS parent, écouter patientSelected(user: User | null)
 * pour patcher le formControl patientId.
 */
@Component({
  selector: 'pp-patient-search',
  standalone: true,
  templateUrl: './patient-search.component.html',
})
export class PatientSearchComponent implements OnDestroy {
  private readonly userService = inject(UserService);

  /** Placeholder affiché dans le champ texte */
  readonly placeholder = input<string>('Rechercher un patient…');

  /** Émet le patient sélectionné (ou null si effacé) */
  readonly patientSelected = output<User>();
  readonly patientCleared  = output<void>();

  readonly query          = signal('');
  readonly displayValue   = signal('');
  readonly results        = signal<User[]>([]);
  readonly isSearching    = signal(false);
  readonly showDropdown   = signal(false);
  readonly selectedPatient = signal<User | null>(null);
  readonly touched        = signal(false);

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.displayValue.set(value);
    this.query.set(value);
    this.selectedPatient.set(null); // Reset sélection si l'user retape
    this.showDropdown.set(true);

    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    if (value.length < 2) {
      this.results.set([]);
      return;
    }

    this.debounceTimer = setTimeout(() => this.search(value), 300);
  }

  onFocus(): void {
    this.touched.set(true);
    if (this.results().length > 0) {
      this.showDropdown.set(true);
    }
  }

  onBlur(): void {
    // Léger délai pour laisser le click sur une option s'exécuter avant le blur
    setTimeout(() => this.showDropdown.set(false), 150);
  }

  selectPatient(patient: User): void {
    this.selectedPatient.set(patient);
    this.displayValue.set(`${patient.firstName} ${patient.lastName}`);
    this.query.set('');
    this.results.set([]);
    this.showDropdown.set(false);
    this.patientSelected.emit(patient);
  }

  clear(): void {
    this.selectedPatient.set(null);
    this.displayValue.set('');
    this.query.set('');
    this.results.set([]);
    this.showDropdown.set(false);
    this.patientCleared.emit();
  }

  private async search(query: string): Promise<void> {
    this.isSearching.set(true);
    try {
      // Charge jusqu'à 50 patients puis filtre côté client sur le nom
      const res = await firstValueFrom(this.userService.getPatients(1, 50));
      const all  = res?.data?.data ?? [];
      const q    = query.toLowerCase();
      this.results.set(
        all.filter(p =>
          `${p.firstName} ${p.lastName}`.toLowerCase().includes(q) ||
          p.email.toLowerCase().includes(q)
        )
      );
      this.showDropdown.set(true);
    } catch {
      this.results.set([]);
    } finally {
      this.isSearching.set(false);
    }
  }

  ngOnDestroy(): void {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
  }
}
