import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// angular material
import {
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule
} from '@angular/material';

// components
import {ContentComponent} from './root/';
import {TodolistItemComponent} from './todolist-item';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule
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
