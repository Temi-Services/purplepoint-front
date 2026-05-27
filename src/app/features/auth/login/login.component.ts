// src/app/features/auth/login/login.component.ts
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/auth/auth.service';
import { NewPasswordModalComponent } from '../new-password/new-password-modal.component';
import { ForgotPasswordModalComponent } from '../forgot-password-modal/forgot-password-modal.component';

@Component({
  selector: 'pp-login',
  imports: [
    ReactiveFormsModule,
    NewPasswordModalComponent,
    TranslateModule,
    ForgotPasswordModalComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly translate = inject(TranslateService);
  readonly auth = inject(AuthService);

  readonly isLoading = this.auth.isLoading;
  readonly challengePending = this.auth.challengePending;
  readonly error = signal<string | null>(null);
  readonly showPassword = signal(false);
  readonly currentYear = new Date().getFullYear();

  showForgotPassword = signal(false);

  readonly form = this.fb.nonNullable.group({
    identifier: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.error.set(null);
    const { identifier, password } = this.form.getRawValue();
    try {
      await this.auth.login(identifier.trim(), password);
    } catch (err: unknown) {
      this.error.set(this.parseError(err));
    }
  }

  private parseError(err: unknown): string {
    const fallback = this.translate.instant('AUTH.LOGIN.ERROR_GENERIC');
    if (err instanceof HttpErrorResponse) {
      const msg: string = err.error?.message ?? err.message ?? '';
      return msg || fallback;
    }
    if (err instanceof Error) {
      return err.message || fallback;
    }
    return fallback;
  }
}
