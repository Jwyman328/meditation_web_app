import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEmotionComponent } from './choose-emotion.component';

describe('ChooseEmotionComponent', () => {
  let component: ChooseEmotionComponent;
  let fixture: ComponentFixture<ChooseEmotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseEmotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
