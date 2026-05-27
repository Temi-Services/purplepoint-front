// 📁 src/app/features/patient/pages/notes/patient-notes.component.ts
// ─────────────────────────────────────────────────────────────────────────────
import {
  Component,
  inject,
  signal,
  computed,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { httpResource } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/auth/auth.service';
import { PatientNoteService } from '../../services/patient-note.service';
import { PatientNote } from '../../../../core/models/patient-note.model';
import { ApiResponse } from '../../../../core/http/api-types';
import { Appointment } from '../../../../core/models/appointment.model';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { CreateNoteModalComponent } from '../../modals/create-note-modal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pp-patient-notes',
  imports: [DatePipe, FormsModule, BadgeComponent, EmptyStateComponent, CreateNoteModalComponent, TranslateModule],
  templateUrl: './patient-notes.component.html',
})
export class PatientNotesComponent {
  private readonly auth        = inject(AuthService);
  private readonly noteService = inject(PatientNoteService);
  private readonly translate = inject(TranslateService);

  readonly patientId = computed(() => this.auth.currentUser()?.id ?? '');
  private readonly ready = computed(() => !!this.patientId());

  // ─── Filtre appointment ───────────────────────────────────────────────────
  readonly filterAppointmentId = signal<string>('');

  // ─── Notes — enveloppé dans { success, data } par le ResponseInterceptor global
  readonly notesResource = httpResource<ApiResponse<PatientNote[]>>(() => {
    if (!this.ready()) return undefined;
    const params: Record<string, string> = {};
    if (this.filterAppointmentId()) params['appointmentId'] = this.filterAppointmentId();
    return {
      url: `${environment.apiUrl}/patients/${this.patientId()}/notes`,
      params,
    };
  });

  // Ajoute ce computed :
  readonly notesCountLabel = computed(() => {
    const n = this.notes().length;
    return n <= 1
      ? this.translate.instant('PATIENT.NOTES.COUNT_SINGULAR', { count: n })
      : this.translate.instant('PATIENT.NOTES.COUNT_PLURAL', { count: n });
  });

  readonly notes = computed(() => {
    const raw = this.notesResource.value() as unknown;

    if (!raw) return [];

    // Extraire le tableau depuis l'enveloppe { success, data: [...] }
    let arr: unknown[] = [];
    if (typeof raw === 'object' && !Array.isArray(raw) && 'data' in (raw as object)) {
      const d = (raw as { data: unknown }).data;
      arr = Array.isArray(d) ? d : [];
    } else if (Array.isArray(raw)) {
      arr = raw;
    }

    // Le backend sérialise la classe PatientNote avec ses props privées sous { props: {...} }
    // On mappe pour obtenir les champs à plat
    return arr.map((item: unknown) => {
      const obj = item as Record<string, unknown>;
      if (obj['props'] && typeof obj['props'] === 'object') {
        return obj['props'] as PatientNote;
      }
      return obj as unknown as PatientNote;
    });
  });
  readonly loading = computed(() => this.notesResource.isLoading());

  // ─── Appointments pour le select ─────────────────────────────────────────
  readonly appointmentsResource = httpResource<ApiResponse<{ data: Appointment[] }>>(() => {
    if (!this.ready()) return undefined;
    return {
      url:    `${environment.apiUrl}/appointments`,
      params: { patientId: this.patientId(), limit: '100' },
    };
  });

  readonly appointments = computed(
    () => this.appointmentsResource.value()?.data?.data ?? [],
  );

  // ─── Modal ────────────────────────────────────────────────────────────────
  readonly showCreateModal = signal(false);

  openCreate(): void  { this.showCreateModal.set(true); }
  closeCreate(): void { this.showCreateModal.set(false); }

  onNoteSaved(): void {
    this.notesResource.reload();
  }

  // ─── Helper affichage temps relatif ──────────────────────────────────────
  timeAgo(dateVal: string | Date | null | undefined): string {
    if (!dateVal) return '';
    const date = typeof dateVal === 'string' ? new Date(dateVal) : dateVal;
    if (isNaN(date.getTime())) return '';
    const diff  = Date.now() - date.getTime();
    const mins  = Math.floor(diff / 60_000);
    const hours = Math.floor(diff / 3_600_000);
    const days  = Math.floor(diff / 86_400_000);
    if (mins  <  1) return this.translate.instant('PATIENT.NOTES.TIME_NOW');
    if (mins  < 60) return this.translate.instant('PATIENT.NOTES.TIME_MINS', { mins });
    if (hours < 24) return this.translate.instant('PATIENT.NOTES.TIME_HOURS', { hours });
    return this.translate.instant('PATIENT.NOTES.TIME_DAYS', { days });
  }
}
