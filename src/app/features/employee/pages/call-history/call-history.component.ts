import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CallService } from '../../services/call.service';
import { OfflineCallService } from '../../services/offline-call.service';
import { Call, CallOutcome } from '../../../../core/models/call.model';

const OUTCOME_LABEL: Record<CallOutcome, string> = {
  REACHED:            'Contact abouti',
  NO_ANSWER:          'Pas de réponse',
  BUSY:               'Occupé',
  WRONG_NUMBER:       'Mauvais numéro',
  CALLBACK_REQUESTED: 'Rappel demandé',
};

const OUTCOME_STYLE: Record<CallOutcome, string> = {
  REACHED:            'bg-green-50 text-success',
  NO_ANSWER:          'bg-gray-100 text-muted',
  BUSY:               'bg-gray-100 text-muted',
  WRONG_NUMBER:       'bg-red-50 text-danger',
  CALLBACK_REQUESTED: 'bg-purple-50 text-primary',
};

@Component({
  selector: 'pp-call-history',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './call-history.component.html',
})
export class CallHistoryComponent implements OnInit {
  private readonly auth           = inject(AuthService);
  private readonly callService    = inject(CallService);
  private readonly offlineService = inject(OfflineCallService);

  readonly calls        = signal<Call[]>([]);
  readonly isLoading    = signal(true);
  readonly page         = signal(1);
  readonly total        = signal(0);
  readonly limit        = 20;
  readonly pendingCount = this.offlineService.pendingCount;

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  readonly outcomeLabel = (o: CallOutcome) => OUTCOME_LABEL[o] ?? o;
  readonly outcomeStyle = (o: CallOutcome) => OUTCOME_STYLE[o] ?? 'bg-gray-100 text-muted';

  async ngOnInit(): Promise<void> {
    await this.loadCalls();
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadCalls();
  }

  private async loadCalls(): Promise<void> {
    const employeeId = this.auth.currentUser()?.id;
    if (!employeeId) return;

    this.isLoading.set(true);
    try {
      const res = await this.callService
        .getByEmployee(employeeId, this.page(), this.limit)
        .toPromise();
      this.calls.set(res?.data ?? []);
      this.total.set(res?.total ?? 0);
    } finally {
      this.isLoading.set(false);
    }
  }
}
