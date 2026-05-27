// src/app/features/employee/pages/dashboard/employee-dashboard.component.ts
import {
  Component,
  inject,
  computed,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { httpResource } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/auth/auth.service';
import { ApiResponse, PaginatedData } from '../../../../core/http/api-types';
import { Call } from '../../../../core/models/call.model';
import { WelcomeCardComponent } from '../../../../shared/components/welcome-card/welcome-card.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/data-table/data-table.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { CallLogFormModalComponent } from '../../modals/call-log-form-modal.component';

@Component({
  selector: 'pp-employee-dashboard',
  imports: [
    RouterLink,
    DatePipe,
    TranslateModule,
    WelcomeCardComponent,
    StatCardComponent,
    DataTableComponent,
    BadgeComponent,
    CallLogFormModalComponent,
  ],
  templateUrl: './employee-dashboard.component.html',
})
export class EmployeeDashboardComponent {
  private readonly auth      = inject(AuthService);
  private readonly translate = inject(TranslateService);

  readonly userName   = computed(() => this.auth.currentUser()?.firstName ?? '');
  readonly employeeId = computed(() => this.auth.currentUser()?.id ?? '');

  readonly todayCallsRes = httpResource<ApiResponse<PaginatedData<Call>>>(() => {
    const today = new Date().toISOString().split('T')[0];
    return {
      url:    `${environment.apiUrl}/calls`,
      params: { employeeId: this.employeeId(), date: today, limit: '1' },
    };
  });

  readonly allCallsRes = httpResource<ApiResponse<PaginatedData<Call>>>(() => ({
    url:    `${environment.apiUrl}/calls`,
    params: { employeeId: this.employeeId(), limit: '5' },
  }));

  readonly totalToday  = computed(() => this.todayCallsRes.value()?.data?.total ?? 0);
  readonly totalCalls  = computed(() => this.allCallsRes.value()?.data?.total   ?? 0);
  readonly recentCalls = computed(() => this.allCallsRes.value()?.data?.data    ?? []);
  readonly statsLoading = computed(() => this.todayCallsRes.isLoading());
  readonly tableLoading = computed(() => this.allCallsRes.isLoading());

  readonly outcomeCell = viewChild<TemplateRef<{ $implicit: Call }>>('outcomeCell');
  readonly dateCell    = viewChild<TemplateRef<{ $implicit: Call }>>('dateCell');

  readonly columns = computed<TableColumn<Call>[]>(() => [
    { key: 'patientName', label: this.translate.instant('EMPLOYEE.COLUMNS.PATIENT') },
    { key: 'calledAt',    label: this.translate.instant('EMPLOYEE.COLUMNS.DATE'),    template: this.dateCell() },
    { key: 'duration',    label: this.translate.instant('EMPLOYEE.COLUMNS.DURATION') },
    { key: 'outcome',     label: this.translate.instant('EMPLOYEE.COLUMNS.OUTCOME'), template: this.outcomeCell() },
  ]);

  readonly showCallLog = signal(false);

  onSaved(): void {
    this.todayCallsRes.reload();
    this.allCallsRes.reload();
    this.showCallLog.set(false);
  }
}
