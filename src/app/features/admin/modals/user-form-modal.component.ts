// src/app/features/admin/modals/user-form-modal.component.ts
import { Component, input, output, inject, signal, OnInit, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { LabelPipe } from '../../../core/pipes/label.pipe';
import { AdminUserService } from '../services/admin-user.service';
import { UserRole } from '../../../core/models/roles.enum';

const ROLES = Object.values(UserRole);

@Component({
  selector: 'pp-user-form-modal',
  imports: [ReactiveFormsModule, ModalComponent, LabelPipe, TranslateModule],
  templateUrl: './user-form-modal.component.html',
})
export class UserFormModalComponent implements OnInit {
  private readonly fb          = inject(FormBuilder);
  private readonly userService = inject(AdminUserService);
  private readonly translate   = inject(TranslateService);

  readonly userId = input<string | undefined>(undefined);
  readonly saved  = output<void>();
  readonly closed = output<void>();

  readonly isEdit     = computed(() => !!this.userId());
  readonly isLoading  = signal(false);
  readonly isFetching = signal(false);
  readonly fetchError = signal<string | null>(null);
  readonly saveError  = signal<string | null>(null);
  readonly roles = ROLES;

  readonly form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    email:     ['', [Validators.required, Validators.email]],
    phone:     [''],
    region:    [''],
    role:      [UserRole.PATIENT, Validators.required],
    status:    ['ACTIVE' as 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'],
  });

  async ngOnInit(): Promise<void> {
    const id = this.userId();
    if (!id) return;
    this.isFetching.set(true);
    this.fetchError.set(null);
    try {
      const user = await this.userService.getById(id).toPromise();
      if (!user) return;
      this.form.patchValue({
        firstName: user.firstName,
        lastName:  user.lastName,
        email:     user.email,
        phone:     user.phone ?? '',
        region:    user.region ?? '',
        role:      user.role,
        status:    user.status,
      });
      this.form.controls.email.disable();
    } catch {
      this.fetchError.set(this.translate.instant('ADMIN.USER_MODAL.FETCH_ERROR'));
    } finally {
      this.isFetching.set(false);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.isLoading.set(true);
    this.saveError.set(null);
    const { firstName, lastName, email, phone, region, role, status } = this.form.getRawValue();
    try {
      if (this.isEdit()) {
        await this.userService.update(this.userId()!, {
          firstName, lastName,
          phone:  phone  || undefined,
          region: region || undefined,
          status,
        }).toPromise();
      } else {
        await this.userService.create({
          email, firstName, lastName,
          phone:  phone  || undefined,
          region: region || undefined,
          role,
        }).toPromise();
      }
      this.saved.emit();
      this.closed.emit();
    } catch {
      this.saveError.set(this.translate.instant('ADMIN.USER_MODAL.SAVE_ERROR'));
    } finally {
      this.isLoading.set(false);
    }
  }

  touched(field: string): boolean { return !!this.form.get(field)?.touched; }
  invalid(field: string, error: string): boolean { return !!this.form.get(field)?.hasError(error); }
}
