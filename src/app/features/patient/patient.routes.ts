import { Routes } from '@angular/router';

const loadDashboard = () =>
  import('./pages/dashboard/patient-dashboard.component')
    .then(m => m.PatientDashboardComponent);

const loadMedications = () =>
  import('./pages/medications/medication-list.component')
    .then(m => m.MedicationListComponent);

const loadAppointments = () =>
  import('./pages/appointments/appointment-list.component')
    .then(m => m.AppointmentListComponent);

const loadMedicalRecord = () =>
  import('./pages/medical-record/medical-record-view.component')
    .then(m => m.MedicalRecordViewComponent);

const loadNotes = () =>
  import('./pages/notes/patient-notes.component')
    .then(m => m.PatientNotesComponent);

export const PATIENT_ROUTES: Routes = [
  { path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',      loadComponent: loadDashboard },
  { path: 'medications',    loadComponent: loadMedications },
  { path: 'appointments',   loadComponent: loadAppointments },
  { path: 'medical-record', loadComponent: loadMedicalRecord },
  { path: 'notes',          loadComponent: loadNotes },
];
