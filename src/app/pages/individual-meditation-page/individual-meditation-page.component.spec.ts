import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMeditationPageComponent } from './individual-meditation-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

/* let activatedRouterSpy;
describe('IndividualMeditationPageComponent', () => {
  let component: IndividualMeditationPageComponent;
  let fixture: ComponentFixture<IndividualMeditationPageComponent>;

  beforeEach(async(() => {
    activatedRouterSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    TestBed.configureTestingModule({
      declarations: [IndividualMeditationPageComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMeditationPageComponent);
    component = fixture.componentInstance;
    // set individual data
     component.meditationTitle = 'test title';
    component.meditationPhotoUrl = 'test url';
    component.courseTitle = 'test course title';
    component.meditationAudioUrl = 'test audio'; 
    fixture.detectChanges();
  });

  it('should display Breathe test', () => {
   // const breatheElement: HTMLElement = fixture.debugElement.query(By.css('.breath-text')).nativeElement;
    //expect(breatheElement.textContent).toEqual('Breatg');
    expect(component).toBeTruthy()
  });
}); */
