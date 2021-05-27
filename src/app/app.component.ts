import { Component } from '@angular/core';
import { Task } from './models/task';
import { TodoListService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To Do List';
  
  constructor(public todoListService: TodoListService) {}

  trackById(index: number, task: Task): number {
    return task.id;
  }

  deleteTaskById(id): void {
    this.todoListService.tasks = this.todoListService.tasks.filter((task) => task.id !== id);
  }
}
