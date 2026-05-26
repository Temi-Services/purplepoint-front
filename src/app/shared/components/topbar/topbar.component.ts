import { Component, input, output, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'pp-topbar',
  imports: [NgClass],
  template: `
    <header
      class="fixed top-0 right-0 z-20 h-16 flex items-center gap-2 px-4
             bg-surface/90 border-b border-border backdrop-blur-md
             transition-all duration-300"
      [ngClass]="leftOffset()"
    >
      <!-- Toggle sidebar / burger mobile -->
      <button
        type="button"
        (click)="toggleSidebar.emit()"
        class="p-2 rounded-lg text-muted hover:bg-surface-2 hover:text-gray-900
               dark:hover:text-gray-100 transition-colors flex-shrink-0"
        aria-label="Basculer la sidebar"
      >
        <i class="ti ti-menu-2 text-xl" aria-hidden="true"></i>
      </button>

      <!-- Espace libre (breadcrumb Phase 5) -->
      <div class="flex-1 min-w-0"></div>

      <!-- Actions groupées -->
      <div class="flex items-center gap-1">

        <!-- Toggle dark / light -->
        <button
          type="button"
          (click)="theme.toggle()"
          class="p-2 rounded-lg text-muted hover:bg-surface-2 hover:text-gray-900
                 dark:hover:text-gray-100 transition-colors"
          [attr.aria-label]="theme.isDark() ? 'Passer en mode clair' : 'Passer en mode sombre'"
        >
          <i [class]="'ti ' + theme.iconClass() + ' text-xl'" aria-hidden="true"></i>
        </button>

        <!-- Notifications (placeholder) -->
        <button
          type="button"
          class="relative p-2 rounded-lg text-muted hover:bg-surface-2 hover:text-gray-900
                 dark:hover:text-gray-100 transition-colors"
          aria-label="Notifications"
        >
          <i class="ti ti-bell text-xl" aria-hidden="true"></i>
          <!-- Badge rouge placeholder -->
          <span
            class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger"
            aria-hidden="true"
          ></span>
        </button>

        <!-- Séparateur -->
        <div class="w-px h-6 bg-border mx-1" aria-hidden="true"></div>

        <!-- Avatar initiales -->
        <div class="flex items-center gap-2 pl-1">
          <div
            class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center
                   flex-shrink-0 cursor-default select-none"
            [attr.title]="fullName()"
          >
            <span class="text-xs font-semibold text-primary">{{ initials() }}</span>
          </div>

          <!-- Nom visible sur md+ -->
          <span class="hidden md:block text-sm font-medium text-gray-900 dark:text-gray-100
                       max-w-[120px] truncate">
            {{ fullName() }}
          </span>
        </div>

        <!-- Logout -->
        <button
          type="button"
          (click)="logout.emit()"
          class="p-2 rounded-lg text-muted hover:bg-red-50 hover:text-danger
                 dark:hover:bg-red-900/20 transition-colors"
          aria-label="Se déconnecter"
        >
          <i class="ti ti-logout text-xl" aria-hidden="true"></i>
        </button>

      </div>
    </header>
  `,
})
export class TopbarComponent {
  readonly theme = inject(ThemeService);

  readonly user           = input.required<User>();
  readonly sidebarExpanded = input<boolean>(true);
  readonly sidebarMobile   = input<boolean>(false);

  readonly toggleSidebar = output<void>();
  readonly logout        = output<void>();

  readonly initials = computed(() => {
    const u = this.user();
    return `${u.firstName?.[0] ?? ''}${u.lastName?.[0] ?? ''}`.toUpperCase();
  });

  readonly fullName = computed(() => {
    const u = this.user();
    return `${u.firstName} ${u.lastName}`.trim();
  });

  /**
   * Offset left de la topbar selon l'état de la sidebar.
   * < 768px  → pas d'offset (sidebar en drawer overlay)
   * 768–1024 → left-16 (64px collapsed)
   * > 1024   → left-60 (240px expanded) ou left-16 si réduite
   */
  readonly leftOffset = computed(() => {
    if (this.sidebarExpanded()) {
      return 'left-0 md:left-16 lg:left-60';
    }
    return 'left-0 md:left-16';
  });
}
