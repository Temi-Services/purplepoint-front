import { Routes } from '@angular/router';

const loadPatientList = () =>
  import('./pages/patient-list/patient-list.component')
    .then(m => m.PatientListComponent);

const loadPatientDetail = () =>
  import('./pages/patient-detail/patient-detail.component')
    .then(m => m.PatientDetailComponent);

const loadMedicationForm = () =>
  import('./pages/medication-form/medication-form.component')
    .then(m => m.MedicationFormComponent);

const loadAppointmentForm = () =>
  import('./pages/appointment-form/appointment-form.component')
    .then(m => m.AppointmentFormComponent);

const loadMedicalNoteForm = () =>
  import('./pages/medical-note-form/medical-note-form.component')
    .then(m => m.MedicalNoteFormComponent);

export const MEDICAL_ROUTES: Routes = [
  { path: '',                           redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients',                   loadComponent: loadPatientList },
  { path: 'patients/:id',               loadComponent: loadPatientDetail },
  { path: 'patients/:id/medications/new',    loadComponent: loadMedicationForm },
  { path: 'patients/:id/appointments/new',   loadComponent: loadAppointmentForm },
  { path: 'patients/:id/notes/new',          loadComponent: loadMedicalNoteForm },
];
