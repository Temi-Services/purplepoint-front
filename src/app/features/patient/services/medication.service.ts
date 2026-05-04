// src/app/features/patient/services/medication.service.ts
import { map } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IntakeStatus, Medication, MedicationIntake } from '../../../core/models/medication.model';
import { Observable } from 'rxjs';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface LogIntakePayload {
  status: IntakeStatus;
  scheduledAt: string;
  takenAt?: string;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class MedicationService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medications`;

  getByPatient(
    patientId: string,
    status: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedData<Medication>> {
    const params = new HttpParams()
      .set('status', status)
      .set('page', page)
      .set('limit', limit);

    return this.http.get<ApiResponse<PaginatedData<Medication>>>(
      `${this.baseUrl}/patient/${patientId}`,
      { params },
    ).pipe(map(response => response.data));  // ← retourne PaginatedData
  }

  logIntake(medicationId: string, payload: LogIntakePayload): Observable<MedicationIntake> {
    return this.http.post<MedicationIntake>(`${this.baseUrl}/${medicationId}/intakes`, payload);
  }
}
