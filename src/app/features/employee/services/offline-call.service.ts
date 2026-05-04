import { Injectable, inject, signal } from '@angular/core';
import { Call, CreateCallPayload, CallStatus } from '../../../core/models/call.model';
import { CallService } from './call.service';
import { AuthService } from '../../../core/auth/auth.service';

const QUEUE_KEY = 'pp_call_queue';

@Injectable({ providedIn: 'root' })
export class OfflineCallService {
  private readonly callService = inject(CallService);
  private readonly auth        = inject(AuthService);

  readonly pendingCount = signal(this.loadQueue().length);

  /** Crée un appel : online → API directement, offline → queue locale */
  async submit(payload: CreateCallPayload): Promise<void> {
    if (navigator.onLine) {
      await this.callService.create(payload).toPromise();
    } else {
      this.enqueue(payload);
    }
  }

  /** Rejoue la queue au retour de la connexion */
  async syncQueue(): Promise<void> {
    const queue = this.loadQueue();
    if (queue.length === 0) return;

    const results = await Promise.allSettled(
      queue.map(p => this.callService.create(p).toPromise())
    );

    const remaining = queue.filter((_, i) =>
      results[i].status === 'rejected'
    );

    this.saveQueue(remaining);
    this.pendingCount.set(remaining.length);
  }

  private enqueue(payload: CreateCallPayload): void {
    const queue = this.loadQueue();
    queue.push(payload);
    this.saveQueue(queue);
    this.pendingCount.set(queue.length);
  }

  private loadQueue(): CreateCallPayload[] {
    try {
      return JSON.parse(localStorage.getItem(QUEUE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  private saveQueue(queue: CreateCallPayload[]): void {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }
}
