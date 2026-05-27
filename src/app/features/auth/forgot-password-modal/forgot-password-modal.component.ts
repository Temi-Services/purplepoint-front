// src/app/features/auth/forgot-password/forgot-password-modal.component.ts
import { Component, inject, signal, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/auth/auth.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'pp-forgot-password-modal',
  imports: [ReactiveFormsModule, ModalComponent, TranslateModule],
  templateUrl: './forgot-password-modal.component.html',
})
export class ForgotPasswordModalComponent {
  private readonly fb        = inject(FormBuilder);
  private readonly auth      = inject(AuthService);
  private readonly translate = inject(TranslateService);

  @Output() closed = new EventEmitter<void>();

  readonly step      = signal<'email' | 'confirm'>('email');
  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);
  readonly sentEmail = signal<string>('');

  readonly emailForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  readonly confirmForm = this.fb.nonNullable.group({
    code:        ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  async onSendCode(): Promise<void> {
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.error.set(null);
    const fallback = this.translate.instant('AUTH.LOGIN.ERROR_GENERIC');
    try {
      const { email } = this.emailForm.getRawValue();
      await this.auth.forgotPassword(email);
      this.sentEmail.set(email);
      this.step.set('confirm');
    } catch (err: unknown) {
      if (err instanceof HttpErrorResponse) {
        this.error.set(err.error?.message ?? fallback);
      } else {
        this.error.set(err instanceof Error ? err.message : fallback);
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  async onConfirm(): Promise<void> {
    if (this.confirmForm.invalid) {
      this.confirmForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.error.set(null);
    const fallback = this.translate.instant('AUTH.LOGIN.ERROR_GENERIC');
    try {
      const { code, newPassword } = this.confirmForm.getRawValue();
      await this.auth.confirmForgotPassword(this.sentEmail(), code, newPassword);
      this.closed.emit();
    } catch (err: unknown) {
      if (err instanceof HttpErrorResponse) {
        this.error.set(err.error?.message ?? fallback);
      } else {
        this.error.set(err instanceof Error ? err.message : fallback);
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  onCancel(): void {
    this.closed.emit();
  }
}
