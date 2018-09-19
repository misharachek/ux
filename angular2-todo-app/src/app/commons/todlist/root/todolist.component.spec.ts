import {async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// children
import {HeaderModule} from '../header';
import {ContentModule} from '../content';
import {FooterModule} from '../footer';

import {TodolistComponent} from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodolistComponent
      ],
      imports: [
        HeaderModule,
        ContentModule,
        FooterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
