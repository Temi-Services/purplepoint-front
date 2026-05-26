import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../../core/http/base-api.service';
import { PaginatedData } from '../../../core/http/api-types';
import { User, CreateUserDto, UpdateUserDto } from '../../../core/models/user.model';
import { UserRole } from '../../../core/models/roles.enum';

export interface ListUsersParams {
  page?:   number;
  limit?:  number;
  role?:   UserRole;
  region?: string;
}

@Injectable({ providedIn: 'root' })
export class AdminUserService extends BaseApiService<User> {
  protected readonly endpoint = '/users';

  // ─── GET /users?page=&limit=&role=&region= ────────────────────────────────
  override getAll(params: ListUsersParams = {}): Observable<PaginatedData<User>> {
    return super.getAll(params);
  }

  // ─── GET /users/:id ───────────────────────────────────────────────────────
  override getById(id: string): Observable<User> {
    return super.getById(id);
  }

  // ─── POST /users  (ADMIN only) ────────────────────────────────────────────
  // body : { email, firstName, lastName, phone?, role, region? }
  createUser(dto: CreateUserDto): Observable<User> {
    return super.create(dto);
  }

  // ─── PATCH /users/:id ─────────────────────────────────────────────────────
  // body : { firstName?, lastName?, phone?, status?, region? }
  updateUser(id: string, dto: UpdateUserDto): Observable<User> {
    return super.update(id, dto);
  }

  // ─── DELETE /users/:id  (soft delete) ────────────────────────────────────
  deleteUser(id: string): Observable<void> {
    return super.delete(id);
  }
}
