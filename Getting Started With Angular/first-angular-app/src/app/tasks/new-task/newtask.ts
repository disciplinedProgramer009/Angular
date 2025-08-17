import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskType } from '../task/task.model';

@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.html',
  styleUrl: './newtask.css'
})
export class Newtask {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<NewTaskType>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onCreateTask() {
    this.create.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }
}
