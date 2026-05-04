import { Routes } from '@angular/router';

const loadDashboard = () =>
  import('./pages/dashboard/admin-dashboard.component')
    .then(m => m.AdminDashboardComponent);

const loadUserManagement = () =>
  import('./pages/user-management/user-management.component')
    .then(m => m.UserManagementComponent);

const loadUserForm = () =>
  import('./pages/user-form/user-form.component')
    .then(m => m.UserFormComponent);

const loadCampaignList = () =>
  import('./pages/campaign-list/campaign-list.component')
    .then(m => m.CampaignListComponent);

const loadCampaignForm = () =>
  import('./pages/campaign-form/campaign-form.component')
    .then(m => m.CampaignFormComponent);

export const ADMIN_ROUTES: Routes = [
  { path: '',                  redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',         loadComponent: loadDashboard },
  { path: 'users',             loadComponent: loadUserManagement },
  { path: 'users/new',         loadComponent: loadUserForm },
  { path: 'users/:id/edit',    loadComponent: loadUserForm },
  { path: 'campaigns',         loadComponent: loadCampaignList },
  { path: 'campaigns/new',     loadComponent: loadCampaignForm },
];
