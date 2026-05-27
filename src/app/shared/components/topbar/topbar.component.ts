// src/app/shared/components/topbar/topbar.component.ts
import { Component, input, output, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'pp-topbar',
  imports: [NgClass, TranslateModule],
  template: `
    <header
      class="fixed top-0 right-0 z-20 h-16 flex items-center gap-2 px-4
             bg-surface/90 border-b border-border backdrop-blur-md
             transition-all duration-300"
      [ngClass]="leftOffset()"
    >
      <!-- Toggle sidebar -->
      <button
        type="button"
        (click)="toggleSidebar.emit()"
        class="p-2 rounded-lg text-muted hover:bg-surface-2 hover:text-gray-900
               dark:hover:text-gray-100 transition-colors flex-shrink-0"
        [attr.aria-label]="'SHARED.TOPBAR.TOGGLE_SIDEBAR' | translate"
      >
        <i class="ti ti-menu-2 text-xl" aria-hidden="true"></i>
      </button>

      <div class="flex-1 min-w-0"></div>

      <div class="flex items-center gap-1">
        <!-- Dark / light toggle -->
        <button
          type="button"
          (click)="theme.toggle()"
          class="p-2 rounded-lg text-muted hover:bg-surface-2 hover:text-gray-900
                 dark:hover:text-gray-100 transition-colors"
          [attr.aria-label]="(theme.isDark() ? 'SHARED.TOPBAR.LIGHT_MODE' : 'SHARED.TOPBAR.DARK_MODE') | translate"
        >
          <i [class]="'ti ' + theme.iconClass() + ' text-xl'" aria-hidden="true"></i>
        </button>

        <!-- Notifications -->
        <button
          type="button"
          class="relative p-2 rounded-lg text-muted hover:bg-surface-2 hover:text-gray-900
                 dark:hover:text-gray-100 transition-colors"
          [attr.aria-label]="'SHARED.TOPBAR.NOTIFICATIONS' | translate"
        >
          <i class="ti ti-bell text-xl" aria-hidden="true"></i>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger" aria-hidden="true"></span>
        </button>

        <div class="w-px h-6 bg-border mx-1" aria-hidden="true"></div>

        <!-- Avatar -->
        <div class="flex items-center gap-2 pl-1">
          <div
            class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center
                   flex-shrink-0 cursor-default select-none"
            [attr.title]="fullName()"
          >
            <span class="text-xs font-semibold text-primary">{{ initials() }}</span>
          </div>
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
          [attr.aria-label]="'SHARED.TOPBAR.LOGOUT' | translate"
        >
          <i class="ti ti-logout text-xl" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  `,
})
export class TopbarComponent {
  readonly theme = inject(ThemeService);

  readonly user            = input.required<User>();
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

  readonly leftOffset = computed(() => {
    if (this.sidebarExpanded()) return 'left-0 md:left-16 lg:left-60';
    return 'left-0 md:left-16';
  });
}
