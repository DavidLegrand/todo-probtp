import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogoutComponent,
    NotFoundComponent,
    TaskDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
