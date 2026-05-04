import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `<div class="p-8 text-center"><h1>Page introuvable</h1><p>La route demandée n'existe pas.</p></div>`,
})
export class NotFoundComponent {}
