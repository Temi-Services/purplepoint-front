import { Component, input, output, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { UserRole } from '../../../core/models/roles.enum';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

const NAV_ITEMS: Record<UserRole, NavItem[]> = {
  [UserRole.PATIENT]: [
    { label: 'Mon espace',       icon: 'ti-home',          route: '/patient' },
    { label: 'Mes médicaments',  icon: 'ti-pill',          route: '/patient/medications' },
    { label: 'Mes rendez-vous',  icon: 'ti-calendar',      route: '/patient/appointments' },
    { label: 'Mon dossier',      icon: 'ti-report-medical',  route: '/patient/medical-record' },
    { label: 'Mes notes',        icon: 'ti-notes',         route: '/patient/notes' },
  ],
  [UserRole.AIDANT]: [
    { label: 'Mon espace',       icon: 'ti-home',          route: '/patient' },
    { label: 'Mes médicaments',  icon: 'ti-pill',          route: '/patient/medications' },
    { label: 'Mes rendez-vous',  icon: 'ti-calendar',      route: '/patient/appointments' },
    { label: 'Mon dossier',      icon: 'ti-report-medical',  route: '/patient/medical-record' },
    { label: 'Mes notes',        icon: 'ti-notes',         route: '/patient/notes' },
  ],
  [UserRole.MEDICAL]: [
    { label: 'Tableau de bord',  icon: 'ti-home',          route: '/medical' },
    { label: 'Patients',         icon: 'ti-users',         route: '/medical/patients' },
  ],
  [UserRole.EMPLOYEE]: [
    { label: 'Tableau de bord',  icon: 'ti-home',          route: '/employee' },
    { label: 'Mes appels',       icon: 'ti-phone',         route: '/employee/calls' },
  ],
  [UserRole.ADMIN]: [
    { label: 'Tableau de bord',  icon: 'ti-home',          route: '/admin' },
    { label: 'Utilisateurs',     icon: 'ti-users',         route: '/admin/users' },
    { label: 'Campagnes',        icon: 'ti-speakerphone',  route: '/admin/campaigns' },
  ],
  [UserRole.CEO]: [
    { label: 'Tableau de bord',  icon: 'ti-home',          route: '/ceo' },
    { label: 'Analytics',        icon: 'ti-chart-bar',     route: '/ceo/analytics' },
    { label: 'Campagnes',        icon: 'ti-speakerphone',  route: '/ceo/campaigns' },
  ],
};

@Component({
  selector: 'pp-sidebar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
    <!-- ─── Overlay mobile (< 768px) ─────────────────────────── -->
    @if (mobileOpen()) {
      <div
        class="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
        (click)="closeMobile.emit()"
        aria-hidden="true"
      ></div>
    }

    <!-- ─── Sidebar panel ─────────────────────────────────────── -->
    <aside
      class="fixed top-0 left-0 z-40 h-full flex flex-col bg-surface border-r border-border
             transition-all duration-300 ease-in-out"
      [ngClass]="{
        'w-60':  expanded() || mobileOpen(),
        'w-16':  !expanded() && !mobileOpen(),
        '-translate-x-full md:translate-x-0': !mobileOpen() && !expanded(),
        'translate-x-0':  mobileOpen() || expanded()
      }"
    >
      <!-- Logo -->
      <div class="flex items-center gap-3 px-4 h-16 border-b border-border flex-shrink-0 overflow-hidden">
        <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
          <span class="text-white font-bold text-sm leading-none">P</span>
        </div>
        @if (expanded() || mobileOpen()) {
          <span class="font-semibold text-gray-900 dark:text-gray-100 text-sm whitespace-nowrap
                       transition-opacity duration-200">
            PurplePoint
          </span>
        }
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto overflow-x-hidden py-4 px-2">
        <ul class="flex flex-col gap-1" role="list">
          @for (item of navItems(); track item.route) {
            <li>
              <a
                [routerLink]="item.route"
                routerLinkActive="bg-primary-light text-primary font-medium"
                [routerLinkActiveOptions]="{ exact: item.route.split('/').length <= 2 }"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted
                       hover:bg-surface-2 hover:text-gray-900 dark:hover:text-gray-100
                       transition-colors group relative"
                [class.justify-center]="!expanded() && !mobileOpen()"
                (click)="mobileOpen() && closeMobile.emit()"
              >
                <i
                  [class]="'ti ' + item.icon + ' text-lg flex-shrink-0'"
                  aria-hidden="true"
                ></i>

                @if (expanded() || mobileOpen()) {
                  <span class="truncate whitespace-nowrap">{{ item.label }}</span>
                } @else {
                  <!-- Tooltip collapsed (md+) -->
                  <span
                    class="absolute left-14 bg-gray-900 dark:bg-gray-700 text-white text-xs
                           rounded-md px-2 py-1 whitespace-nowrap opacity-0 pointer-events-none
                           group-hover:opacity-100 transition-opacity duration-150 z-50"
                    role="tooltip"
                  >
                    {{ item.label }}
                  </span>
                }
              </a>
            </li>
          }
        </ul>
      </nav>

      <!-- Footer sidebar : toggle collapse (md+) -->
      <div class="border-t border-border p-2 flex-shrink-0 hidden md:flex">
        <button
          type="button"
          (click)="toggleExpanded.emit()"
          class="w-full flex items-center justify-center p-2 rounded-lg text-muted
                 hover:bg-surface-2 hover:text-gray-900 dark:hover:text-gray-100
                 transition-colors"
          [attr.aria-label]="expanded() ? 'Réduire la sidebar' : 'Agrandir la sidebar'"
        >
          <i
            [class]="(expanded() ? 'ti-layout-sidebar-left-collapse' : 'ti-layout-sidebar-left-expand') + ' ti text-lg'"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </aside>
  `,
})
export class SidebarComponent {
  readonly role       = input.required<UserRole>();
  readonly expanded   = input<boolean>(true);
  readonly mobileOpen = input<boolean>(false);

  readonly toggleExpanded = output<void>();
  readonly closeMobile    = output<void>();

  readonly navItems = computed(() => NAV_ITEMS[this.role()] ?? []);
}
