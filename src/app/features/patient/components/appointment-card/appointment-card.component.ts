import { Component, input, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Appointment } from '../../../../core/models/appointment.model';

const TYPE_LABEL: Record<string, string> = {
  CONSULTATION: 'Consultation',
  FOLLOW_UP:    'Suivi',
  EMERGENCY:    'Urgence',
  HOME_VISIT:   'Visite à domicile',
};

const STATUS_STYLE: Record<string, string> = {
  SCHEDULED:  'bg-purple-50 text-purple-600',
  CONFIRMED:  'bg-green-50 text-success',
  COMPLETED:  'bg-gray-100 text-muted',
  CANCELLED:  'bg-red-50 text-danger',
};

@Component({
  selector: 'pp-appointment-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './appointment-card.component.html',
})
export class AppointmentCardComponent {
  readonly appointment = input.required<Appointment>();

  readonly typeLabel   = computed(() => TYPE_LABEL[this.appointment().type]   ?? this.appointment().type);
  readonly statusStyle = computed(() => STATUS_STYLE[this.appointment().status] ?? '');
}
