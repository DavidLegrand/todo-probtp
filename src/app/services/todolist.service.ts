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

  toogleComplete(id: number) {
    for(let i in this.tasks) {
      if(this.tasks[i].id === id) {
        this.tasks[i].complete = !this.tasks[i].complete;
        return;
      }
    }
  }

  getTask(id: number) {
    for(let i in this.tasks) {
      if(this.tasks[i].id === id) {
        return this.tasks[i];
      }
    }
    return null;
  }

  getName(id: number) {    
    return this.getTask(id).name;
  }

  getDescription(id: number) {
    return this.getTask(id).description;    
  }

  isComplete(id: number) {
    return this.getTask(id).complete;
  }

  
}
