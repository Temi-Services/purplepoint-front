// 📁 src/app/shared/components/badge/badge.component.ts
// ─────────────────────────────────────────────────────────────────────────────
import { Component, input, computed } from '@angular/core';
import { NgClass } from '@angular/common';

export interface BadgeConfig {
  label: string;
  color: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
}

const DEFAULT_BADGE_MAP: Record<string, BadgeConfig> = {
  // ─── Rôles ────────────────────────────────────────────────────────────────
  PATIENT:   { label: 'Patient',   color: 'primary' },
  MEDICAL:   { label: 'Médecin',   color: 'info'    },
  ADMIN:     { label: 'Admin',     color: 'danger'  },
  EMPLOYEE:  { label: 'Employé',   color: 'warning' },
  CEO:       { label: 'CEO',       color: 'neutral' },
  AIDANT:    { label: 'Aidant',    color: 'success' },

  // ─── Statuts utilisateur ──────────────────────────────────────────────────
  ACTIVE:    { label: 'Actif',     color: 'success' },
  INACTIVE:  { label: 'Inactif',  color: 'neutral' },
  SUSPENDED: { label: 'Suspendu', color: 'danger'  },

  // ─── Types de note ────────────────────────────────────────────────────────
  TEXT:  { label: 'Texte', color: 'primary' },
  VOICE: { label: 'Vocal', color: 'info'    },

  // ─── Statuts rendez-vous ──────────────────────────────────────────────────
  PENDING:   { label: 'En attente', color: 'warning' },
  CONFIRMED: { label: 'Confirmé',   color: 'success' },
  CANCELLED: { label: 'Annulé',    color: 'danger'  },
  COMPLETED: { label: 'Terminé',   color: 'neutral' },
  NO_SHOW:   { label: 'Absent',    color: 'danger'  },

  // ─── Types de rendez-vous ─────────────────────────────────────────────────
  CONSULTATION: { label: 'Consultation',       color: 'primary' },
  FOLLOW_UP:    { label: 'Suivi',              color: 'info'    },
  EMERGENCY:    { label: 'Urgence',            color: 'danger'  },
  HOME_VISIT:   { label: 'Visite à domicile',  color: 'warning' },

  // ─── Statuts médicaments ─────────────────────────────────────────────────
  DISCONTINUED: { label: 'Arrêté',   color: 'danger'  },

  // ─── Fréquences médicaments ───────────────────────────────────────────────
  ONCE_DAILY:        { label: '1× par jour',    color: 'primary' },
  TWICE_DAILY:       { label: '2× par jour',    color: 'primary' },
  THREE_TIMES_DAILY: { label: '3× par jour',    color: 'primary' },
  WEEKLY:            { label: '1× par semaine', color: 'info'    },
  AS_NEEDED:         { label: 'À la demande',   color: 'neutral' },

  // ─── Statuts prises médicament ────────────────────────────────────────────
  TAKEN:   { label: 'Pris',    color: 'success' },
  MISSED:  { label: 'Manqué', color: 'danger'  },
  SKIPPED: { label: 'Sauté',  color: 'warning' },

  // ─── Groupes sanguins ─────────────────────────────────────────────────────
  A_POSITIVE:  { label: 'A+',   color: 'info'    },
  A_NEGATIVE:  { label: 'A−',   color: 'info'    },
  B_POSITIVE:  { label: 'B+',   color: 'info'    },
  B_NEGATIVE:  { label: 'B−',   color: 'info'    },
  AB_POSITIVE: { label: 'AB+',  color: 'info'    },
  AB_NEGATIVE: { label: 'AB−',  color: 'info'    },
  O_POSITIVE:  { label: 'O+',   color: 'info'    },
  O_NEGATIVE:  { label: 'O−',   color: 'info'    },
  UNKNOWN:     { label: 'Inconnu', color: 'neutral' },

  // ─── Résultats appels ─────────────────────────────────────────────────────
  REACHED:            { label: 'Abouti',         color: 'success' },
  NO_ANSWER:          { label: 'Sans réponse',   color: 'neutral' },
  BUSY:               { label: 'Occupé',         color: 'warning' },
  WRONG_NUMBER:       { label: 'Mauvais n°',     color: 'danger'  },
  CALLBACK_REQUESTED: { label: 'Rappel demandé', color: 'info'    },

  // ─── Statuts campagnes ────────────────────────────────────────────────────
  DRAFT:     { label: 'Brouillon', color: 'neutral' },
  SCHEDULED: { label: 'Planifiée', color: 'warning' },
  SENT:      { label: 'Envoyée',  color: 'success' },
};

const COLOR_CLASSES: Record<BadgeConfig['color'], string> = {
  primary: 'bg-purple-50 text-primary',
  success: 'bg-green-50 text-success',
  warning: 'bg-amber-50 text-warning',
  danger:  'bg-red-50 text-danger',
  info:    'bg-blue-50 text-blue-700',
  neutral: 'bg-gray-100 text-muted',
};

const SIZE_CLASSES = {
  sm: 'text-xs px-1.5 py-0.5',
  md: 'text-xs px-2 py-1',
};

@Component({
  selector: 'pp-badge',
  imports: [NgClass],
  template: `
    <span
      class="inline-flex items-center font-medium rounded-full"
      [ngClass]="[sizeClass(), colorClass()]"
    >
      {{ label() }}
    </span>
  `,
})
export class BadgeComponent {
  readonly value = input.required<string>();
  readonly map   = input<Record<string, BadgeConfig>>({});
  readonly size  = input<'sm' | 'md'>('md');

  private readonly resolved = computed<BadgeConfig>(() => {
    const merged = { ...DEFAULT_BADGE_MAP, ...this.map() };
    return merged[this.value()] ?? { label: this.value(), color: 'neutral' };
  });

  readonly label      = computed(() => this.resolved().label);
  readonly colorClass = computed(() => COLOR_CLASSES[this.resolved().color]);
  readonly sizeClass  = computed(() => SIZE_CLASSES[this.size()]);
}
