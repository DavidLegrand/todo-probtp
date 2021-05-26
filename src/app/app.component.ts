import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To Do List';
  tasks: Array<Task> = [
    {
      id: 0,
      name: 'Faire la vaisselle',
      complete: true,
      description: 'Ceci est ma description',
    },
    {
      id: 1,
      name: 'Jeter les poubelles',
      complete: true,
      description: 'Ceci est ma description',
    },
    {
      id: 2,
      name: 'Faire les courses',
      complete: false,
      description: 'Ceci est ma description',
    },
  ];

  trackById(index: number, task: Task): number {
    return task.id;
  }

  deleteTaskById(id): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
