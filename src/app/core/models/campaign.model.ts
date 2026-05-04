export type CampaignStatus = 'DRAFT' | 'SCHEDULED' | 'SENT' | 'CANCELLED';

export type CampaignTarget = 'ALL' | 'REGION' | 'ROLE';

export interface Campaign {
  id: string;
  title: string;
  message: string;
  target: CampaignTarget;
  region?: string;
  role?: string;
  status: CampaignStatus;
  scheduledAt?: string;
  sentAt?: string;
  createdBy: string;
  createdAt: string;
  recipientCount?: number;
}

export interface CreateCampaignPayload {
  title: string;
  message: string;
  target: CampaignTarget;
  region?: string;
  role?: string;
  scheduledAt?: string;
}
