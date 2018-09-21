import {
  Component,
  OnInit
} from '@angular/core';
import {todos} from '../../entities/mock';
import {locales} from './locales';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {
  todos = todos;
  locales = locales;

  constructor() { }

  ngOnInit() {
  }

}
