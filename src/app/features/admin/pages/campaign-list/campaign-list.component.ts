// src/app/features/admin/pages/campaign-list/campaign-list.component.ts
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LabelPipe } from '../../../../core/pipes/label.pipe';
import { CampaignService } from '../../services/campaign.service';
import { Campaign, CampaignStatus } from '../../../../core/models/campaign.model';
import { firstValueFrom } from 'rxjs';

const STATUS_STYLE: Record<CampaignStatus, string> = {
  DRAFT:     'bg-gray-100 text-muted',
  SCHEDULED: 'bg-amber-50 text-warning',
  SENT:      'bg-green-50 text-success',
  CANCELLED: 'bg-red-50 text-danger',
};

@Component({
  selector: 'pp-campaign-list',
  imports: [RouterLink, DatePipe, TranslateModule, LabelPipe],
  templateUrl: './campaign-list.component.html',
})
export class CampaignListComponent implements OnInit {
  private readonly campaignService = inject(CampaignService);
  private readonly translate       = inject(TranslateService);

  readonly campaigns  = signal<Campaign[]>([]);
  readonly isLoading  = signal(true);
  readonly page       = signal(1);
  readonly total      = signal(0);
  readonly limit      = 20;
  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  readonly totalLabel = computed(() => {
    const t = this.total();
    const key = t <= 1
      ? 'ADMIN.CAMPAIGN_LIST.SUBTITLE_SINGULAR'
      : 'ADMIN.CAMPAIGN_LIST.SUBTITLE_PLURAL';
    return this.translate.instant(key, { total: t });
  });

  readonly statusStyle = (s: CampaignStatus) => STATUS_STYLE[s] ?? 'bg-gray-100 text-muted';

  async ngOnInit(): Promise<void> { await this.loadCampaigns(); }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadCampaigns();
  }

  async delete(id: string): Promise<void> {
    if (!confirm(this.translate.instant('ADMIN.CAMPAIGN_LIST.DELETE_CONFIRM'))) return;
    await this.campaignService.delete(id).toPromise();
    await this.loadCampaigns();
  }

  private async loadCampaigns(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(
        this.campaignService.getAll({ page: this.page(), limit: this.limit })
      );
      this.campaigns.set(res?.data  ?? []);
      this.total.set(res?.total ?? 0);
    } finally {
      this.isLoading.set(false);
    }
  }
}
