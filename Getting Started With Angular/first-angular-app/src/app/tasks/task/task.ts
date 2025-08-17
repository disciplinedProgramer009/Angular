import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TaskType } from './task.model';
import { Card } from "../../shared/card/card";


@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) userTask!: TaskType;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.userTask.id);
  }
}
