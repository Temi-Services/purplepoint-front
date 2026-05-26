// 📁 src/app/core/models/medication.model.ts
// ─────────────────────────────────────────────────────────────────────────────
// Aligné sur MedicationResponseDto backend

// ⚠️  Backend utilise "Frequency" (pas "MedicationFrequency") et "DISCONTINUED" (pas "SUSPENDED")
export type MedicationFrequency =
  | 'ONCE_DAILY'
  | 'TWICE_DAILY'
  | 'THREE_TIMES_DAILY'
  | 'WEEKLY'
  | 'AS_NEEDED';

export type MedicationStatus =
  | 'ACTIVE'
  | 'DISCONTINUED'   // ⚠️ backend : DISCONTINUED (pas SUSPENDED)
  | 'COMPLETED';

export type IntakeStatus = 'TAKEN' | 'MISSED' | 'SKIPPED';

export interface MedicationIntake {
  id:          string;
  status:      IntakeStatus;
  scheduledAt: string | Date;
  takenAt:     string | Date | null;
  note:        string | null;
}

export interface Medication {
  id:            string;
  patientId:     string;
  prescribedBy:  string;
  name:          string;
  dosage:        string;
  frequency:     MedicationFrequency;
  status:        MedicationStatus;
  startDate:     string | Date;
  endDate:       string | Date | null;
  notes:         string | null;
  adherenceRate: number | null;
  intakes:       MedicationIntake[];
  createdAt:     string | Date;
}
