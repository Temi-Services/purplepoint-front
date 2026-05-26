// 📁 src/app/features/medical/services/appointment.service.ts
// ─────────────────────────────────────────────────────────────────────────────
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseApiService } from '../../../core/http/base-api.service';
import { ApiResponse, PaginatedData } from '../../../core/http/api-types';
import { Appointment, AppointmentStatus, AppointmentType } from '../../../core/models/appointment.model';

export interface CreateAppointmentDto {
  patientId:   string;            // UUID du patient
  providerId:  string;            // UUID du médecin (auth.currentUser().id)
  type:        'CONSULTATION' | 'FOLLOW_UP' | 'EMERGENCY' | 'HOME_VISIT';
  scheduledAt: string;            // format date-time ISO
  duration:    number;            // en minutes
  location?:   string;
  notes?:      string;
}

export interface ListAppointmentsParams {
  page?:       number;
  limit?:      number;
  patientId?:  string;
  providerId?: string;
  status?:     AppointmentStatus;
  from?:       string;
  to?:         string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService extends BaseApiService<Appointment> {
  protected readonly endpoint = '/appointments';

  // GET /appointments?page=&limit=&patientId=&providerId=&status=&from=&to=
  override getAll(params: ListAppointmentsParams = {}): Observable<PaginatedData<Appointment>> {
    return super.getAll(params);
  }

  // GET /appointments/:id
  override getById(id: string): Observable<Appointment> {
    return super.getById(id);
  }

  // POST /appointments
  createAppointment(dto: CreateAppointmentDto): Observable<Appointment> {
    return super.create(dto);
  }

  // Shortcut : GET /appointments?patientId=:id (retourne PaginatedData)
  getByPatientId(patientId: string, params: Omit<ListAppointmentsParams, 'patientId'> = {}): Observable<PaginatedData<Appointment>> {
    return this.getAll({ ...params, patientId });
  }

  // Alias pour patient-detail qui appelle getByPatient(id)
  getByPatient(patientId: string): Observable<PaginatedData<Appointment>> {
    return this.getByPatientId(patientId);
  }

  // PATCH /appointments/:id/confirm
  confirm(id: string): Observable<Appointment> {
    return this.http
      .patch<ApiResponse<Appointment>>(`${this.baseUrl}/${id}/confirm`, {})
      .pipe(map(res => res.data));
  }

  // PATCH /appointments/:id/cancel  body: { reason }
  cancelAppointment(id: string, reason: string): Observable<Appointment> {
    return this.http
      .patch<ApiResponse<Appointment>>(`${this.baseUrl}/${id}/cancel`, { reason })
      .pipe(map(res => res.data));
  }
}

// Alias — anciens composants importaient MedicalAppointmentService
export { AppointmentService as MedicalAppointmentService };
