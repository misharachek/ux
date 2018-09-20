import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// angular material
import {
  MatButtonModule,
  MatInputModule
} from "@angular/material";

// root component
import {HeaderComponent} from './root';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
