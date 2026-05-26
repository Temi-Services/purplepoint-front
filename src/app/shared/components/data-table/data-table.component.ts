import {
  Component,
  input,
  output,
  model,
  computed,
  linkedSignal,
  TemplateRef,
} from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

// ─── Types publics ────────────────────────────────────────────────────────────

export interface TableColumn<T> {
  /**
   * Clé dans l'objet (ex. 'email') ou chemin imbriqué (ex. 'address.city').
   * Volontairement `string` et non `keyof T` pour éviter les conflits
   * de type `string | number | symbol` dans getCellValue.
   */
  key: string;
  /** En-tête de colonne */
  label: string;
  /** Largeur CSS, ex. '120px' ou 'auto' */
  width?: string;
  align?: 'left' | 'center' | 'right';
  /** Cellule custom via ng-template */
  template?: TemplateRef<{ $implicit: T }>;
  sortable?: boolean;
  /** Masquée sans être retirée de columns */
  hide?: boolean;
}

// ─── Helper : accès par chemin 'a.b.c' ───────────────────────────────────────

function getNestedValue(obj: unknown, path: string): unknown {
  return String(path)
    .split('.')
    .reduce((acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined), obj);
}

// ─── Composant ────────────────────────────────────────────────────────────────

@Component({
  selector: 'pp-data-table',
  imports: [NgClass, NgTemplateOutlet, EmptyStateComponent],
  templateUrl: `data-table.component.html`,
})
export class DataTableComponent<T extends { id?: string }> {
  // ─── Inputs ───────────────────────────────────────────────────────────────
  readonly columns     = input<TableColumn<T>[]>([]);
  readonly data        = input<T[]>([]);
  readonly total       = input<number>(0);
  readonly limit       = input<number>(20);
  readonly loading     = input<boolean>(false);
  readonly showActions = input<boolean>(true);
  readonly trackBy     = input<(item: T) => string | number>((item) => item.id ?? Math.random());

  /** Two-way binding : [(page)]="page" */
  readonly page = model<number>(1);

  // ─── Outputs ──────────────────────────────────────────────────────────────
  readonly pageChange = output<number>();
  readonly edit       = output<T>();
  readonly delete     = output<T>();
  readonly rowClick   = output<T>();

  // ─── Computed ─────────────────────────────────────────────────────────────
  readonly visibleColumns = computed(() => this.columns().filter((c) => !c.hide));

  readonly totalPages = computed(() =>
    this.total() > 0 ? Math.ceil(this.total() / this.limit()) : 1,
  );

  /**
   * linkedSignal : reset la page à 1 dès que les données changent
   * (changement de filtre, recherche, etc.)
   */
  readonly _pageReset = linkedSignal({
    source: this.data,
    computation: () => 1,
  });

  readonly paginationLabel = computed(() => {
    const start = (this.page() - 1) * this.limit() + 1;
    const end   = Math.min(this.page() * this.limit(), this.total());
    return `${start}–${end} sur ${this.total()}`;
  });

  readonly hasRowClick = computed(() => this.rowClick !== undefined);

  // ─── Skeleton ─────────────────────────────────────────────────────────────
  readonly skeletonRows = Array(5).fill(null);

  skeletonWidth(index: number): string {
    const widths = ['75%', '60%', '85%', '50%', '70%'];
    return widths[index % widths.length];
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────
  alignClass(align?: 'left' | 'center' | 'right'): string {
    switch (align) {
      case 'center': return 'text-center';
      case 'right':  return 'text-right';
      default:       return 'text-left';
    }
  }

  getCellValue(item: T, key: string): string {
    const val = key.includes('.') ? getNestedValue(item, key) : (item as Record<string, unknown>)[key];
    if (val === null || val === undefined) return '—';
    if (val instanceof Date) return val.toLocaleDateString('fr-FR');
    return String(val);
  }

  goTo(p: number): void {
    if (p < 1 || p > this.totalPages()) return;
    this.page.set(p);
    this.pageChange.emit(p);
  }
}
