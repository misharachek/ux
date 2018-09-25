import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// service
import {TodoService} from './services';

// children
import {HeaderModule} from './header';
import {ContentModule} from './content';
import {FooterModule} from './footer';

// angular material
import {MatCardModule} from '@angular/material';

// rot component
import {TodolistComponent} from './root';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ContentModule,
    FooterModule,
    MatCardModule
  ],
  declarations: [
    TodolistComponent
  ],
  providers: [
    TodoService
  ],
  exports: [
    TodolistComponent
  ]
})
export class TodlistModule {}
