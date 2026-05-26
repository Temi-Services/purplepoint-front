import { Injectable, signal, effect, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser  = isPlatformBrowser(this.platformId);

  private readonly _theme = signal<Theme>(this.resolveInitialTheme());

  readonly theme     = this._theme.asReadonly();
  readonly isDark    = computed(() => this._theme() === 'dark');
  readonly iconClass = computed(() => this.isDark() ? 'ti-sun' : 'ti-moon');

  constructor() {
    // Applique/retire la classe 'dark' sur <html> à chaque changement
    effect(() => {
      if (!this.isBrowser) return;
      const html = document.documentElement;
      if (this._theme() === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    });
  }

  toggle(): void {
    this._theme.update(t => (t === 'light' ? 'dark' : 'light'));
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }

  /**
   * Résolution initiale : préférence système uniquement.
   * Pas de persistance localStorage (mémoire session uniquement selon le plan).
   */
  private resolveInitialTheme(): Theme {
    if (!this.isBrowser) return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
