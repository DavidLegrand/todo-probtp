import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TodoListService } from '../../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor(private tdls: TodoListService) {}

  ngOnInit(): void {}
  
  gettdls(): TodoListService {
    return this.tdls;
  }
  trackById(index: number, task: Task): number {
    return task.id;
  }

  deleteTaskById(id): void {
    this.tdls.tasks = this.tdls.tasks.filter((task) => task.id !== id);
  }
}
