// src/app/shared/components/unauthorized/unauthorized.component.ts
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="p-8 text-center">
      <h1>{{ 'SHARED.UNAUTHORIZED.TITLE' | translate }}</h1>
      <p>{{ 'SHARED.UNAUTHORIZED.MESSAGE' | translate }}</p>
    </div>
  `,
})
export class UnauthorizedComponent {}
