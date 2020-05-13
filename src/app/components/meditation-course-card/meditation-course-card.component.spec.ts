import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationCourseCardComponent } from './meditation-course-card.component';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let routerSpy;
describe('MeditationCourseCardComponent', () => {
  let component: MeditationCourseCardComponent;
  let fixture: ComponentFixture<MeditationCourseCardComponent>;

  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [MeditationCourseCardComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationCourseCardComponent);
    component = fixture.componentInstance;
    // mock inputs
    component.courseData = 'test courseData';
    component.courseTitleText = 'test title';
    component.imageUrl = 'data:image/jpeg;base64,//9k=';
    fixture.detectChanges();
  });

  it('should display course title', () => {
    let debugElement:DebugElement = fixture.debugElement
    let meditationCourseTitleElement:HTMLElement = debugElement.query(By.css('.meditation-course-title')).nativeElement;
    expect(meditationCourseTitleElement.textContent).toEqual('test title');
  });
  it('image should use input imageUrl', () => {
    let debugElement:DebugElement = fixture.debugElement
    let meditationCourseCardBackgroundImage:HTMLImageElement = debugElement.query(By.css('.card-img')).nativeElement;
    expect(meditationCourseCardBackgroundImage.src).toEqual('data:image/jpeg;base64,//9k=');
  });

  it('should have hit route navigation on  course card click', () =>{
    let debugElement:DebugElement = fixture.debugElement
    let entireCourseCardElement:HTMLImageElement = debugElement.query(By.css('.course-card-container')).nativeElement;
    entireCourseCardElement.click()
    fixture.detectChanges();
    const amountOfTimesRouterNavigateHit = routerSpy.navigate.calls.count();
    expect(amountOfTimesRouterNavigateHit).toEqual(1);
  })
  it('should pass correct route to page data to route navigation on course card click', () =>{
    let debugElement:DebugElement = fixture.debugElement
    let entireCourseCardElement:HTMLImageElement = debugElement.query(By.css('.course-card-container')).nativeElement;
    entireCourseCardElement.click()
    fixture.detectChanges();
    const argumentsSentToIndividualCoursePage = routerSpy.navigate.calls.first().args[0];
    expect(argumentsSentToIndividualCoursePage).toEqual([`individual-meditation-course`,`test title`]);
  })
});
