import { inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedData, PaginationParams } from './api-types';

/**
 * Service abstrait générique.
 *
 * Usage : étendre cette classe dans chaque feature service et déclarer `endpoint`.
 *
 * ```typescript
 * @Injectable({ providedIn: 'root' })
 * export class AdminUserService extends BaseApiService<User> {
 *   protected readonly endpoint = '/users';
 * }
 * ```
 *
 * Surcharger n'importe quelle méthode avec `override` pour un comportement custom
 * (endpoint imbriqué, mapping de réponse atypique, headers supplémentaires, etc.)
 */
export abstract class BaseApiService<T> {
  /** Chemin relatif à `environment.apiUrl`, ex. '/users' ou '/campaigns' */
  protected abstract readonly endpoint: string;

  protected readonly http = inject(HttpClient);

  /** URL de base calculée à partir de l'environnement + endpoint */
  protected get baseUrl(): string {
    return `${environment.apiUrl}${this.endpoint}`;
  }

  // ─── Lecture paginée ──────────────────────────────────────────────────────
  /**
   * GET /endpoint?page=&limit=&...filtres
   *
   * Le type `object` (au lieu de `Record<string, unknown>`) permet aux sous-classes
   * de passer leurs propres interfaces typées sans avoir à ajouter une index signature.
   * Les valeurs sont converties en string via `Object.entries` + `String()`.
   */
  getAll(params: object = {}): Observable<PaginatedData<T>> {
    const entries = Object.entries(params) as [string, unknown][];
    const page    = (params as Record<string, unknown>)['page']  ?? 1;
    const limit   = (params as Record<string, unknown>)['limit'] ?? 20;

    let httpParams = new HttpParams()
      .set('page',  String(page))
      .set('limit', String(limit));

    for (const [key, value] of entries) {
      if (key === 'page' || key === 'limit') continue;
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    }

    return this.http
      .get<ApiResponse<PaginatedData<T>>>(this.baseUrl, { params: httpParams })
      .pipe(map((res) => res.data));
  }

  // ─── Lecture unitaire ─────────────────────────────────────────────────────
  /** GET /endpoint/:id */
  getById(id: string): Observable<T> {
    return this.http
      .get<ApiResponse<T>>(`${this.baseUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  // ─── Création ─────────────────────────────────────────────────────────────
  /** POST /endpoint */
  create<Dto>(dto: Dto): Observable<T> {
    return this.http
      .post<ApiResponse<T>>(this.baseUrl, dto)
      .pipe(map((res) => res.data));
  }

  // ─── Mise à jour partielle ────────────────────────────────────────────────
  /** PATCH /endpoint/:id */
  update<Dto>(id: string, dto: Dto): Observable<T> {
    return this.http
      .patch<ApiResponse<T>>(`${this.baseUrl}/${id}`, dto)
      .pipe(map((res) => res.data));
  }

  // ─── Suppression ──────────────────────────────────────────────────────────
  /** DELETE /endpoint/:id */
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // ─── Upload multipart ─────────────────────────────────────────────────────
  /**
   * POST /endpoint/:subpath
   * Utilisé pour les uploads de fichiers (ex. notes vocales).
   */
  upload(subpath: string, formData: FormData): Observable<T> {
    return this.http
      .post<ApiResponse<T>>(`${this.baseUrl}/${subpath}`, formData)
      .pipe(map((res) => res.data));
  }
}
