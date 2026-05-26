// ─── Enveloppe standard de toutes les réponses API ───────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

// ─── Corps paginé retourné par les endpoints de liste ────────────────────────
export interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ─── Paramètres de pagination passés en query string ─────────────────────────
export interface PaginationParams {
  page?: number;
  limit?: number;
}

// ─── Format d'erreur renvoyé par le backend NestJS ───────────────────────────
export interface ApiError {
  statusCode: number;
  error: string;
  message: string;
  timestamp: string;
  path: string;
}
