import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminUserService } from '../../services/admin-user.service';
import { CampaignService } from '../../services/campaign.service';
import { UserRole } from '../../../../core/models/roles.enum';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  private readonly userService     = inject(AdminUserService);
  private readonly campaignService = inject(CampaignService);

  readonly totalUsers     = signal(0);
  readonly totalPatients  = signal(0);
  readonly totalEmployees = signal(0);
  readonly totalCampaigns = signal(0);
  readonly isLoading      = signal(true);

  // admin-dashboard.component.ts
  async ngOnInit(): Promise<void> {
    try {
      const [all, patients, employees, campaigns] = await Promise.all([
        firstValueFrom(this.userService.getAll(1, 1)),
        firstValueFrom(this.userService.getAll(1, 1, UserRole.PATIENT)),
        firstValueFrom(this.userService.getAll(1, 1, UserRole.EMPLOYEE)),
        firstValueFrom(this.campaignService.getAll(1, 1)),
      ]);

      this.totalUsers.set(all?.data?.total ?? 0);
      this.totalPatients.set(patients?.data?.total ?? 0);
      this.totalEmployees.set(employees?.data?.total ?? 0);
      // campaigns.data.total au lieu de campaigns.total
      this.totalCampaigns.set(campaigns?.data?.total ?? 0);
    } catch (error) {
      console.error('Error loading dashboard stats:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

}
