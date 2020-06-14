import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationResultsPageComponent } from './meditation-results-page.component';

describe('MeditationResultsPageComponent', () => {
  let component: MeditationResultsPageComponent;
  let fixture: ComponentFixture<MeditationResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditationResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
