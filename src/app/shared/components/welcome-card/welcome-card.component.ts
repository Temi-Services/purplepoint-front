// src/app/shared/components/welcome-card/welcome-card.component.ts
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'pp-welcome-card',
  imports: [TranslateModule],
  template: `
    <div class="bg-primary rounded-2xl px-6 py-5 flex items-center justify-between gap-4
                overflow-hidden relative">
      <div class="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
      <div class="absolute -right-2 -bottom-10 w-28 h-28 rounded-full bg-white/5 pointer-events-none"></div>

      <div class="relative z-10 flex-1 min-w-0">
        <p class="text-white/70 text-sm font-medium">{{ 'SHARED.WELCOME_CARD.GREETING' | translate }}</p>
        <h2 class="text-white text-xl font-bold truncate">{{ userName() }} 👋</h2>
        <p class="text-white/80 text-sm mt-1 leading-snug">{{ subtitle() }}</p>
        <div class="mt-4">
          <ng-content />
        </div>
      </div>

      @if (imageUrl()) {
        <img
          [src]="imageUrl()"
          [alt]="imageAlt()"
          class="hidden sm:block h-28 w-auto object-contain flex-shrink-0 relative z-10 drop-shadow-md"
          loading="lazy"
        />
      }
    </div>
  `,
})
export class WelcomeCardComponent {
  readonly userName = input.required<string>();
  readonly subtitle = input<string>('');
  readonly imageUrl = input<string>('');
  readonly imageAlt = input<string>('Illustration');
}
