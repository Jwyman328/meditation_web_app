import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInPageComponent } from './login-in-page.component';

describe('LoginInPageComponent', () => {
  let component: LoginInPageComponent;
  let fixture: ComponentFixture<LoginInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
