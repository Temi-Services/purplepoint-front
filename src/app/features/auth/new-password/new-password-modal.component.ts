// 📁 src/app/features/auth/new-password/new-password-modal.component.ts
// ─────────────────────────────────────────────────────────────────────────────
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../core/auth/auth.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

// ─── Validator : les deux mots de passe doivent correspondre ─────────────────
function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const pw      = group.get('newPassword')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pw === confirm ? null : { passwordMismatch: true };
}

@Component({
  selector: 'pp-new-password-modal',
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './new-password-modal.component.html',
})
export class NewPasswordModalComponent {
  private readonly fb   = inject(FormBuilder);
  private readonly auth = inject(AuthService);

  readonly isLoading = this.auth.isLoading;
  readonly error     = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group(
    {
      newPassword:     ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator },
  );

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.error.set(null);
    try {
      await this.auth.newPassword(this.form.getRawValue().newPassword);
    } catch (err: unknown) {
      if (err instanceof HttpErrorResponse) {
        this.error.set(err.error?.message ?? 'Une erreur est survenue. Veuillez réessayer.');
      } else {
        this.error.set(err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.');
      }
    }
  }

  onCancel(): void {
    // On ne peut pas fermer la modale sans définir le mdp :
    // on ne fait rien (l'utilisateur doit compléter le challenge)
  }
}
