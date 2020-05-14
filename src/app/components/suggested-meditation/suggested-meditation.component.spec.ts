import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedMeditationComponent } from './suggested-meditation.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { randomMeditationCourseMock } from '../../../testing/TestHelpers/mockedData/randomMeditationCourseMock';
import { Router } from '@angular/router';

let routeSpy;
describe('SuggestedMeditationComponent', () => {
  let component: SuggestedMeditationComponent;
  let fixture: ComponentFixture<SuggestedMeditationComponent>;

  beforeEach(async(() => {
    routeSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [SuggestedMeditationComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: routeSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedMeditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display mock meditaiton title ', () => {
    component.randomMeditation = randomMeditationCourseMock;
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query(
      By.css('.random-meditation-title') //
    ).nativeElement;
    expect(titleElement.textContent).toEqual('test meditation');
  });

  it('should use mock meditation course photo url in image element', () => {
    //
    component.randomMeditation = randomMeditationCourseMock;
    fixture.detectChanges();
    const courseImageElement: HTMLImageElement = fixture.debugElement.query(
      By.css('.random-meditation-photo') //
    ).nativeElement;
    expect(courseImageElement.src).toEqual('data:image/jpeg;base64,//mock');
  });
  it('Element click uses mocked randomMeditation and randomCourse title for route navigation', () => {
    component.randomMeditation = randomMeditationCourseMock;
    component.randomCourseTitle = 'test course title';
    fixture.detectChanges();
    const element: HTMLElement = fixture.debugElement.query(
      By.css('.random-meditation') //
    ).nativeElement;
    element.click();
    const randomMeditationRouteUrlArgs = routeSpy.navigate.calls.first()
      .args[0];
    expect(randomMeditationRouteUrlArgs).toEqual([
      'individual-meditation-page',
      'test course title',
      'test meditation',
    ]);

  });
});
