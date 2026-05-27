// src/app/features/admin/pages/campaign-form/campaign-form.component.ts
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../core/auth/auth.service';
import { CampaignService } from '../../services/campaign.service';
import { CampaignTarget } from '../../../../core/models/campaign.model';

@Component({
  selector: 'pp-campaign-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './campaign-form.component.html',
})
export class CampaignFormComponent {
  private readonly fb              = inject(FormBuilder);
  private readonly router          = inject(Router);
  private readonly auth            = inject(AuthService);
  private readonly campaignService = inject(CampaignService);
  private readonly translate       = inject(TranslateService);

  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly targets: { value: CampaignTarget; labelKey: string }[] = [
    { value: 'ALL',    labelKey: 'ADMIN.CAMPAIGN_FORM.TARGET_ALL' },
    { value: 'REGION', labelKey: 'ADMIN.CAMPAIGN_FORM.TARGET_REGION' },
    { value: 'ROLE',   labelKey: 'ADMIN.CAMPAIGN_FORM.TARGET_ROLE' },
  ];

  readonly form = this.fb.nonNullable.group({
    title:       ['', Validators.required],
    message:     ['', [Validators.required, Validators.minLength(10)]],
    target:      ['ALL' as CampaignTarget, Validators.required],
    region:      [''],
    scheduledAt: [''],
  });

  readonly showRegion = () => this.form.controls.target.value === 'REGION';

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);
    const { title, message, target, region, scheduledAt } = this.form.getRawValue();
    try {
      await this.campaignService.create({
        title, message, target,
        region:      target === 'REGION' && region ? region : undefined,
        scheduledAt: scheduledAt ? new Date(scheduledAt).toISOString() : undefined,
      }).toPromise();
      this.router.navigate(['/admin/campaigns']);
    } catch {
      this.error.set(this.translate.instant('ADMIN.CAMPAIGN_FORM.ERROR'));
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void { this.router.navigate(['/admin/campaigns']); }
}
