import {
  Component,
  input,
  output,
  inject,
  signal,
  computed,
  OnDestroy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientNoteService } from '../services/patient-note.service';
import { Appointment } from '../../../core/models/appointment.model';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { DatePipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export type NoteTab = 'text' | 'voice';

const MAX_AUDIO_MB = 25;
const ACCEPTED_TYPES = ['audio/webm', 'audio/mp4', 'audio/wav'];

@Component({
  selector: 'pp-create-note-modal',
  imports: [FormsModule, ModalComponent, DatePipe, TranslateModule],
  templateUrl: './create-note-modal.component.html',
})
export class CreateNoteModalComponent implements OnDestroy {

  private readonly noteService = inject(PatientNoteService);

  private readonly translate = inject(TranslateService);

  readonly patientId = input.required<string>();
  readonly appointments = input<Appointment[]>([]);

  readonly saved = output<void>();
  readonly closed = output<void>();

  // ─── Onglets ──────────────────────────────────────────────────────────────
  readonly activeTab = signal<NoteTab>('text');

  // ─── Onglet Texte ─────────────────────────────────────────────────────────
  readonly textContent = signal('');
  readonly textAppointmentId = signal<string>('');

  // ─── Onglet Vocal ─────────────────────────────────────────────────────────
  readonly isRecording = signal(false);
  readonly recordingSeconds = signal(0);
  readonly audioBlob = signal<Blob | null>(null);
  readonly audioUrl = signal<string | null>(null);
  readonly voiceAppointmentId = signal<string>('');

  private mediaRecorder: MediaRecorder | null = null;
  private chunks: BlobPart[] = [];
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  // ─── État global ──────────────────────────────────────────────────────────
  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);
  readonly maxMB = MAX_AUDIO_MB;

  readonly submitDisabled = computed(() => {
    if (this.activeTab() === 'text') return this.textContent().trim().length === 0;
    return this.audioBlob() === null;
  });

  readonly submitLabel = computed(() =>
    this.translate.instant(
      this.activeTab() === 'text' ? 'PATIENT.NOTE_MODAL.SUBMIT_TEXT' : 'PATIENT.NOTE_MODAL.SUBMIT_VOICE'
    )
  );

  readonly timerLabel = computed(() => {
    const s = this.recordingSeconds();
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  });

  // ─── Actions ──────────────────────────────────────────────────────────────
  setTab(tab: NoteTab): void {
    this.activeTab.set(tab);
    this.error.set(null);
  }

  async toggleRecording(): Promise<void> {
    if (this.isRecording()) {
      this.stopRecording();
    } else {
      await this.startRecording();
    }
  }

  private async startRecording(): Promise<void> {
    this.error.set(null);
    this.audioBlob.set(null);
    this.audioUrl.set(null);
    this.chunks = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.chunks.push(e.data);
      };

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'audio/webm' });
        if (blob.size > MAX_AUDIO_MB * 1024 * 1024) {
          this.error.set(this.translate.instant('PATIENT.NOTE_MODAL.SIZE_ERROR', { maxMB: MAX_AUDIO_MB }));
          return;
        }
        this.audioBlob.set(blob);
        this.audioUrl.set(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };

      this.mediaRecorder.start();
      this.isRecording.set(true);
      this.recordingSeconds.set(0);
      this.timerInterval = setInterval(() => {
        this.recordingSeconds.update((s) => s + 1);
      }, 1000);
    } catch {
      this.error.set(this.translate.instant('PATIENT.NOTE_MODAL.MIC_ERROR'));
    }
  }

  private stopRecording(): void {
    this.mediaRecorder?.stop();
    this.isRecording.set(false);
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  resetRecording(): void {
    this.stopRecording();
    this.audioBlob.set(null);
    if (this.audioUrl()) {
      URL.revokeObjectURL(this.audioUrl()!);
      this.audioUrl.set(null);
    }
    this.recordingSeconds.set(0);
    this.error.set(null);
  }

  async onSubmit(): Promise<void> {
    this.error.set(null);
    this.isLoading.set(true);

    try {
      if (this.activeTab() === 'text') {
        await this.noteService
          .createText(this.patientId(), {
            content: this.textContent().trim(),
            appointmentId: this.textAppointmentId() || undefined,
          })
          .toPromise();
      } else {
        const blob = this.audioBlob();
        if (!blob) return;
        const formData = new FormData();
        formData.append('audio', blob, `note-${Date.now()}.webm`);
        if (this.voiceAppointmentId()) {
          formData.append('appointmentId', this.voiceAppointmentId());
        }
        await this.noteService.createVoice(this.patientId(), formData).toPromise();
      }

      this.saved.emit();
      this.closed.emit();
    } catch {
      this.error.set(this.translate.instant('AUTH.LOGIN.ERROR_GENERIC'));
    } finally {
      this.isLoading.set(false);
    }
  }

  // ─── Lifecycle ────────────────────────────────────────────────────────────
  ngOnDestroy(): void {
    this.resetRecording();
  }
}
