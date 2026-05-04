import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Call, CreateCallPayload } from '../../../core/models/call.model';

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
export class CallService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/calls`;

  getByEmployee(
    employeeId: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedData<Call>> {
    const params = new HttpParams()
      .set('employeeId', employeeId)
      .set('page', page)
      .set('limit', limit);

    return this.http.get<ApiResponse<PaginatedData<Call>>>(this.baseUrl, { params })
      .pipe(map(response => response.data));
  }

  create(payload: CreateCallPayload): Observable<Call> {
    return this.http.post<Call>(this.baseUrl, payload);
  }
}
