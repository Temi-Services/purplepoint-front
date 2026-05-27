import {
  Component,
  input,
  output,
  model,
  computed,
  linkedSignal,
  TemplateRef,
  inject,
} from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

export interface TableColumn<T> {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  template?: TemplateRef<{ $implicit: T }>;
  sortable?: boolean;
  hide?: boolean;
}

function getNestedValue(obj: unknown, path: string): unknown {
  return String(path)
    .split('.')
    .reduce((acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined), obj);
}

@Component({
  selector: 'pp-data-table',
  imports: [NgClass, NgTemplateOutlet, EmptyStateComponent, TranslateModule],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent<T extends { id?: string }> {
  private readonly translate = inject(TranslateService);

  readonly columns     = input<TableColumn<T>[]>([]);
  readonly data        = input<T[]>([]);
  readonly total       = input<number>(0);
  readonly limit       = input<number>(20);
  readonly loading     = input<boolean>(false);
  readonly showActions = input<boolean>(true);
  readonly trackBy     = input<(item: T) => string | number>((item) => item.id ?? Math.random());
  readonly page        = model<number>(1);

  readonly pageChange = output<number>();
  readonly edit       = output<T>();
  readonly delete     = output<T>();
  readonly rowClick   = output<T>();

  readonly visibleColumns = computed(() => this.columns().filter((c) => !c.hide));
  readonly totalPages     = computed(() =>
    this.total() > 0 ? Math.ceil(this.total() / this.limit()) : 1,
  );

  readonly _pageReset = linkedSignal({
    source: this.data,
    computation: () => 1,
  });

  readonly paginationLabel = computed(() => {
    const start = (this.page() - 1) * this.limit() + 1;
    const end   = Math.min(this.page() * this.limit(), this.total());
    return this.translate.instant('SHARED.DATA_TABLE.PAGINATION', {
      start,
      end,
      total: this.total(),
    });
  });

  readonly hasRowClick = computed(() => this.rowClick !== undefined);
  readonly skeletonRows = Array(5).fill(null);

  skeletonWidth(index: number): string {
    const widths = ['75%', '60%', '85%', '50%', '70%'];
    return widths[index % widths.length];
  }

  alignClass(align?: 'left' | 'center' | 'right'): string {
    switch (align) {
      case 'center': return 'text-center';
      case 'right':  return 'text-right';
      default:       return 'text-left';
    }
  }

  getCellValue(item: T, key: string): string {
    const val = key.includes('.') ? getNestedValue(item, key) : (item as Record<string, unknown>)[key];
    if (val === null || val === undefined) return '';
    if (val instanceof Date) return val.toLocaleDateString('en-US');
    return String(val);
  }

  goTo(p: number): void {
    if (p < 1 || p > this.totalPages()) return;
    this.page.set(p);
    this.pageChange.emit(p);
  }
}
