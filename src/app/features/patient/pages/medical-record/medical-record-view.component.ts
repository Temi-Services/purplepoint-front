import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MedicalRecordService } from '../../../medical/services/medical-record.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { MedicalRecord } from '../../../../core/models/medical-record.model';

const BLOOD_TYPE_LABEL: Record<string, string> = {
  A_POSITIVE:  'A+',  A_NEGATIVE:  'A−',
  B_POSITIVE:  'B+',  B_NEGATIVE:  'B−',
  AB_POSITIVE: 'AB+', AB_NEGATIVE: 'AB−',
  O_POSITIVE:  'O+',  O_NEGATIVE:  'O−',
  UNKNOWN:     'Inconnu',
};

@Component({
  selector: 'pp-medical-record-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './medical-record-view.component.html',
})
export class MedicalRecordViewComponent implements OnInit {
  private readonly auth      = inject(AuthService);
  private readonly recordSvc = inject(MedicalRecordService);

  readonly record    = signal<MedicalRecord | null>(null);
  readonly isLoading = signal(true);

  readonly bloodTypeLabel = (type: string) => BLOOD_TYPE_LABEL[type] ?? type;

  async ngOnInit(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;

    this.isLoading.set(true);
    try {
      const res = await this.recordSvc.getByPatient(patientId).toPromise();
      this.record.set(res ?? null);
    } finally {
      this.isLoading.set(false);
    }
  }
}
