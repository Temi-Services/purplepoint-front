// src/app/features/patient/services/medical-record.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from '../../../core/http/base-api.service';
import { ApiResponse } from '../../../core/http/api-types';
import { MedicalRecord, BloodType } from '../../../core/models/medical-record.model';

export interface CreateMedicalRecordDto {
  patientId:       string;
  bloodType?:      BloodType;
  allergies?:      string[];
  chronicDiseases?: string[];
}

export interface UpdateMedicalRecordDto {
  bloodType?:      BloodType;
  allergies?:      string[];
  chronicDiseases?: string[];
}

@Injectable({ providedIn: 'root' })
export class MedicalRecordService extends BaseApiService<MedicalRecord> {
  protected readonly endpoint = '/medical-records';

  createRecord(dto: CreateMedicalRecordDto): Observable<MedicalRecord> {
    return super.create(dto);
  }

  getByPatient(patientId: string): Observable<MedicalRecord> {
    return this.http
      .get<ApiResponse<MedicalRecord>>(`${this.baseUrl}/patient/${patientId}`)
      .pipe(map(res => res.data));
  }

  updateRecord(id: string, dto: UpdateMedicalRecordDto): Observable<MedicalRecord> {
    return this.http
      .patch<ApiResponse<MedicalRecord>>(`${this.baseUrl}/${id}`, dto)
      .pipe(map(res => res.data));
  }

  addNote(patientId: string, dto: { authorId: string; content: string }): Observable<MedicalRecord> {
    return this.http
      .post<ApiResponse<MedicalRecord>>(
        `${this.baseUrl}/patient/${patientId}/notes`,
        dto,
      )
      .pipe(map(res => res.data));
  }
}
