import { Routes } from '@angular/router';

const loadDashboard = () =>
  import('./pages/dashboard/employee-dashboard.component')
    .then(m => m.EmployeeDashboardComponent);

const loadCallLogForm = () =>
  import('./pages/call-log-form/call-log-form.component')
    .then(m => m.CallLogFormComponent);

const loadCallHistory = () =>
  import('./pages/call-history/call-history.component')
    .then(m => m.CallHistoryComponent);

export const EMPLOYEE_ROUTES: Routes = [
  { path: '',            redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',   loadComponent: loadDashboard },
  { path: 'calls/new',   loadComponent: loadCallLogForm },
  { path: 'calls',       loadComponent: loadCallHistory },
];
