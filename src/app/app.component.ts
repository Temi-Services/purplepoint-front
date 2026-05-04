import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'pp-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="min-h-screen bg-surface-2">
      @if (auth.isAuthenticated()) {
        <pp-navbar />
      }
      <main [class]="auth.isAuthenticated() ? 'pt-16' : ''">
        <router-outlet />
      </main>
    </div>
  `,
})
export class AppComponent implements OnInit {
  readonly auth = inject(AuthService);

  async ngOnInit(): Promise<void> {
    await this.auth.restoreSession();
  }
}
