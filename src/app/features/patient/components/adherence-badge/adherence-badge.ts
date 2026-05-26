// 📁 src/app/features/patient/components/adherence-badge/adherence-badge.ts
// ─────────────────────────────────────────────────────────────────────────────
import { Component, input, computed } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'pp-adherence-badge',
  imports: [NgClass],
  template: `
    <span
      class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
      [ngClass]="colorClass()"
    >
      <span class="w-1.5 h-1.5 rounded-full" [ngClass]="dotClass()"></span>
      {{ label() }}
    </span>
  `,
})
export class AdherenceBadgeComponent {
  readonly score = input<number>(0);

  readonly label = computed(() => `${this.score()}% d'adhérence`);

  readonly colorClass = computed(() => {
    const s = this.score();
    if (s >= 80) return 'bg-green-50 text-success';
    if (s >= 50) return 'bg-amber-50 text-warning';
    return 'bg-red-50 text-danger';
  });

  readonly dotClass = computed(() => {
    const s = this.score();
    if (s >= 80) return 'bg-success';
    if (s >= 50) return 'bg-warning';
    return 'bg-danger';
  });
}
