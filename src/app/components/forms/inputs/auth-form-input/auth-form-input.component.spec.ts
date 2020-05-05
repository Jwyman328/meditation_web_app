import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormInputComponent } from './auth-form-input.component';

describe('AuthFormInputComponent', () => {
  let component: AuthFormInputComponent;
  let fixture: ComponentFixture<AuthFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
