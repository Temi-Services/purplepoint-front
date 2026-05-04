import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MedicalRecord } from '../../../core/models/medical-record.model';

@Injectable({ providedIn: 'root' })
export class MedicalRecordService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medical-records`;

  getByPatient(patientId: string): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(
      `${this.baseUrl}/patient/${patientId}`,
    );
  }
}
