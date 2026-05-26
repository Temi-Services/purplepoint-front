import { Routes } from '@angular/router';

const loadDashboard = () =>
  import('./pages/dashboard/medical-dashboard.component')
    .then(m => m.MedicalDashboardComponent);

const loadPatientList = () =>
  import('./pages/patient-list/patient-list.component')
    .then(m => m.PatientListComponent);

const loadPatientDetail = () =>
  import('./pages/patient-detail/patient-detail.component')
    .then(m => m.PatientDetailComponent);

// Dépréciées — remplacées par les modales du dashboard
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
  { path: '',              redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',    loadComponent: loadDashboard },
  { path: 'patients',     loadComponent: loadPatientList },
  { path: 'patients/:id', loadComponent: loadPatientDetail },
  // Gardées pour rétrocompatibilité liens existants
  { path: 'medications/new',  loadComponent: loadMedicationForm },
  { path: 'appointments/new', loadComponent: loadAppointmentForm },
  { path: 'notes/new',        loadComponent: loadMedicalNoteForm },
];
