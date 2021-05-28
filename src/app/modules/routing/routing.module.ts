import { NotFoundComponent } from './../../components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TaskComponent } from './../../components/task/task.component';
import { LoginComponent } from './../../components/login/login.component';
import { TodolistComponent } from './../../components/todolist/todolist.component';

@NgModule({
  declarations: [TodolistComponent, LoginComponent, TaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TodolistComponent, pathMatch: 'full' },
      { path: 'todolist', component: TodolistComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
})
export class RoutingModule {}
