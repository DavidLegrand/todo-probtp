import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogoutComponent,
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
