// src/app/shared/components/tag-input/tag-input.component.ts
import {
  Component,
  input,
  output,
  signal,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pp-tag-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tag-input.component.html',
})
export class TagInputComponent {
  readonly tags        = model<string[]>([]);
  readonly placeholder = input<string>('Ajouter…');
  readonly color       = input<'red' | 'purple'>('purple');

  readonly inputValue = signal('');

  add(): void {
    const val = this.inputValue().trim();
    if (!val || this.tags().includes(val)) return;
    this.tags.update(tags => [...tags, val]);
    this.inputValue.set('');
  }

  remove(tag: string): void {
    this.tags.update(tags => tags.filter(t => t !== tag));
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this.add();
    }
    if (event.key === 'Backspace' && !this.inputValue() && this.tags().length) {
      this.tags.update(tags => tags.slice(0, -1));
    }
  }
}
