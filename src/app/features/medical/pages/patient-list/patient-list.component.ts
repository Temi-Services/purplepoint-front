import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-patient-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './patient-list.component.html',
})
export class PatientListComponent implements OnInit {
  private readonly userService = inject(UserService);

  readonly patients  = signal<User[]>([]);
  readonly isLoading = signal(true);
  readonly search    = signal('');
  readonly page      = signal(1);
  readonly total     = signal(0);
  readonly limit     = 20;

  // patient-list.component.ts corrigé
  readonly filtered = computed(() => {
    const patientsList = this.patients(); // ← récupérer la valeur du signal
    const q = this.search().toLowerCase().trim();

    if (!q) return patientsList;

    return patientsList.filter(p =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q) ||
      p.region?.toLowerCase().includes(q)
    );
  });

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  async ngOnInit(): Promise<void> {
    await this.loadPatients();
  }

  // patient-list.component.ts
  async loadPatients(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(
        this.userService.getPatients(this.page(), this.limit)
      );
      // ✅ Maintenant res.data.data est correct
      this.patients.set(res?.data?.data ?? []);
      this.total.set(res?.data?.total ?? 0);
    } catch (error) {
      console.error('Error loading patients:', error);
      this.patients.set([]);
      this.total.set(0);
    } finally {
      this.isLoading.set(false);
    }
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadPatients();
  }
}
