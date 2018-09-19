import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// children
import {HeaderModule} from './header';
import {ContentModule} from './content';
import {FooterModule} from './footer';

import {TodolistComponent} from './root';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ContentModule,
    FooterModule
  ],
  declarations: [
    TodolistComponent
  ],
  exports: [
    TodolistComponent
  ]
})
export class TodlistModule {}
