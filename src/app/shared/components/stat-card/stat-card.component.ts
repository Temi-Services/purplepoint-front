import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

type StatColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

const ICON_BG: Record<StatColor, string> = {
  primary: 'bg-purple-50 text-primary',
  success: 'bg-green-50 text-success',
  warning: 'bg-amber-50 text-warning',
  danger:  'bg-red-50 text-danger',
  info:    'bg-blue-50 text-blue-700',
};

@Component({
  selector: 'pp-stat-card',
  imports: [RouterLink, NgClass],
  template: `
    <div
      class="bg-surface rounded-xl border border-border p-5 flex flex-col gap-3
             transition-shadow hover:shadow-md"
      [class.cursor-pointer]="routerLink()"
      [routerLink]="routerLink() || null"
    >
      @if (loading()) {
        <!-- Skeleton -->
        <div class="animate-pulse flex flex-col gap-3">
          <div class="h-10 w-10 rounded-lg bg-surface-2"></div>
          <div class="h-7 w-20 rounded-md bg-surface-2"></div>
          <div class="h-4 w-28 rounded-md bg-surface-2"></div>
        </div>
      } @else {
        <!-- Icône -->
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          [ngClass]="iconBgClass()"
        >
          <i [class]="'ti ' + icon() + ' text-xl'" aria-hidden="true"></i>
        </div>

        <!-- Valeur -->
        <div class="flex items-end gap-2">
          <span class="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-none">
            {{ value() }}
          </span>

          <!-- Tendance -->
          @if (trend() !== undefined && trend() !== 0) {
            <span
              class="text-xs font-medium mb-0.5 inline-flex items-center gap-0.5"
              [class.text-success]="trend()! > 0"
              [class.text-danger]="trend()! < 0"
            >
              <i
                [class]="trend()! > 0 ? 'ti ti-trending-up' : 'ti ti-trending-down'"
                aria-hidden="true"
              ></i>
              {{ trend()! > 0 ? '+' : '' }}{{ trend() }}%
            </span>
          }
        </div>

        <!-- Label -->
        <span class="text-sm text-muted leading-tight">{{ label() }}</span>

        <!-- Slot optionnel (sparkline, barre…) -->
        <ng-content />
      }
    </div>
  `,
})
export class StatCardComponent {
  readonly label      = input.required<string>();
  readonly value      = input<string | number>('—');
  readonly icon       = input<string>('ti-chart-bar');
  readonly color      = input<StatColor>('primary');
  readonly trend      = input<number | undefined>(undefined);
  readonly loading    = input<boolean>(false);
  readonly routerLink = input<string | undefined>(undefined);

  readonly iconBgClass = computed(() => ICON_BG[this.color()]);
}
