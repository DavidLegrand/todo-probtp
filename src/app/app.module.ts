import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { ParentComponent } from './components/in-out/parent/parent.component';
import { EnfantComponent } from './components/in-out/enfant/enfant.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, ParentComponent, EnfantComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
