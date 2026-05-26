import { Component, inject, signal, computed, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'pp-shell',
  imports: [RouterOutlet, NgClass, SidebarComponent, TopbarComponent],
  template: `
    <div class="min-h-screen bg-surface-2">

      <!-- Sidebar -->
      <pp-sidebar
        [role]="userRole()!"
        [expanded]="sidebarExpanded()"
        [mobileOpen]="sidebarMobile()"
        (toggleExpanded)="toggleSidebar()"
        (closeMobile)="sidebarMobile.set(false)"
      />

      <!-- Topbar -->
      <pp-topbar
        [user]="currentUser()!"
        [sidebarExpanded]="sidebarExpanded()"
        [sidebarMobile]="sidebarMobile()"
        (toggleSidebar)="onToggleSidebar()"
        (logout)="onLogout()"
      />

      <!-- Contenu principal -->
      <main
        class="pt-16 min-h-screen transition-all duration-300"
        [ngClass]="mainOffset()"
      >
        <div class="p-4 md:p-6">
          <router-outlet />
        </div>
      </main>

    </div>
  `,
})
export class ShellComponent implements OnInit {
  private readonly auth       = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser  = isPlatformBrowser(this.platformId);

  readonly currentUser = this.auth.currentUser;
  readonly userRole    = this.auth.userRole;

  /** Expanded sur lg+, collapsed sur md, drawer sur mobile */
  readonly sidebarExpanded = signal<boolean>(true);
  readonly sidebarMobile   = signal<boolean>(false);

  /**
   * Offset du contenu principal selon état sidebar.
   * < 768px  → ml-0 (sidebar drawer overlay)
   * 768–1024 → ml-16 (64px collapsed)
   * > 1024   → ml-60 (240px) ou ml-16 si collapsed
   */
  readonly mainOffset = computed(() => {
    if (this.sidebarExpanded()) {
      return 'ml-0 md:ml-16 lg:ml-60';
    }
    return 'ml-0 md:ml-16';
  });

  ngOnInit(): void {
    if (!this.isBrowser) return;
    // Sur lg+ : expanded par défaut ; sur md : collapsed
    const isLg = window.innerWidth >= 1024;
    this.sidebarExpanded.set(isLg);
  }

  /** Sur mobile : ouvre le drawer. Sur md+ : toggle expanded/collapsed. */
  onToggleSidebar(): void {
    if (!this.isBrowser) return;
    if (window.innerWidth < 768) {
      this.sidebarMobile.update(v => !v);
    } else {
      this.toggleSidebar();
    }
  }

  toggleSidebar(): void {
    this.sidebarExpanded.update(v => !v);
  }

  async onLogout(): Promise<void> {
    await this.auth.logout();
  }
}
