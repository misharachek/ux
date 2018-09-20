import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// angular material
import {MatCardModule} from "@angular/material";

// children
import {HeaderModule} from '../header';
import {ContentModule} from '../content';
import {FooterModule} from '../footer';

// root component
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
        BrowserAnimationsModule,
        FooterModule,
        MatCardModule
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
