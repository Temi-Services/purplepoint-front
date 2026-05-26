// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
import { Component, input, output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'pp-confirm-dialog',
  standalone: true,
  imports: [ModalComponent],
  template: `
    <pp-modal
      [title]="title()"
      size="sm"
      [showFooter]="false"
      (closed)="cancelled.emit()"
    >
      <!-- Message -->
      <p class="text-sm text-muted leading-relaxed mb-6">{{ message() }}</p>

      <!-- Boutons inline dans le body — contourne le bug du slot modal-footer -->
      <div class="flex items-center justify-end gap-3 pt-2 border-t border-border -mx-6 px-6 -mb-4 pb-4">
        <button
          type="button"
          (click)="cancelled.emit()"
          class="px-4 py-2 text-sm font-medium rounded-lg border border-border
                 text-gray-700 dark:text-gray-300 hover:bg-surface-2 transition-colors"
        >
          Annuler
        </button>
        <button
          type="button"
          (click)="confirmed.emit()"
          [disabled]="loading()"
          class="px-4 py-2 text-sm font-medium rounded-lg transition-colors
                 disabled:opacity-50 disabled:cursor-not-allowed
                 inline-flex items-center gap-2 text-white"
          [class]="danger() ? 'bg-danger hover:bg-red-700' : 'bg-primary hover:bg-primary-hover'"
        >
          @if (loading()) {
            <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10"
                      stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          }
          {{ confirmLabel() }}
        </button>
      </div>
    </pp-modal>
  `,
})
export class ConfirmDialogComponent {
  readonly title        = input<string>('Confirmer');
  readonly message      = input<string>('Cette action est irréversible. Voulez-vous continuer ?');
  readonly confirmLabel = input<string>('Confirmer');
  readonly danger       = input<boolean>(true);
  readonly loading      = input<boolean>(false);
  readonly confirmed    = output<void>();
  readonly cancelled    = output<void>();
}
