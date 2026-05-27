// src/app/shared/components/not-found/not-found.component.ts
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="p-8 text-center">
      <h1>{{ 'SHARED.NOT_FOUND.TITLE' | translate }}</h1>
      <p>{{ 'SHARED.NOT_FOUND.MESSAGE' | translate }}</p>
    </div>
  `,
})
export class NotFoundComponent {}
