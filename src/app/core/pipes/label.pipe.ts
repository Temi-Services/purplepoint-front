// 📁 src/app/core/pipes/label.pipe.ts
// ─────────────────────────────────────────────────────────────────────────────
// Usage dans un template :
//   {{ med.frequency | ppLabel:'frequency' }}
//   {{ record.bloodType | ppLabel:'bloodType' }}
//   {{ appt.type | ppLabel:'appointmentType' }}

import { Pipe, PipeTransform } from '@angular/core';
import { label } from '../utils/label.utils';

type LabelKey = keyof typeof label;

@Pipe({ name: 'ppLabel', standalone: true, pure: true })
export class LabelPipe implements PipeTransform {
  transform(value: string | null | undefined, key: LabelKey): string {
    if (!key || !(key in label)) return value ?? '—';
    return (label[key] as (v: string | null | undefined) => string)(value);
  }
}
