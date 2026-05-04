// patient/services/appointment.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Appointment } from '../../../core/models/appointment.model';

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

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/appointments`;

  // medical/services/appointment.service.ts
  getByPatient(
    patientId: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedData<Appointment>> {  // ← retourne directement PaginatedData
    let params = new HttpParams()
      .set('patientId', patientId)
      .set('page', page)
      .set('limit', limit);

    // On pipe pour extraire data du wrapper API
    return this.http.get<ApiResponse<PaginatedData<Appointment>>>(this.baseUrl, { params })
      .pipe(map(response => response.data));
  }
}
