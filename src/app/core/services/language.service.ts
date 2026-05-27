import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

export type AppLocale = 'en' | 'fr';

const STORAGE_KEY = 'pp_locale';
const DEFAULT_LOCALE: AppLocale = 'en';
const SUPPORTED_LOCALES: AppLocale[] = ['en', 'fr'];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translate   = inject(TranslateService);

  private readonly _locale = signal<AppLocale>(DEFAULT_LOCALE);
  readonly locale = this._locale.asReadonly();

  init(): void {
    this.translate.addLangs(SUPPORTED_LOCALES);
    this.translate.setDefaultLang(DEFAULT_LOCALE);

    const saved = this.getSavedLocale();
    this.applyLocale(saved);
  }

  setLocale(locale: AppLocale): void {
    this.applyLocale(locale);
    this.saveLocale(locale);
  }

  private applyLocale(locale: AppLocale): void {
    this._locale.set(locale);
    this.translate.use(locale);

    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = locale;
    }
  }

  private getSavedLocale(): AppLocale {
    if (!isPlatformBrowser(this.platformId)) return DEFAULT_LOCALE;
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LOCALES.includes(saved as AppLocale)
      ? (saved as AppLocale)
      : DEFAULT_LOCALE;
  }

  private saveLocale(locale: AppLocale): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(STORAGE_KEY, locale);
  }
}
