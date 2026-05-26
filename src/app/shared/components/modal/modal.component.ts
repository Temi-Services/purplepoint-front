import {
  Component,
  input,
  output,
  computed,
  HostListener,
} from '@angular/core';
import { NgClass } from '@angular/common';

const SIZE_CLASSES = {
  sm:   'max-w-sm',
  md:   'max-w-lg',
  lg:   'max-w-2xl',
  xl:   'max-w-3xl',
  full: 'max-w-[calc(100vw-2rem)]',
};

@Component({
  selector: 'pp-modal',
  imports: [NgClass],
  template: `
    <!-- Overlay -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      (click)="onOverlayClick($event)"
    >
      <!-- Panel -->
      <div
        class="bg-surface rounded-2xl w-full flex flex-col shadow-xl"
        [ngClass]="sizeClass()"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
          <h2 class="text-base font-semibold text-gray-900 dark:text-gray-100">
            {{ title() }}
          </h2>
          <button
            type="button"
            (click)="closed.emit()"
            class="p-1.5 rounded-lg text-muted hover:bg-surface-2 hover:text-gray-900
                   dark:hover:text-gray-100 transition-colors"
            aria-label="Fermer"
          >
            <i class="ti ti-x text-lg" aria-hidden="true"></i>
          </button>
        </div>

        <!-- Body -->
        <div class="flex-1 overflow-y-auto px-6 py-4 max-h-[70vh]">
          <ng-content />
        </div>

        <!-- Footer -->
        @if (showFooter()) {
          <!-- Slot custom : <div modal-footer>…</div> -->
          <ng-content select="[modal-footer]" />

          <!-- Footer par défaut si pas de slot custom -->
          <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-border flex-shrink-0">
            <button
              type="button"
              (click)="closed.emit()"
              class="px-4 py-2 text-sm font-medium rounded-lg border border-border
                     text-gray-700 dark:text-gray-300 hover:bg-surface-2 transition-colors"
            >
              {{ cancelLabel() }}
            </button>
            <button
              type="button"
              (click)="submitted.emit()"
              [disabled]="submitDisabled() || loading()"
              class="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white
                     hover:bg-primary-hover transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed
                     inline-flex items-center gap-2"
            >
              @if (loading()) {
                <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10"
                          stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              }
              {{ submitLabel() }}
            </button>
          </div>
        }
      </div>
    </div>
  `,
})
export class ModalComponent {
  readonly title          = input<string>('');
  readonly size           = input<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  readonly showFooter     = input<boolean>(true);
  readonly submitLabel    = input<string>('Confirmer');
  readonly cancelLabel    = input<string>('Annuler');
  readonly submitDisabled = input<boolean>(false);
  readonly loading        = input<boolean>(false);

  readonly closed    = output<void>();
  readonly submitted = output<void>();

  readonly sizeClass = computed(() => SIZE_CLASSES[this.size()]);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closed.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closed.emit();
    }
  }
}
