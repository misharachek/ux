import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// child
import {TodlistModule} from './commons/todlist';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
