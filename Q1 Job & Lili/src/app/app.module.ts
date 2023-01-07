import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { LiliComponent } from './lili/lili.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    LiliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
