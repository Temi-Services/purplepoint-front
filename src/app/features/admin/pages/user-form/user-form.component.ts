// src/app/features/admin/pages/user-form/user-form.component.ts
import { Component, OnInit, inject, input, signal, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LabelPipe } from '../../../../core/pipes/label.pipe';
import { AdminUserService } from '../../services/admin-user.service';
import { UserRole } from '../../../../core/models/roles.enum';

@Component({
  selector: 'pp-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, LabelPipe],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  private readonly fb          = inject(FormBuilder);
  private readonly router      = inject(Router);
  private readonly userService = inject(AdminUserService);
  private readonly translate   = inject(TranslateService);

  readonly id         = input<string>();
  readonly isEdit     = computed(() => !!this.id());
  readonly isLoading  = signal(false);
  readonly isFetching = signal(false);
  readonly error      = signal<string | null>(null);
  readonly roles      = Object.values(UserRole);

  readonly form = this.fb.nonNullable.group({
    firstName:  ['', Validators.required],
    lastName:   ['', Validators.required],
    email:      ['', [Validators.required, Validators.email]],
    phone:      [''],
    role:       [UserRole.PATIENT, Validators.required],
    region:     [''],
    cognitoSub: [''],
  });

  async ngOnInit(): Promise<void> {
    const id = this.id();
    if (!id) return;
    this.isFetching.set(true);
    try {
      const user = await this.userService.getById(id).toPromise();
      if (!user) return;
      this.form.patchValue({
        firstName: user.firstName,
        lastName:  user.lastName,
        phone:     user.phone ?? '',
        role:      user.role,
        region:    user.region ?? '',
      });
      this.form.controls.email.disable();
    } finally {
      this.isFetching.set(false);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);
    const { firstName, lastName, email, phone, role, region, cognitoSub } = this.form.getRawValue();
    try {
      if (this.isEdit()) {
        await this.userService.update(this.id()!, {
          firstName, lastName,
          phone:  phone  || undefined,
          region: region || undefined,
        }).toPromise();
      } else {
        await this.userService.create({
          cognitoSub: cognitoSub || crypto.randomUUID(),
          email, firstName, lastName,
          phone:  phone  || undefined,
          role,
          region: region || undefined,
        }).toPromise();
      }
      this.router.navigate(['/admin/users']);
    } catch {
      this.error.set(this.translate.instant('ADMIN.USER_FORM.ERROR'));
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void { this.router.navigate(['/admin/users']); }
}
