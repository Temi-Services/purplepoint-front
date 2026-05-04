export type MedicationFrequency =
  | 'ONCE_DAILY'
  | 'TWICE_DAILY'
  | 'THREE_TIMES_DAILY'
  | 'WEEKLY'
  | 'AS_NEEDED';

export type MedicationStatus = 'ACTIVE' | 'COMPLETED' | 'SUSPENDED';

export type IntakeStatus = 'TAKEN' | 'MISSED' | 'SKIPPED';

export interface Medication {
  id: string;
  patientId: string;
  prescribedBy: string;
  name: string;
  dosage: string;
  frequency: MedicationFrequency;
  startDate: string;
  endDate?: string;
  status: MedicationStatus;
  notes?: string;
}

export interface MedicationIntake {
  id: string;
  medicationId: string;
  status: IntakeStatus;
  scheduledAt: string;
  takenAt?: string;
  note?: string;
}
