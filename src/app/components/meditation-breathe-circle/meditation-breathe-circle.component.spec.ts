import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationBreatheCircleComponent } from './meditation-breathe-circle.component';
import { By } from '@angular/platform-browser';

describe('MeditationBreatheCircleComponent', () => {
  let component: MeditationBreatheCircleComponent;
  let fixture: ComponentFixture<MeditationBreatheCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditationBreatheCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationBreatheCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display breath-text', () => {
    const breathTextElement:HTMLElement = fixture.debugElement.query(By.css('.breath-text')).nativeElement
    expect(breathTextElement.textContent).toEqual(' Breathe ');
  });
});
