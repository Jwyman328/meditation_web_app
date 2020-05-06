import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMeditationPageComponent } from './individual-meditation-page.component';

describe('IndividualMeditationPageComponent', () => {
  let component: IndividualMeditationPageComponent;
  let fixture: ComponentFixture<IndividualMeditationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMeditationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMeditationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
