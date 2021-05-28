import { Task } from './../../models/task';
import { TodoListService } from 'src/app/services/todolist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  constructor(private route: ActivatedRoute, private tdls: TodoListService, private router: Router) {}

  ngOnInit(): void {
    this.task = this.tdls.getTask(+this.route.snapshot.paramMap.get('id'));
    if(!this.task){
      this.router.navigate(['404'])
    }
  }
}
