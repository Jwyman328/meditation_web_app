import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMeditationCoursePageComponent } from './individual-meditation-course-page.component';

describe('IndividualMeditationCoursePageComponent', () => {
  let component: IndividualMeditationCoursePageComponent;
  let fixture: ComponentFixture<IndividualMeditationCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMeditationCoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMeditationCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
