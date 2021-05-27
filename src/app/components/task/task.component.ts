import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TodoListService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  editMode = false;

  constructor(public todoListService: TodoListService) {}

  ngOnInit(): void {}

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }
  
  getComplete(): string {
    return this.task.complete ? 'Terminée' : 'En cours';
  }

  getItemVariant(): string {
    return this.task.complete
      ? 'list-group-item-success'
      : 'list-group-item-warning';
  }

  getBadgeVariant(): string {
    return this.task.complete ? 'bg-success' : 'bg-warning text-dark';
  }

  getBtnTxt(): string {
    return this.task.complete ? 'Annuler' : 'Terminer';
  }

  toggleComplete(): void {
    this.todoListService.toogleComplete(this.task.id);
  }
}
