// src/app/shared/components/empty-state/empty-state.component.ts
import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'pp-empty-state',
  imports: [TranslateModule],
  template: `
    <div class="flex flex-col items-center justify-center py-16 px-6 text-center">
      @if (imageUrl()) {
        <img
          [src]="imageUrl()"
          [alt]="imageAlt() || ('SHARED.EMPTY_STATE.DEFAULT_ALT' | translate)"
          class="w-48 h-48 object-contain mb-6 opacity-80"
          loading="lazy"
        />
      } @else {
        <div class="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center mb-6">
          <i class="ti ti-inbox-off text-3xl text-muted" aria-hidden="true"></i>
        </div>
      }

      <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
        {{ title() || ('SHARED.EMPTY_STATE.DEFAULT_TITLE' | translate) }}
      </h3>

      @if (description()) {
        <p class="text-sm text-muted max-w-xs leading-relaxed">
          {{ description() }}
        </p>
      }

      @if (ctaLabel()) {
        <button
          type="button"
          (click)="ctaClick.emit()"
          class="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
        >
          @if (ctaIcon()) {
            <i [class]="'ti ' + ctaIcon()" aria-hidden="true"></i>
          }
          {{ ctaLabel() }}
        </button>
      }
    </div>
  `,
})
export class EmptyStateComponent {
  readonly imageUrl    = input<string>('');
  readonly imageAlt    = input<string>('');
  readonly title       = input<string>('');
  readonly description = input<string>('');
  readonly ctaLabel    = input<string | null>(null);
  readonly ctaIcon     = input<string>('ti-plus');
  readonly ctaClick    = output<void>();
}
