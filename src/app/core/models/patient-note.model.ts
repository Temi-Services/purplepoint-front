// 📁 src/app/core/models/patient-note.model.ts
// ─────────────────────────────────────────────────────────────────────────────
export type NoteType = 'TEXT' | 'VOICE';

export interface PatientNote {
  id:            string;
  patientId:     string;
  appointmentId: string | null | undefined;
  type:          NoteType;
  content:       string | null | undefined;
  audioUrl:      string | null | undefined;
  transcribed:   boolean;
  createdAt:     string | Date;
  updatedAt:     string | Date;
}

export interface CreateTextNoteDto {
  content:        string;
  appointmentId?: string;
}
