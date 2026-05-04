import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly fb   = inject(FormBuilder);
  private readonly auth = inject(AuthService);

  readonly isLoading = this.auth.isLoading;
  readonly error     = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    email:    ['brennan1@gmail.com', [Validators.required, Validators.email]],
    password: ['PurplePoint2026!', [Validators.required, Validators.minLength(8)]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.error.set(null);

    const { email, password } = this.form.getRawValue();

    try {
      await this.auth.login(email, password);
    } catch (err: unknown) {
      this.error.set(this.parseError(err));
    }
  }

  private parseError(err: unknown): string {
    if (err instanceof Error) {
      if (err.message.includes('Incorrect username or password'))
        return 'Email ou mot de passe incorrect.';
      if (err.message.includes('User is not confirmed'))
        return 'Compte non vérifié. Vérifiez votre email.';
    }
    console.log(':: ERROR ::', err);
    return 'Une erreur est survenue. Réessayez.';
  }
}
