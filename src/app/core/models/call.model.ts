export type CallOutcome =
  | 'REACHED'
  | 'NO_ANSWER'
  | 'BUSY'
  | 'WRONG_NUMBER'
  | 'CALLBACK_REQUESTED';

export type CallStatus = 'PENDING' | 'SYNCED' | 'FAILED';

export interface Call {
  id: string;
  employeeId: string;
  patientId: string;
  patientName?: string;
  outcome: CallOutcome;
  duration?: number;
  notes?: string;
  calledAt: string;
  status: CallStatus;
}

export interface CreateCallPayload {
  employeeId: string;
  patientId: string;
  outcome: CallOutcome;
  duration?: number;
  notes?: string;
  calledAt: string;
}
