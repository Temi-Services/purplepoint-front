// src/app/shared/components/patient-search/patient-search.component.ts
import {
  Component,
  inject,
  input,
  output,
  signal,
  OnDestroy,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../../features/medical/services/user.service';
import { User } from '../../../core/models/user.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-patient-search',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './patient-search.component.html',
})
export class PatientSearchComponent implements OnDestroy {
  private readonly userService = inject(UserService);

  readonly placeholder     = input<string>('');
  readonly patientSelected = output<User>();
  readonly patientCleared  = output<void>();

  readonly query           = signal('');
  readonly displayValue    = signal('');
  readonly results         = signal<User[]>([]);
  readonly isSearching     = signal(false);
  readonly showDropdown    = signal(false);
  readonly selectedPatient = signal<User | null>(null);
  readonly touched         = signal(false);

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.displayValue.set(value);
    this.query.set(value);
    this.selectedPatient.set(null);
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
      const res = await firstValueFrom(this.userService.getPatients(1, 50));
      const all = res?.data?.data ?? [];
      const q   = query.toLowerCase();
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
