import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { BaseApiService } from '../../../core/http/base-api.service';
import { ApiResponse } from '../../../core/http/api-types';
import { PatientNote, CreateTextNoteDto } from '../../../core/models/patient-note.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PatientNoteService extends BaseApiService<PatientNote> {
  // endpoint non utilisé directement — toutes les URLs sont imbriquées
  protected readonly endpoint = '';

  private base(patientId: string): string {
    return `${environment.apiUrl}/patients/${patientId}/notes`;
  }

  // ─── Lecture ──────────────────────────────────────────────────────────────
  /**
   * GET /patients/:patientId/notes[?appointmentId=]
   * Méthode nommée getNotes (pas override getAll) car la signature
   * est incompatible avec BaseApiService<PatientNote>.getAll().
   */
  getNotes(
    patientId: string,
    params?: { appointmentId?: string },
  ): Observable<PatientNote[]> {
    let httpParams = new HttpParams();
    if (params?.appointmentId) {
      httpParams = httpParams.set('appointmentId', params.appointmentId);
    }
    return this.http
      .get<ApiResponse<PatientNote[]>>(this.base(patientId), { params: httpParams })
      .pipe(map(res => res.data));
  }

  // ─── Mutations ────────────────────────────────────────────────────────────
  /** POST /patients/:patientId/notes/text */
  createText(patientId: string, dto: CreateTextNoteDto): Observable<PatientNote> {
    return this.http
      .post<ApiResponse<PatientNote>>(`${this.base(patientId)}/text`, dto)
      .pipe(map(res => res.data));
  }

  /** POST /patients/:patientId/notes/voice  (multipart/form-data) */
  createVoice(patientId: string, formData: FormData): Observable<PatientNote> {
    return this.http
      .post<ApiResponse<PatientNote>>(`${this.base(patientId)}/voice`, formData)
      .pipe(map(res => res.data));
  }
}
