import { UserRole } from './roles.enum';

// ─── Entité User (lecture) ────────────────────────────────────────────────────
export interface User {
  id:         string;
  cognitoSub: string;           // conservé en lecture (retourné par le backend)
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
// cognitoSub retiré : le backend le gère en interne via Cognito
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
