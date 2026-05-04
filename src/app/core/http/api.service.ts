// core/http/api-base.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class ApiBaseService {
  constructor(protected http: HttpClient, protected baseUrl: string) {}

  protected getPaginated<T>(
    params?: HttpParams
  ): Observable<PaginatedData<T>> {
    return this.http.get<ApiResponse<PaginatedData<T>>>(this.baseUrl, { params })
      .pipe(map(res => res.data));
  }

}
