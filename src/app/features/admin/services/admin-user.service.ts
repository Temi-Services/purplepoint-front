import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../../core/models/user.model';
import { UserRole } from '../../../core/models/roles.enum';

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

interface CreateUserPayload {
  cognitoSub: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  region?: string;
}

interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  phone?: string;
  region?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}

@Injectable({ providedIn: 'root' })
export class AdminUserService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/users`;

  getAll(
    page = 1,
    limit = 20,
    role?: UserRole,
    region?: string,
  ): Observable<ApiResponse<PaginatedData<User>>> {
    let params = new HttpParams()
      .set('page', page)
      .set('limit', limit);

    if (role)   params = params.set('role', role);
    if (region) params = params.set('region', region);

    return this.http.get<ApiResponse<PaginatedData<User>>>(this.baseUrl, { params });
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateUserPayload): Observable<User> {
    return this.http.post<User>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateUserPayload): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
