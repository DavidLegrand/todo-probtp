import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  name: string = 'Faire la vaisselle';
  complete: boolean = false;
  className = 'list-group-item';
  constructor() {}

  ngOnInit(): void {}

  getComplete(): string {
    return this.complete ? 'Terminée' : 'En cours';
  }

  getItemVariant(): string {
    return this.complete
      ? 'list-group-item-success'
      : 'list-group-item-warning';
  }

  getBadgeVariant(): string {
    return this.complete ? 'bg-success' : 'bg-warning text-dark';
  }

  getBtnTxt(): string {
    return this.complete ? 'Annuler' : 'Terminer';
  }
  
  toggleComplete(): void {
    this.complete = !this.complete;
  }
}
