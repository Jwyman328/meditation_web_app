import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGraphTypeButtonComponent } from './set-graph-type-button.component';

describe('SetGraphTypeButtonComponent', () => {
  let component: SetGraphTypeButtonComponent;
  let fixture: ComponentFixture<SetGraphTypeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGraphTypeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGraphTypeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
