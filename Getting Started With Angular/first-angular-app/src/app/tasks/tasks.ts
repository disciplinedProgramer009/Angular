import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from "./task/task";
import { Newtask } from "./new-task/newtask";
import { NewTaskType } from './task/task.model';

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
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onAddTask() {
    this.newTask = true;
  }

  onCancelNewTask() {
    this.newTask = false;
  }

  onCreateTask($event: NewTaskType) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: this.userId,
      ...$event
    });
    this.newTask = false;
  }
}
