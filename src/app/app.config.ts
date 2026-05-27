// src/app/app.config.ts
import { ApplicationConfig, LOCALE_ID, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors, withFetch, HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TranslateLoader, TranslateModule, TranslationObject } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { routes } from './app.routes';
import { authInterceptor } from './core/http/auth.interceptor';
import { errorInterceptor } from './core/http/error.interceptor';
import { LanguageService } from './core/services/language.service';

registerLocaleData(localeFr);

export class JsonFileLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  getTranslation(lang: string): Observable<TranslationObject> {
    return this.http.get<TranslationObject>(`/assets/i18n/${lang}.json`);
  }
}

function initLanguage(languageService: LanguageService) {
  return () => languageService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor, errorInterceptor]),
    ),
    { provide: LOCALE_ID, useValue: 'en' },
    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new JsonFileLoader(http),
          deps: [HttpClient],
        },
      }),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initLanguage,
      deps: [LanguageService],
      multi: true,
    },
  ],
};
