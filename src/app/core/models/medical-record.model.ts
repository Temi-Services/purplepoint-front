export type BloodType =
  | 'A_POSITIVE' | 'A_NEGATIVE'
  | 'B_POSITIVE' | 'B_NEGATIVE'
  | 'AB_POSITIVE' | 'AB_NEGATIVE'
  | 'O_POSITIVE' | 'O_NEGATIVE'
  | 'UNKNOWN';

export interface MedicalNote {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  bloodType: BloodType;
  allergies: string[];
  chronicDiseases: string[];
  notes: MedicalNote[];
}
