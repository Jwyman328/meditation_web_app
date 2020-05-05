import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationCourseCardComponent } from './meditation-course-card.component';

describe('MeditationCourseCardComponent', () => {
  let component: MeditationCourseCardComponent;
  let fixture: ComponentFixture<MeditationCourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditationCourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
