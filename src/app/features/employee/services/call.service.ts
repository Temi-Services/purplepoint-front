import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from '../../../core/http/base-api.service';
import { ApiResponse, PaginatedData } from '../../../core/http/api-types';
import { Call, CallOutcome, CreateCallPayload } from '../../../core/models/call.model';

export interface ListCallsParams {
  page?:       number;
  limit?:      number;
  employeeId?: string;
  patientId?:  string;
  date?:       string;   // ISO date YYYY-MM-DD — filtre sur calledAt
  outcome?:    CallOutcome;
}

@Injectable({ providedIn: 'root' })
export class CallService extends BaseApiService<Call> {
  protected readonly endpoint = '/calls';

  // ─── GET /calls?page=&limit=&employeeId=&patientId=&date=&outcome= ────────
  override getAll(params: ListCallsParams = {}): Observable<PaginatedData<Call>> {
    return super.getAll(params);
  }

  // ─── GET /calls/:id ───────────────────────────────────────────────────────
  override getById(id: string): Observable<Call> {
    return super.getById(id);
  }

  // ─── POST /calls ──────────────────────────────────────────────────────────
  // body : { employeeId, patientId, outcome, duration?, notes?, calledAt }
  createCall(dto: CreateCallPayload): Observable<Call> {
    return super.create(dto);
  }

  // ─── Alias de rétrocompatibilité ───────────────────────────────────────────
  // call-history.component appellait getByEmployee(employeeId, page, limit)
  getByEmployee(employeeId: string, page = 1, limit = 20): Observable<PaginatedData<Call>> {
    return this.getAll({ employeeId, page, limit });
  }
}
