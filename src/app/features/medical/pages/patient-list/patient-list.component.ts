// src/app/features/medical/pages/patient-list/patient-list.component.ts
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LabelPipe } from '../../../../core/pipes/label.pipe';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-patient-list',
  standalone: true,
  imports: [RouterLink, FormsModule, TranslateModule, LabelPipe],
  templateUrl: './patient-list.component.html',
})
export class PatientListComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly translate   = inject(TranslateService);

  readonly patients  = signal<User[]>([]);
  readonly isLoading = signal(true);
  readonly search    = signal('');
  readonly page      = signal(1);
  readonly total     = signal(0);
  readonly limit     = 20;

  readonly filtered = computed(() => {
    const patientsList = this.patients();
    const q = this.search().toLowerCase().trim();
    if (!q) return patientsList;
    return patientsList.filter(p =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q) ||
      p.region?.toLowerCase().includes(q)
    );
  });

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  readonly totalLabel = computed(() => {
    const t = this.total();
    const key = t <= 1
      ? 'MEDICAL.PATIENT_LIST.SUBTITLE_SINGULAR'
      : 'MEDICAL.PATIENT_LIST.SUBTITLE_PLURAL';
    return this.translate.instant(key, { total: t });
  });

  async ngOnInit(): Promise<void> {
    await this.loadPatients();
  }

  async loadPatients(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(this.userService.getPatients(this.page(), this.limit));
      this.patients.set(res?.data?.data ?? []);
      this.total.set(res?.data?.total ?? 0);
    } catch {
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
