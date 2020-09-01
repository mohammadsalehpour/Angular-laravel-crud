import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  editTask: Task;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  add(title: string): void {
    this.editTask = undefined;
    title = title.trim();
    if (!title){
      return;
    }

    const newTask: Task = { title } as Task;
    this.taskService.addTask(newTask).subscribe(task => this.tasks.push(task));
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task.id).subscribe();
  }

  edit(task): void {
    this.editTask = task;
  }

  update(): void {
    if (this.editTask){
      this.taskService.updateTask(this.editTask).subscribe(task => {
        const ix = task ? this.tasks.findIndex(h => h.id === task.id) : -1;
        if (ix > -1){
          this.tasks[ix] = task;
        }
      });
      this.editTask = undefined;
    }
  }

}
