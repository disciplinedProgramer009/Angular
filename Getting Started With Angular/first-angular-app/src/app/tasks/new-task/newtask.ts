import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.html',
  styleUrl: './newtask.css'
})
export class Newtask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.close.emit();
  }

  onCreateTask() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);
    this.close.emit();
  }
}
