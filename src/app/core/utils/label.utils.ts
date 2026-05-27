// src/app/core/utils/label.utils.ts
//
// These maps now hold i18n keys instead of hard-coded strings.
// Use the LabelPipe (ppLabel) in templates — it resolves through TranslateService.
// For TS code that needs a translated string at runtime, inject TranslateService directly.

const FREQUENCY_LABELS: Record<string, string> = {
  ONCE_DAILY:        'LABELS.FREQUENCY.ONCE_DAILY',
  TWICE_DAILY:       'LABELS.FREQUENCY.TWICE_DAILY',
  THREE_TIMES_DAILY: 'LABELS.FREQUENCY.THREE_TIMES_DAILY',
  WEEKLY:            'LABELS.FREQUENCY.WEEKLY',
  AS_NEEDED:         'LABELS.FREQUENCY.AS_NEEDED',
};

const BLOOD_TYPE_LABELS: Record<string, string> = {
  A_POSITIVE:  'A+',
  A_NEGATIVE:  'A−',
  B_POSITIVE:  'B+',
  B_NEGATIVE:  'B−',
  AB_POSITIVE: 'AB+',
  AB_NEGATIVE: 'AB−',
  O_POSITIVE:  'O+',
  O_NEGATIVE:  'O−',
  UNKNOWN:     'LABELS.BLOOD_TYPE.UNKNOWN',
};

const APPOINTMENT_TYPE_LABELS: Record<string, string> = {
  CONSULTATION: 'LABELS.APPOINTMENT_TYPE.CONSULTATION',
  FOLLOW_UP:    'LABELS.APPOINTMENT_TYPE.FOLLOW_UP',
  EMERGENCY:    'LABELS.APPOINTMENT_TYPE.EMERGENCY',
  HOME_VISIT:   'LABELS.APPOINTMENT_TYPE.HOME_VISIT',
};

const APPOINTMENT_STATUS_LABELS: Record<string, string> = {
  PENDING:   'LABELS.APPOINTMENT_STATUS.PENDING',
  CONFIRMED: 'LABELS.APPOINTMENT_STATUS.CONFIRMED',
  CANCELLED: 'LABELS.APPOINTMENT_STATUS.CANCELLED',
  COMPLETED: 'LABELS.APPOINTMENT_STATUS.COMPLETED',
  NO_SHOW:   'LABELS.APPOINTMENT_STATUS.NO_SHOW',
};

const MEDICATION_STATUS_LABELS: Record<string, string> = {
  ACTIVE:       'LABELS.MEDICATION_STATUS.ACTIVE',
  DISCONTINUED: 'LABELS.MEDICATION_STATUS.DISCONTINUED',
  COMPLETED:    'LABELS.MEDICATION_STATUS.COMPLETED',
};

const INTAKE_STATUS_LABELS: Record<string, string> = {
  TAKEN:   'LABELS.INTAKE_STATUS.TAKEN',
  MISSED:  'LABELS.INTAKE_STATUS.MISSED',
  SKIPPED: 'LABELS.INTAKE_STATUS.SKIPPED',
};

const ROLE_LABELS: Record<string, string> = {
  PATIENT:  'LABELS.ROLE.PATIENT',
  MEDICAL:  'LABELS.ROLE.MEDICAL',
  ADMIN:    'LABELS.ROLE.ADMIN',
  EMPLOYEE: 'LABELS.ROLE.EMPLOYEE',
  CEO:      'LABELS.ROLE.CEO',
  AIDANT:   'LABELS.ROLE.AIDANT',
};

const USER_STATUS_LABELS: Record<string, string> = {
  ACTIVE:    'LABELS.USER_STATUS.ACTIVE',
  INACTIVE:  'LABELS.USER_STATUS.INACTIVE',
  SUSPENDED: 'LABELS.USER_STATUS.SUSPENDED',
};

const CALL_OUTCOME_LABELS: Record<string, string> = {
  REACHED:            'LABELS.CALL_OUTCOME.REACHED',
  NO_ANSWER:          'LABELS.CALL_OUTCOME.NO_ANSWER',
  BUSY:               'LABELS.CALL_OUTCOME.BUSY',
  WRONG_NUMBER:       'LABELS.CALL_OUTCOME.WRONG_NUMBER',
  CALLBACK_REQUESTED: 'LABELS.CALL_OUTCOME.CALLBACK_REQUESTED',
};

const CAMPAIGN_STATUS_LABELS: Record<string, string> = {
  DRAFT:     'LABELS.CAMPAIGN_STATUS.DRAFT',
  SCHEDULED: 'LABELS.CAMPAIGN_STATUS.SCHEDULED',
  SENT:      'LABELS.CAMPAIGN_STATUS.SENT',
  CANCELLED: 'LABELS.CAMPAIGN_STATUS.CANCELLED',
};

const NOTE_TYPE_LABELS: Record<string, string> = {
  TEXT:  'LABELS.NOTE_TYPE.TEXT',
  VOICE: 'LABELS.NOTE_TYPE.VOICE',
};

// Returns the i18n key for a given enum value.
// The key is then translated by the LabelPipe (ppLabel) via TranslateService.
function keyFor(map: Record<string, string>, value: string | null | undefined): string {
  if (!value) return '';
  return map[value] ?? value;
}

export const label = {
  frequency:         (v: string | null | undefined) => keyFor(FREQUENCY_LABELS, v),
  bloodType:         (v: string | null | undefined) => keyFor(BLOOD_TYPE_LABELS, v),
  appointmentType:   (v: string | null | undefined) => keyFor(APPOINTMENT_TYPE_LABELS, v),
  appointmentStatus: (v: string | null | undefined) => keyFor(APPOINTMENT_STATUS_LABELS, v),
  medicationStatus:  (v: string | null | undefined) => keyFor(MEDICATION_STATUS_LABELS, v),
  intakeStatus:      (v: string | null | undefined) => keyFor(INTAKE_STATUS_LABELS, v),
  role:              (v: string | null | undefined) => keyFor(ROLE_LABELS, v),
  userStatus:        (v: string | null | undefined) => keyFor(USER_STATUS_LABELS, v),
  callOutcome:       (v: string | null | undefined) => keyFor(CALL_OUTCOME_LABELS, v),
  campaignStatus:    (v: string | null | undefined) => keyFor(CAMPAIGN_STATUS_LABELS, v),
  noteType:          (v: string | null | undefined) => keyFor(NOTE_TYPE_LABELS, v),
};
