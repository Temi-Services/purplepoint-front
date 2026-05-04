// user.service.ts corrigé
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../../core/models/user.model';
import { UserRole } from '../../../core/models/roles.enum';
import { map } from 'rxjs/operators';

// Interface pour le wrapper API
interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

// Interface pour les données paginées
interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/users`;

  getPatients(
    page = 1,
    limit = 20,
    region?: string,
  ): Observable<ApiResponse<PaginatedData<User>>> {
    let params = new HttpParams()
      .set('role', UserRole.PATIENT)
      .set('page', page)
      .set('limit', limit);

    if (region) params = params.set('region', region);

    return this.http.get<ApiResponse<PaginatedData<User>>>(this.baseUrl, { params });
  }

  getById(id: string): Observable<User> {
    return this.http.get<ApiResponse<User>>(`${this.baseUrl}/${id}`)
      .pipe(map(response => response.data));
  }
}
