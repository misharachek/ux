import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// angular material
import {
  MatCheckboxModule,
  MatIconModule,
  MatDividerModule
} from '@angular/material';

// child
import {TodolistItemComponent} from '../todolist-item';

// root component
import {ContentComponent} from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent,
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
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
