// 📁 src/app/features/medical/services/medical-record.service.ts
// ─────────────────────────────────────────────────────────────────────────────
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from '../../../core/http/base-api.service';
import { ApiResponse } from '../../../core/http/api-types';
import { MedicalRecord } from '../../../core/models/medical-record.model';

export interface CreateMedicalRecordDto {
  patientId:          string;
  bloodType?:         string;
  allergies?:         string[];
  chronicConditions?: string[];
}

export interface AddMedicalNoteDto {
  authorId: string;
  content:  string;
}

@Injectable({ providedIn: 'root' })
export class MedicalRecordService extends BaseApiService<MedicalRecord> {
  protected readonly endpoint = '/medical-records';

  // POST /medical-records
  createRecord(dto: CreateMedicalRecordDto): Observable<MedicalRecord> {
    return super.create(dto);
  }

  // GET /medical-records/patient/:patientId
  getByPatientId(patientId: string): Observable<MedicalRecord> {
    return this.http
      .get<ApiResponse<MedicalRecord>>(`${this.baseUrl}/patient/${patientId}`)
      .pipe(map(res => res.data));
  }

  // Alias — patient-detail, medical-record-view appellent getByPatient()
  getByPatient(patientId: string): Observable<MedicalRecord> {
    return this.getByPatientId(patientId);
  }

  // POST /medical-records/patient/:patientId/notes
  addNote(patientId: string, dto: AddMedicalNoteDto): Observable<MedicalRecord> {
    return this.http
      .post<ApiResponse<MedicalRecord>>(
        `${this.baseUrl}/patient/${patientId}/notes`,
        dto,
      )
      .pipe(map(res => res.data));
  }
}
