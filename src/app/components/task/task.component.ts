import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TodoListService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() idTask: number;
  editMode = false;
  task: Task;

  constructor(private tdls: TodoListService) {}

  ngOnInit(): void {
    this.task = this.tdls.getTask(this.idTask);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  getCompleteString(): string {
    return this.task.complete ? 'Terminée' : 'En cours';
  }

  getBtnTxt(): string {
    return this.task.complete ? 'Annuler' : 'Terminer';
  }

  toggleComplete(): void {
    this.tdls.toogleComplete(this.idTask);
  }
}
