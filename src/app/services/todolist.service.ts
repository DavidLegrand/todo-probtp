import { Injectable } from '@angular/core';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  tasks: Array<Task>;

  constructor() { 

    this.tasks = [
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

  }

  
}
