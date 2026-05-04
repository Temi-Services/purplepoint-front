import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CallService } from '../../services/call.service';
import { OfflineCallService } from '../../services/offline-call.service';
import { Call } from '../../../../core/models/call.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pp-employee-dashboard',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './employee-dashboard.component.html',
})
export class EmployeeDashboardComponent implements OnInit, OnDestroy {
  private readonly auth = inject(AuthService);
  private readonly callService = inject(CallService);
  private readonly offlineService = inject(OfflineCallService);

  readonly user = this.auth.currentUser;
  readonly recentCalls = signal<Call[]>([]);
  readonly isLoading = signal(true);
  readonly isOnline = signal(navigator.onLine);
  readonly pendingCount = this.offlineService.pendingCount;

  readonly todayCallCount = computed(() => {
    const today = new Date().toDateString();
    return this.recentCalls().filter((c) => new Date(c.calledAt).toDateString() === today).length;
  });

  readonly reachedCount = computed(
    () => this.recentCalls().filter((c) => c.outcome === 'REACHED').length,
  );

  readonly contactRate = computed(() => {
    const total = this.recentCalls().length;
    if (total === 0) return 0;
    return Math.round((this.reachedCount() / total) * 100);
  });

  private readonly onlineHandler = () => {
    this.isOnline.set(true);
    this.offlineService.syncQueue();
  };
  private readonly offlineHandler = () => this.isOnline.set(false);

  async ngOnInit(): Promise<void> {
    window.addEventListener('online', this.onlineHandler);
    window.addEventListener('offline', this.offlineHandler);
    await this.loadRecentCalls();
  }

  ngOnDestroy(): void {
    window.removeEventListener('online', this.onlineHandler);
    window.removeEventListener('offline', this.offlineHandler);
  }

  private async loadRecentCalls(): Promise<void> {
    const employeeId = this.user()?.id;
    if (!employeeId) return;

    this.isLoading.set(true);
    try {
      const res = await this.callService.getByEmployee(employeeId, 1, 50).toPromise();
      this.recentCalls.set(res?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }
}
