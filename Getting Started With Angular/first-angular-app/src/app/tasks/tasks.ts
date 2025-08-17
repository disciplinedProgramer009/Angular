import { Component, Input, Output } from '@angular/core';
import { Task } from "./task/task";
import { Newtask } from "./new-task/newtask";
import { TasksService } from './tasks.service'; 

@Component({
  selector: 'app-tasks',
  imports: [Task, Newtask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  newTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.newTask = true;
  }

  onCancelNewTask() {
    this.newTask = false;
  }
}
