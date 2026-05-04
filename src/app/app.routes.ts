import { Routes } from '@angular/router';
import { roleGuard } from './core/auth/role.guard';
import { UserRole } from './core/models/roles.enum';
import { HomeComponent } from './home/home.component';
import { authGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const loadLogin = () =>
  import('./features/auth/login/login.component').then(m => m.LoginComponent);

//const loadUnauthorized = () =>
//  import('./shared/components/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent);

const loadPatientRoutes = () =>
  import('./features/patient/patient.routes').then(m => m.PATIENT_ROUTES);

const loadMedicalRoutes = () =>
  import('./features/medical/medical.routes').then(m => m.MEDICAL_ROUTES);

const loadEmployeeRoutes = () =>
  import('./features/employee/employee.routes').then(m => m.EMPLOYEE_ROUTES);

const loadAdminRoutes = () =>
  import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES);

// const loadCeoRoutes = () =>
//  import('./features/ceo/ceo.routes').then(m => m.CEO_ROUTES);

export const routes: Routes = [
  // Redirect root to a real, existing route to avoid redirect loops
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'login', loadComponent: loadLogin },

  {
    path: 'patient',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.PATIENT] },
    loadChildren: loadPatientRoutes,
  },
  {
    path: 'medical',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.MEDICAL] },
    loadChildren: loadMedicalRoutes,
  },
  {
    path: 'employee',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.EMPLOYEE] },
    loadChildren: loadEmployeeRoutes,
  },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.ADMIN] },
    loadChildren: loadAdminRoutes,
  },
  /*{
    path: 'ceo',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.CEO] },
    loadChildren: loadCeoRoutes,
  },

  { path: 'unauthorized', loadComponent: loadUnauthorized },*/
  // Fallback to login instead of a non-existent /dashboard to prevent loops

  { path: '**', component: NotFoundComponent },
];
