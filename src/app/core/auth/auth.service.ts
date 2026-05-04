import { Injectable, computed, signal, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  signIn,
  signOut,
  getCurrentUser,
  fetchAuthSession,
  AuthError,
} from 'aws-amplify/auth';
import { User } from '../models/user.model';
import { UserRole } from '../models/roles.enum';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);

  private readonly _currentUser = signal<User | null>(null);
  private readonly _token       = signal<string | null>(null);
  private readonly _loading     = signal<boolean>(false);

  readonly currentUser    = this._currentUser.asReadonly();
  readonly token          = this._token.asReadonly();
  readonly isLoading      = this._loading.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);
  readonly userRole        = computed(() => this._currentUser()?.role ?? null);

  // Expose loading state as observable for HomeComponent
  readonly isLoading$ = toObservable(this.isLoading);

  hasRole(role: UserRole): boolean {
    return this._currentUser()?.role === role;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const role = this._currentUser()?.role;
    return role ? roles.includes(role) : false;
  }

  /** Appelé au démarrage pour restaurer la session existante */
  async restoreSession(): Promise<void> {
    try {
      this._loading.set(true);
      const session = await fetchAuthSession();
      const idToken = session.tokens?.idToken;
      const accessToken = session.tokens?.accessToken;

      if (!idToken || !accessToken) return;

      const payload  = idToken.payload;
      const rawAccessToken = accessToken.toString();

      const user = this.mapPayloadToUser(payload);
      this.setSession(user, rawAccessToken);
    } catch {
      // Pas de session active — état initial conservé (null)
    } finally {
      this._loading.set(false);
    }
  }

  async login(email: string, password: string): Promise<void> {
    this._loading.set(true);
    try {
      await signIn({ username: email, password });
      await this.restoreSession();
      this.redirectAfterLogin();
      console.log('Login successful', this._currentUser());
    } finally {
      this._loading.set(false);
    }
  }

  async logout(): Promise<void> {
    await signOut();
    this._currentUser.set(null);
    this._token.set(null);
    this.router.navigate(['/login']);
  }

  private redirectAfterLogin(): void {
    const role = this.userRole();
    const roleRouteMap: Record<UserRole, string> = {
      [UserRole.PATIENT]:  '/patient',
      [UserRole.MEDICAL]:  '/medical',
      [UserRole.AIDANT]:   '/patient',
      [UserRole.EMPLOYEE]: '/employee',
      [UserRole.ADMIN]:    '/admin',
      [UserRole.CEO]:      '/ceo',
    };
    this.router.navigate([roleRouteMap[role!] ?? '/unauthorized']);
  }

  private setSession(user: User, token: string): void {
    this._currentUser.set(user);
    this._token.set(token);
  }

  private mapPayloadToUser(payload: Record<string, unknown>): User {
    return {
      id:         payload['custom:userId'] as string,
      cognitoSub: payload['sub'] as string,
      email:      payload['email'] as string,
      firstName:  payload['given_name'] as string ?? '',
      lastName:   payload['family_name'] as string ?? '',
      role:       payload['custom:role'] as UserRole,
      region:     payload['custom:region'] as string | undefined,
      status:     'ACTIVE',
    };
  }
}
