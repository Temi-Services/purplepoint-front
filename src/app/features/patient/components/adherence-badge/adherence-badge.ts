import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'pp-adherence-badge',
  standalone: true,
  template: `
    <div class="flex items-center gap-2">
      <div class="flex-1 h-2 bg-border rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-500"
          [class]="barColor()"
          [style.width.%]="score()"
        ></div>
      </div>
      <span class="text-sm font-medium" [class]="textColor()">
        {{ score() }}%
      </span>
    </div>
  `,
})
export class AdherenceBadgeComponent {
  readonly score = input.required<number>();

  readonly barColor = computed(() => {
    if (this.score() >= 80) return 'bg-success';
    if (this.score() >= 50) return 'bg-warning';
    return 'bg-danger';
  });

  readonly textColor = computed(() => {
    if (this.score() >= 80) return 'text-success';
    if (this.score() >= 50) return 'text-warning';
    return 'text-danger';
  });
}
