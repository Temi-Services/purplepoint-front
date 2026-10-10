import { UserRole } from './roles.enum';

// ─── Entité User (lecture) ────────────────────────────────────────────────────
export interface User {
  id:         string;
  email:      string;
  firstName:  string;
  lastName:   string;
  phone?:     string;
  role:       UserRole;
  region?:    string;
  status:     'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  createdAt?: string;
  updatedAt?: string;
}

// ─── DTO Création (POST /users) ───────────────────────────────────────────────
export interface CreateUserDto {
  email:      string;
  firstName:  string;
  lastName:   string;
  phone?:     string;
  role:       UserRole;
  region?:    string;
}

// ─── DTO Mise à jour (PATCH /users/:id) ──────────────────────────────────────
export interface UpdateUserDto {
  firstName?: string;
  lastName?:  string;
  phone?:     string;
  region?:    string;
  status?:    'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}
