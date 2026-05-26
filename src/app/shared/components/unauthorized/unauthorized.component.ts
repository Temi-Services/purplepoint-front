import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  template: `<div class="p-8 text-center">
    <h1>Unauthorized</h1>
    <p>You are not authorized to access this route.</p>
  </div>`,
})

export class UnauthorizedComponent {}
