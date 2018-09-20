import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// angular material
import {
  MatButtonModule,
  MatInputModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// root component
import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
