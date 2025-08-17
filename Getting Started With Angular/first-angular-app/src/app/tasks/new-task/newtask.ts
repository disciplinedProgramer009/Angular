import { Component, Output, EventEmitter, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  imports: [ FormsModule ],
  templateUrl: './newtask.html',
  styleUrl: './newtask.css'
})
export class Newtask {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }
}
