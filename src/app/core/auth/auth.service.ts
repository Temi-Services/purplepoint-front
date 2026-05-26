// src/app/core/auth/auth.service.ts
import { Injectable, computed, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { UserRole } from '../models/roles.enum';
import {
  AuthLoginResult,
  LoginResponse,
  NewPasswordChallenge,
  isChallenge,
} from '../models/auth.model';

function decodeJwtPayload(token: string): Record<string, unknown> {
  try {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  } catch {
    return {};
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http       = inject(HttpClient);
  private readonly router     = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly baseUrl    = `${environment.apiUrl}/auth`;

  private readonly _currentUser      = signal<User | null>(null);
  private readonly _accessToken      = signal<string | null>(null);
  private readonly _loading          = signal<boolean>(false);
  private readonly _challengePending = signal<NewPasswordChallenge | null>(null);
  private readonly _initialized      = signal<boolean>(false);

  readonly currentUser      = this._currentUser.asReadonly();
  readonly token            = this._accessToken.asReadonly();
  readonly isLoading        = this._loading.asReadonly();
  readonly initialized      = this._initialized.asReadonly();
  readonly challengePending = this._challengePending.asReadonly();
  readonly isAuthenticated  = computed(() => this._currentUser() !== null);
  readonly userRole         = computed(() => this._currentUser()?.role ?? null);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.restoreSession();
    }
    this._initialized.set(true);
  }

  hasRole(role: UserRole): boolean {
    return this._currentUser()?.role === role;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const role = this._currentUser()?.role;
    return role ? roles.includes(role) : false;
  }

  async login(email: string, password: string): Promise<void> {
    this._loading.set(true);
    this._challengePending.set(null);
    try {
      const raw = await firstValueFrom(
        this.http.post<{ success: boolean; data: AuthLoginResult; timestamp: string }>(
          `${this.baseUrl}/login`,
          { username: email, password },
        ),
      );
      const result = raw.data ?? (raw as unknown as AuthLoginResult);
      if (isChallenge(result)) {
        this._challengePending.set(result);
        return;
      }
      this.applyTokens(result);
      this.redirectAfterLogin();
    } finally {
      this._loading.set(false);
    }
  }

  async newPassword(newPassword: string): Promise<void> {
    const challenge = this._challengePending();
    if (!challenge) throw new Error('Aucun challenge en attente.');
    this._loading.set(true);
    try {
      const raw = await firstValueFrom(
        this.http.post<{ success: boolean; data: LoginResponse; timestamp: string }>(
          `${this.baseUrl}/new-password`,
          { email: challenge.email, newPassword, session: challenge.session },
        ),
      );
      const result = raw.data ?? (raw as unknown as LoginResponse);
      this._challengePending.set(null);
      this.applyTokens(result);
      this.redirectAfterLogin();
    } finally {
      this._loading.set(false);
    }
  }

  restoreSession(): void {
    const accessToken = localStorage.getItem('pp_access_token');
    const idToken     = localStorage.getItem('pp_id_token');
    if (!accessToken) return;
    const accessPayload = decodeJwtPayload(accessToken);
    const exp           = accessPayload['exp'] as number | undefined;
    if (exp && Date.now() / 1000 > exp) {
      this.clearSession();
      return;
    }
    const idPayload = idToken ? decodeJwtPayload(idToken) : {};
    const merged    = { ...accessPayload, ...idPayload };
    this._currentUser.set(this.mapPayloadToUser(merged));
    this._accessToken.set(accessToken);
  }

  logout(): void {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  private applyTokens(response: LoginResponse): void {
    const accessPayload = decodeJwtPayload(response.accessToken);
    const idPayload     = decodeJwtPayload(response.idToken);
    const merged        = { ...accessPayload, ...idPayload };
    const user          = this.mapPayloadToUser(merged);
    localStorage.setItem('pp_access_token', response.accessToken);
    localStorage.setItem('pp_id_token',     response.idToken);
    this._currentUser.set(user);
    this._accessToken.set(response.accessToken);
  }

  private clearSession(): void {
    localStorage.removeItem('pp_access_token');
    localStorage.removeItem('pp_id_token');
    this._currentUser.set(null);
    this._accessToken.set(null);
    this._challengePending.set(null);
  }

  private redirectAfterLogin(): void {
    const role = this.userRole();
    if (!role) {
      this.router.navigate(['/unauthorized']);
      return;
    }
    const roleRouteMap: Record<UserRole, string> = {
      [UserRole.PATIENT]:  '/patient',
      [UserRole.MEDICAL]:  '/medical',
      [UserRole.AIDANT]:   '/patient',
      [UserRole.EMPLOYEE]: '/employee',
      [UserRole.ADMIN]:    '/admin',
      [UserRole.CEO]:      '/ceo',
    };
    const route = roleRouteMap[role];
    if (!route) {
      this.router.navigate(['/unauthorized']);
      return;
    }
    this.router.navigate([route]);
  }

  private mapPayloadToUser(payload: Record<string, unknown>): User {
    const decode = (val: unknown): string => {
      const str = String(val ?? '');
      try { return decodeURIComponent(escape(str)); } catch { return str; }
    };
    const role = (payload['custom:role'] ?? payload['role']) as UserRole | undefined;
    const id   = (payload['custom:userId'] ?? payload['sub']) as string;
    return {
      id,
      cognitoSub: payload['sub']        as string,
      email:      payload['email']      as string,
      firstName:  decode(payload['given_name']  ?? payload['name'] ?? ''),
      lastName:   decode(payload['family_name'] ?? ''),
      role:       role!,
      region:     payload['custom:region'] ? decode(payload['custom:region']) : undefined,
      status:     'ACTIVE',
    };
  }
}
