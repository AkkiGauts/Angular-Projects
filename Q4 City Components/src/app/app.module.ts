import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BombayComponent } from './bombay/bombay.component';
import { DelhiComponent } from './delhi/delhi.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { PunjabComponent } from './punjab/punjab.component';

@NgModule({
  declarations: [
    AppComponent,
    BombayComponent,
    DelhiComponent,
    ChennaiComponent,
    PunjabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
