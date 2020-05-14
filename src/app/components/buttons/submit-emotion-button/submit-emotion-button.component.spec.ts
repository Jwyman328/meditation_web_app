import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEmotionButtonComponent } from './submit-emotion-button.component';

describe('SubmitEmotionButtonComponent', () => {
  let component: SubmitEmotionButtonComponent;
  let fixture: ComponentFixture<SubmitEmotionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitEmotionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitEmotionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
