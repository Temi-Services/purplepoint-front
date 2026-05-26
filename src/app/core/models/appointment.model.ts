// 📁 src/app/core/models/appointment.model.ts
// ─────────────────────────────────────────────────────────────────────────────
// Enum aligné avec le backend : PENDING | CONFIRMED | CANCELLED | COMPLETED | NO_SHOW
// ⚠️  SCHEDULED n'existe PAS dans l'enum backend — ne pas utiliser

export type AppointmentStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'NO_SHOW';

export type AppointmentType =
  | 'CONSULTATION'
  | 'FOLLOW_UP'
  | 'EMERGENCY'
  | 'HOME_VISIT';

export interface Appointment {
  id:           string;
  patientId:    string;
  providerId:   string;
  type:         AppointmentType;
  status:       AppointmentStatus;
  scheduledAt:  string;
  duration:     number;
  location:     string | null;
  notes:        string | null;
  cancelReason: string | null;
  createdAt:    string;
  updatedAt:    string;
}
