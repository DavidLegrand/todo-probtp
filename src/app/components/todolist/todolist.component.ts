import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TodoListService } from '../../services/todolist.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor(public todoListService: TodoListService) {}

  ngOnInit(): void {
  }

  trackById(index: number, task: Task): number {
    return task.id;
  }

  deleteTaskById(id): void {
    this.todoListService.tasks = this.todoListService.tasks.filter((task) => task.id !== id);
  }


}
