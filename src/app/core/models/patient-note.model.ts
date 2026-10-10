// 📁 src/app/core/models/patient-note.model.ts
// ─────────────────────────────────────────────────────────────────────────────
export type NoteType = 'TEXT' | 'VOICE';
export type TranscriptionStatus = 'NOT_REQUESTED' | 'PENDING' | 'COMPLETED' | 'FAILED';

export interface PatientNote {
  id:            string;
  patientId:     string;
  appointmentId: string | null | undefined;
  type:          NoteType;
  content:       string | null | undefined;
  audioUrl:      string | null | undefined; // lien de lecture temporaire (1 h)
  transcribed:   boolean;
  transcriptionStatus: TranscriptionStatus;
  createdAt:     string | Date;
  updatedAt:     string | Date;
}

export interface CreateTextNoteDto {
  content:        string;
  appointmentId?: string;
}
