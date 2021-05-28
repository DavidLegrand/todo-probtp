import { IsAuthGuard } from './../../guards/is-auth.guard';
import { HomeComponent } from './../../components/home/home.component';
import { TaskDetailsComponent } from './../../components/task-details/task-details.component';
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
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'todolist',
        canActivate: [IsAuthGuard],
        children: [
          { path: '', component: TodolistComponent },
          { path: ':id', component: TaskDetailsComponent },
        ],
      },
      { path: 'login', component: LoginComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
})
export class RoutingModule {}
