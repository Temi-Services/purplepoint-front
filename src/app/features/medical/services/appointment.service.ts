import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Appointment } from '../../../core/models/appointment.model';
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

interface CreateAppointmentPayload {
  patientId: string;
  providerId: string;
  type: string;
  scheduledAt: string;
  duration: number;
  location?: string;
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class MedicalAppointmentService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/appointments`;

  // medical/services/appointment.service.ts
  getByPatient(
    patientId: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedResponse<Appointment>> {  // ← retourne directement PaginatedData
    let params = new HttpParams()
      .set('patientId', patientId)
      .set('page', page)
      .set('limit', limit);

    // On pipe pour extraire data du wrapper API
    return this.http.get<ApiResponse<PaginatedResponse<Appointment>>>(this.baseUrl, { params })
      .pipe(map(response => response.data));
  }

  create(payload: CreateAppointmentPayload): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, payload);
  }

  confirm(id: string): Observable<Appointment> {
    return this.http.patch<Appointment>(`${this.baseUrl}/${id}/confirm`, {});
  }

  cancel(id: string, reason: string): Observable<Appointment> {
    return this.http.patch<Appointment>(
      `${this.baseUrl}/${id}/cancel`,
      { reason },
    );
  }
}
