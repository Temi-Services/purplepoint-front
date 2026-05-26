// 📁 src/app/features/medical/services/medication.service.ts
// ─────────────────────────────────────────────────────────────────────────────
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from '../../../core/http/base-api.service';
import { ApiResponse, PaginatedData } from '../../../core/http/api-types';
import {
  Medication,
  MedicationFrequency,
  MedicationStatus,
  IntakeStatus,
} from '../../../core/models/medication.model';

export interface PrescribeMedicationDto {
  patientId:    string;           // UUID du patient
  prescribedBy: string;           // UUID du médecin (auth.currentUser().id)
  name:         string;
  dosage:       string;
  frequency:    'ONCE_DAILY' | 'TWICE_DAILY' | 'THREE_TIMES_DAILY' | 'WEEKLY' | 'AS_NEEDED';
  startDate:    string;           // format date-time ISO
  endDate?:     string;           // format date-time ISO (optionnel)
  notes?:       string;
}

export interface LogIntakeDto {
  status:      IntakeStatus;
  scheduledAt: string;
  takenAt?:    string;
  note?:       string;
}

export interface ListMedicationsParams {
  page?:   number;
  limit?:  number;
  status?: MedicationStatus;
}

export interface IntakeResult {
  id:          string;
  status:      string;
  scheduledAt: string;
}

@Injectable({ providedIn: 'root' })
export class MedicationService extends BaseApiService<Medication> {
  protected readonly endpoint = '/medications';

  // POST /medications
  prescribe(dto: PrescribeMedicationDto): Observable<Medication> {
    return super.create(dto);
  }

  // GET /medications/patient/:patientId?page=&limit=&status=
  // Accepte soit un objet ListMedicationsParams, soit un status string direct
  getByPatient(
    patientId: string,
    paramsOrStatus?: ListMedicationsParams | MedicationStatus,
  ): Observable<PaginatedData<Medication>> {
    let p = new HttpParams();

    if (typeof paramsOrStatus === 'string') {
      if (paramsOrStatus) p = p.set('status', paramsOrStatus);
    } else if (paramsOrStatus) {
      if (paramsOrStatus.page)   p = p.set('page',   String(paramsOrStatus.page));
      if (paramsOrStatus.limit)  p = p.set('limit',  String(paramsOrStatus.limit));
      if (paramsOrStatus.status) p = p.set('status', paramsOrStatus.status);
    }

    return this.http
      .get<ApiResponse<PaginatedData<Medication>>>(
        `${this.baseUrl}/patient/${patientId}`,
        { params: p },
      )
      .pipe(map(res => res.data));
  }

  // POST /medications/:id/intakes
  logIntake(medicationId: string, dto: LogIntakeDto): Observable<IntakeResult> {
    return this.http
      .post<ApiResponse<IntakeResult>>(
        `${this.baseUrl}/${medicationId}/intakes`,
        dto,
      )
      .pipe(map(res => res.data));
  }

  // PATCH /medications/:id/discontinue
  discontinue(id: string): Observable<Medication> {
    return this.http
      .patch<ApiResponse<Medication>>(`${this.baseUrl}/${id}/discontinue`, {})
      .pipe(map(res => res.data));
  }
}

// Alias — anciens composants importaient MedicalMedicationService
export { MedicationService as MedicalMedicationService };
