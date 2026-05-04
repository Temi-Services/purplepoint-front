import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  template: `<div class="p-8 text-center">
    <h1>Non authorisé</h1>
    <p>Vous n'etes pas autorisé à accéder à cette route.</p>
  </div>`,
})
export class UnauthorizedComponent {}
