import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMeditationCoursePageComponent } from './select-meditation-course-page.component';

describe('SelectMeditationCoursePageComponent', () => {
  let component: SelectMeditationCoursePageComponent;
  let fixture: ComponentFixture<SelectMeditationCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMeditationCoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMeditationCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
