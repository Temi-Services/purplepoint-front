import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MedicalRecord } from '../../../core/models/medical-record.model';

interface AddNotePayload {
  authorId: string;
  content: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

@Injectable({ providedIn: 'root' })
export class MedicalRecordService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medical-records`;

  getByPatient(patientId: string): Observable<MedicalRecord> {
    return this.http.get<ApiResponse<MedicalRecord>>(
      `${this.baseUrl}/patient/${patientId}`,
    ).pipe(map(response => response.data));
  }

  addNote(patientId: string, payload: AddNotePayload): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(
      `${this.baseUrl}/patient/${patientId}/notes`,
      payload,
    );
  }
}
