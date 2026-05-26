// 📁 src/app/core/utils/label.utils.ts
// ─────────────────────────────────────────────────────────────────────────────
// Fonctions de traduction centralisées pour tous les enums backend.
// Utilisation : {{ label.frequency(med.frequency) }}
//               {{ label.bloodType(record.bloodType) }}

// ─── Fréquences médicament ────────────────────────────────────────────────────
const FREQUENCY_LABELS: Record<string, string> = {
  ONCE_DAILY:        '1× par jour',
  TWICE_DAILY:       '2× par jour',
  THREE_TIMES_DAILY: '3× par jour',
  WEEKLY:            '1× par semaine',
  AS_NEEDED:         'À la demande',
};

// ─── Groupes sanguins ─────────────────────────────────────────────────────────
const BLOOD_TYPE_LABELS: Record<string, string> = {
  A_POSITIVE:  'A+',
  A_NEGATIVE:  'A−',
  B_POSITIVE:  'B+',
  B_NEGATIVE:  'B−',
  AB_POSITIVE: 'AB+',
  AB_NEGATIVE: 'AB−',
  O_POSITIVE:  'O+',
  O_NEGATIVE:  'O−',
  UNKNOWN:     'Inconnu',
};

// ─── Types de rendez-vous ─────────────────────────────────────────────────────
const APPOINTMENT_TYPE_LABELS: Record<string, string> = {
  CONSULTATION: 'Consultation',
  FOLLOW_UP:    'Suivi',
  EMERGENCY:    'Urgence',
  HOME_VISIT:   'Visite à domicile',
};

// ─── Statuts de rendez-vous ───────────────────────────────────────────────────
const APPOINTMENT_STATUS_LABELS: Record<string, string> = {
  PENDING:   'En attente',
  CONFIRMED: 'Confirmé',
  CANCELLED: 'Annulé',
  COMPLETED: 'Terminé',
  NO_SHOW:   'Absent',
};

// ─── Statuts médicament ───────────────────────────────────────────────────────
const MEDICATION_STATUS_LABELS: Record<string, string> = {
  ACTIVE:       'Actif',
  DISCONTINUED: 'Arrêté',
  COMPLETED:    'Terminé',
};

// ─── Statuts prise médicament ─────────────────────────────────────────────────
const INTAKE_STATUS_LABELS: Record<string, string> = {
  TAKEN:   'Pris',
  MISSED:  'Manqué',
  SKIPPED: 'Sauté',
};

// ─── Rôles utilisateur ────────────────────────────────────────────────────────
const ROLE_LABELS: Record<string, string> = {
  PATIENT:  'Patient',
  MEDICAL:  'Médecin',
  ADMIN:    'Administrateur',
  EMPLOYEE: 'Employé',
  CEO:      'Directeur',
  AIDANT:   'Aidant',
};

// ─── Statuts utilisateur ──────────────────────────────────────────────────────
const USER_STATUS_LABELS: Record<string, string> = {
  ACTIVE:    'Actif',
  INACTIVE:  'Inactif',
  SUSPENDED: 'Suspendu',
};

// ─── Résultats appels ─────────────────────────────────────────────────────────
const CALL_OUTCOME_LABELS: Record<string, string> = {
  REACHED:            'Contact abouti',
  NO_ANSWER:          'Sans réponse',
  BUSY:               'Occupé',
  WRONG_NUMBER:       'Mauvais numéro',
  CALLBACK_REQUESTED: 'Rappel demandé',
};

// ─── Statuts campagne ─────────────────────────────────────────────────────────
const CAMPAIGN_STATUS_LABELS: Record<string, string> = {
  DRAFT:     'Brouillon',
  SCHEDULED: 'Planifiée',
  SENT:      'Envoyée',
  CANCELLED: 'Annulée',
};

// ─── Types de note ────────────────────────────────────────────────────────────
const NOTE_TYPE_LABELS: Record<string, string> = {
  TEXT:  'Texte',
  VOICE: 'Vocal',
};

// ─── Helper générique ─────────────────────────────────────────────────────────
function translate(map: Record<string, string>, value: string | null | undefined): string {
  if (!value) return '—';
  return map[value] ?? value;
}

// ─── Export objet `label` — utilisation : label.frequency('TWICE_DAILY') ─────
export const label = {
  frequency:         (v: string | null | undefined) => translate(FREQUENCY_LABELS, v),
  bloodType:         (v: string | null | undefined) => translate(BLOOD_TYPE_LABELS, v),
  appointmentType:   (v: string | null | undefined) => translate(APPOINTMENT_TYPE_LABELS, v),
  appointmentStatus: (v: string | null | undefined) => translate(APPOINTMENT_STATUS_LABELS, v),
  medicationStatus:  (v: string | null | undefined) => translate(MEDICATION_STATUS_LABELS, v),
  intakeStatus:      (v: string | null | undefined) => translate(INTAKE_STATUS_LABELS, v),
  role:              (v: string | null | undefined) => translate(ROLE_LABELS, v),
  userStatus:        (v: string | null | undefined) => translate(USER_STATUS_LABELS, v),
  callOutcome:       (v: string | null | undefined) => translate(CALL_OUTCOME_LABELS, v),
  campaignStatus:    (v: string | null | undefined) => translate(CAMPAIGN_STATUS_LABELS, v),
  noteType:          (v: string | null | undefined) => translate(NOTE_TYPE_LABELS, v),
};
