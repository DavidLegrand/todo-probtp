import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  tasks: Array<Task>;

  constructor() {
    this.tasks = [
      {
        id: 1,
        name: 'Faire la vaisselle',
        complete: true,
        description: 'Ceci est ma description',
        created: new Date(),
      },
      {
        id: 2,
        name: 'Jeter les poubelles',
        complete: true,
        description: 'Ceci est ma description',
        created: new Date(),
      },
      {
        id: 3,
        name: 'Faire les courses',
        complete: false,
        description: 'Ceci est ma description',
        created: new Date(),
      },
    ];
  }

  toogleComplete(id: number) {
    const task = this.getTask(id);
    task.complete = !task.complete;
  }

  // updateTask(updatedTask): void {
  //   this.tasks.map((task) => {
  //     if (task.id === updatedTask.id) task = updatedTask;
  //   });
  // }

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
