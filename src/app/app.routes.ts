import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';
import { UserRole } from './core/models/roles.enum';

const loadLogin = () =>
  import('./features/auth/login/login.component').then(m => m.LoginComponent);

const loadUnauthorized = () =>
  import('./shared/components/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent);

const loadNotFound = () =>
  import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent);

const loadShell = () =>
  import('./shared/components/shell/shell.component').then(m => m.ShellComponent);

const loadPatientRoutes  = () => import('./features/patient/patient.routes').then(m => m.PATIENT_ROUTES);
const loadMedicalRoutes  = () => import('./features/medical/medical.routes').then(m => m.MEDICAL_ROUTES);
const loadEmployeeRoutes = () => import('./features/employee/employee.routes').then(m => m.EMPLOYEE_ROUTES);
const loadAdminRoutes    = () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES);
// const loadCeoRoutes   = () => import('./features/ceo/ceo.routes').then(m => m.CEO_ROUTES);

export const routes: Routes = [
  // ─── Routes publiques ──────────────────────────────────────────────────────
  { path: '',      redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: loadLogin },

  // ─── Routes protégées — enfants du ShellComponent ─────────────────────────
  {
    path: '',
    loadComponent: loadShell,
    canActivate: [authGuard],
    children: [
      {
        path: 'patient',
        canActivate: [roleGuard],
        data: { roles: [UserRole.PATIENT, UserRole.AIDANT] },
        loadChildren: loadPatientRoutes,
      },
      {
        path: 'medical',
        canActivate: [roleGuard],
        data: { roles: [UserRole.MEDICAL] },
        loadChildren: loadMedicalRoutes,
      },
      {
        path: 'employee',
        canActivate: [roleGuard],
        data: { roles: [UserRole.EMPLOYEE] },
        loadChildren: loadEmployeeRoutes,
      },
      {
        path: 'admin',
        canActivate: [roleGuard],
        data: { roles: [UserRole.ADMIN] },
        loadChildren: loadAdminRoutes,
      },
      /*{
        path: 'ceo',
        canActivate: [roleGuard],
        data: { roles: [UserRole.CEO] },
        loadChildren: loadCeoRoutes,
      },*/
    ],
  },

  { path: 'unauthorized', loadComponent: loadUnauthorized },
  { path: '**',           loadComponent: loadNotFound },
];
