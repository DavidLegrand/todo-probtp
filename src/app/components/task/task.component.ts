import { Component, OnInit, Input } from '@angular/core';
import { TodoListService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() idTask: number;
  editMode = false;

  constructor(public todoListService: TodoListService) {}

  ngOnInit(): void {}

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }
  
  getComplete(): string {
    return this.todoListService.isComplete(this.idTask) ? 'Terminée' : 'En cours';
  }

  getName(): string {
    return this.todoListService.getName(this.idTask);
  }

  getDescription(): string {
    return this.todoListService.getDescription(this.idTask);
  }

  getItemVariant(): string {
    return this.todoListService.isComplete(this.idTask)
      ? 'list-group-item-success'
      : 'list-group-item-warning';
  }

  getBadgeVariant(): string {
    return this.todoListService.isComplete(this.idTask) ? 'bg-success' : 'bg-warning text-dark';
  }

  getBtnTxt(): string {
    return this.todoListService.isComplete(this.idTask) ? 'Annuler' : 'Terminer';
  }

  toggleComplete(): void {
    this.todoListService.toogleComplete(this.idTask);
  }
}
