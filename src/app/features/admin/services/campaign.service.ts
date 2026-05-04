import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Campaign, CreateCampaignPayload } from '../../../core/models/campaign.model';

// Ajouter l'interface ApiResponse
interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

// Garder PaginatedResponse pour la structure interne
interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/campaigns`;

  getAll(page = 1, limit = 20): Observable<ApiResponse<PaginatedData<Campaign>>> {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);

    return this.http.get<ApiResponse<PaginatedData<Campaign>>>(this.baseUrl, { params });
  }

  create(payload: CreateCampaignPayload): Observable<Campaign> {
    return this.http.post<Campaign>(this.baseUrl, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
