import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  imports: [ FormsModule ],
  templateUrl: './newtask.html',
  styleUrl: './newtask.css'
})
export class Newtask {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }
}
