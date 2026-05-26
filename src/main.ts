// 📁 src/main.ts
// ─────────────────────────────────────────────────────────────────────────────
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AuthService } from './app/core/auth/auth.service';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    // Restaure la session JWT depuis sessionStorage au démarrage
    const auth = appRef.injector.get(AuthService);
    auth.restoreSession();
  })
  .catch(err => console.error(err));
