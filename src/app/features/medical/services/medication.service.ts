import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Medication } from '../../../core/models/medication.model';
import { map } from 'rxjs/operators';

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

interface PrescribePayload {
  patientId: string;
  prescribedBy: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class MedicalMedicationService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medications`;

  getByPatient(
    patientId: string,
    status = 'ACTIVE',
    page = 1,
    limit = 20,
  ): Observable<PaginatedResponse<Medication>> {
    const params = new HttpParams()
      .set('status', status)
      .set('page', page)
      .set('limit', limit);

    return this.http.get<ApiResponse<PaginatedResponse<Medication>>>(
      `${this.baseUrl}/patient/${patientId}`,
      { params },
    ).pipe(map(response => response.data));
  }

  prescribe(payload: PrescribePayload): Observable<Medication> {
    return this.http.post<Medication>(this.baseUrl, payload);
  }
}
