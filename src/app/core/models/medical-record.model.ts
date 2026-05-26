// 📁 src/app/core/models/medical-record.model.ts
// ─────────────────────────────────────────────────────────────────────────────
// Aligné sur MedicalRecordResponseDto backend

export type BloodType =
  | 'A_POSITIVE' | 'A_NEGATIVE'
  | 'B_POSITIVE' | 'B_NEGATIVE'
  | 'AB_POSITIVE' | 'AB_NEGATIVE'
  | 'O_POSITIVE' | 'O_NEGATIVE'
  | 'UNKNOWN';

export interface MedicalNote {
  id:        string;
  authorId:  string;
  content:   string;
  createdAt: string | Date;
}

export interface MedicalRecord {
  id:              string;
  patientId:       string;
  bloodType:       BloodType;
  allergies:       string[];
  chronicDiseases: string[];   // ⚠️ backend retourne chronicDiseases (pas chronicConditions)
  notes:           MedicalNote[];
  createdAt:       string | Date;
  updatedAt:       string | Date;
}
