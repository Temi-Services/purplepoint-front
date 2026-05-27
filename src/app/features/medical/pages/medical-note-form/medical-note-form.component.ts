// src/app/features/medical/pages/medical-note-form/medical-note-form.component.ts
import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MedicalRecordService } from '../../services/medical-record.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'pp-medical-note-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './medical-note-form.component.html',
})
export class MedicalNoteFormComponent {
  private readonly fb        = inject(FormBuilder);
  private readonly router    = inject(Router);
  private readonly recordSvc = inject(MedicalRecordService);
  private readonly auth      = inject(AuthService);
  private readonly translate = inject(TranslateService);

  readonly id        = input.required<string>();
  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);
    try {
      await this.recordSvc.addNote(this.id(), {
        authorId: this.auth.currentUser()!.id,
        content:  this.form.getRawValue().content,
      }).toPromise();
      this.router.navigate(['/medical/patients', this.id()]);
    } catch {
      this.error.set(this.translate.instant('MEDICAL.NOTE_FORM.ERROR'));
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/medical/patients', this.id()]);
  }
}
