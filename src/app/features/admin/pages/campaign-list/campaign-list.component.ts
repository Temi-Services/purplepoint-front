import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CampaignService } from '../../services/campaign.service';
import { Campaign, CampaignStatus } from '../../../../core/models/campaign.model';
import { firstValueFrom } from 'rxjs';

const STATUS_STYLE: Record<CampaignStatus, string> = {
  DRAFT:     'bg-gray-100 text-muted',
  SCHEDULED: 'bg-amber-50 text-warning',
  SENT:      'bg-green-50 text-success',
  CANCELLED: 'bg-red-50 text-danger',
};

const STATUS_LABEL: Record<CampaignStatus, string> = {
  DRAFT:     'Brouillon',
  SCHEDULED: 'Planifiée',
  SENT:      'Envoyée',
  CANCELLED: 'Annulée',
};

@Component({
  selector: 'pp-campaign-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './campaign-list.component.html',
})
export class CampaignListComponent implements OnInit {
  private readonly campaignService = inject(CampaignService);

  readonly campaigns  = signal<Campaign[]>([]);
  readonly isLoading  = signal(true);
  readonly page       = signal(1);
  readonly total      = signal(0);
  readonly limit      = 20;

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));
  readonly statusStyle = (s: CampaignStatus) => STATUS_STYLE[s] ?? 'bg-gray-100 text-muted';
  readonly statusLabel = (s: CampaignStatus) => STATUS_LABEL[s] ?? s;

  async ngOnInit(): Promise<void> {
    await this.loadCampaigns();
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadCampaigns();
  }

  async delete(id: string): Promise<void> {
    if (!confirm('Supprimer cette campagne ?')) return;
    await this.campaignService.delete(id).toPromise();
    await this.loadCampaigns();
  }

  private async loadCampaigns(): Promise<void> {
    this.isLoading.set(true);
    try {
      // getAll() retourne PaginatedData<Campaign> directement (BaseApiService unwrap l'enveloppe)
      // → res.data  = Campaign[]
      // → res.total = number
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
