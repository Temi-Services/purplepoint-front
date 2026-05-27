// src/app/core/pipes/label.pipe.ts
//
// Usage in templates:
//   {{ med.frequency   | ppLabel:'frequency' }}
//   {{ record.bloodType | ppLabel:'bloodType' }}
//   {{ appt.type       | ppLabel:'appointmentType' }}
//
// label.utils returns an i18n key; this pipe resolves it through TranslateService.

import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { label } from '../utils/label.utils';

type LabelKey = keyof typeof label;

@Pipe({ name: 'ppLabel', standalone: true, pure: false })
export class LabelPipe implements PipeTransform {
  private readonly translate = inject(TranslateService);

  transform(value: string | null | undefined, key: LabelKey): string {
    if (!key || !(key in label)) return value ?? '';
    const i18nKey = (label[key] as (v: string | null | undefined) => string)(value);
    if (!i18nKey) return '';
    // If the key looks like an i18n path (contains a dot), translate it
    if (i18nKey.includes('.')) {
      return this.translate.instant(i18nKey);
    }
    // Otherwise it's a raw value (e.g. blood-type symbols like "A+")
    return i18nKey;
  }
}
