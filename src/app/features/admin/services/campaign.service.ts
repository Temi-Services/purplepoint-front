import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../../core/http/base-api.service';
import { PaginatedData } from '../../../core/http/api-types';
import { Campaign, CreateCampaignPayload } from '../../../core/models/campaign.model';

export type CampaignStatus = 'DRAFT' | 'SCHEDULED' | 'SENT' | 'CANCELLED';

export interface ListCampaignsParams {
  page?:         number;
  limit?:        number;
  status?:       CampaignStatus;
  targetRegion?: string;
}

@Injectable({ providedIn: 'root' })
export class CampaignService extends BaseApiService<Campaign> {
  protected readonly endpoint = '/campaigns';

  // ─── GET /campaigns?page=&limit=&status=&targetRegion= ───────────────────
  // Rôles : ADMIN, EMPLOYEE, CEO
  override getAll(params?: ListCampaignsParams): Observable<PaginatedData<Campaign>>;
  // Surcharge positionnelle — anciens composants appellent getAll(page, limit)
  override getAll(page?: number, limit?: number): Observable<PaginatedData<Campaign>>;
  override getAll(
    paramsOrPage: ListCampaignsParams | number = {},
    limit?: number,
  ): Observable<PaginatedData<Campaign>> {
    if (typeof paramsOrPage === 'number') {
      return super.getAll({ page: paramsOrPage, limit: limit ?? 20 });
    }
    return super.getAll(paramsOrPage ?? {});
  }

  // ─── GET /campaigns/:id ───────────────────────────────────────────────────
  override getById(id: string): Observable<Campaign> {
    return super.getById(id);
  }

  // ─── POST /campaigns ──────────────────────────────────────────────────────
  // Rôles : ADMIN, EMPLOYEE, CEO
  // body : { title, message, channel, targetRegion?, targetRole?, scheduledAt? }
  createCampaign(dto: CreateCampaignPayload): Observable<Campaign> {
    return super.create(dto);
  }

  // ─── PATCH /campaigns/:id/send ────────────────────────────────────────────
  // Rôles : ADMIN, CEO
  send(id: string): Observable<Campaign> {
    return this.http
      .patch<Campaign>(`${this.baseUrl}/${id}/send`, {});
  }

  // ─── PATCH /campaigns/:id/cancel ─────────────────────────────────────────
  // Rôles : ADMIN, CEO
  cancel(id: string): Observable<Campaign> {
    return this.http
      .patch<Campaign>(`${this.baseUrl}/${id}/cancel`, {});
  }
}
