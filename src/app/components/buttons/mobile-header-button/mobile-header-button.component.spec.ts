import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHeaderButtonComponent } from './mobile-header-button.component';

describe('MobileHeaderButtonComponent', () => {
  let component: MobileHeaderButtonComponent;
  let fixture: ComponentFixture<MobileHeaderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHeaderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHeaderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
