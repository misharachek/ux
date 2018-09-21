import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// angular material
import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

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
