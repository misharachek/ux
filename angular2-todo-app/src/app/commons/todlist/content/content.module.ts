import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentComponent} from './root/';
import {TodolistItemComponent} from './todolist-item';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentComponent,
    TodolistItemComponent
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {}
