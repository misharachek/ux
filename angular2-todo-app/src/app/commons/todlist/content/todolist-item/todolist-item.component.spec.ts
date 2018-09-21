import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// angular material
import {
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule
} from '@angular/material';

// root component
import {TodolistItemComponent} from './todolist-item.component';

describe('TodolistItemComponent', () => {
  let component: TodolistItemComponent;
  let fixture: ComponentFixture<TodolistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodolistItemComponent
      ],
      imports: [
        MatCheckboxModule,
        MatDividerModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
