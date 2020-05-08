import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedMeditationComponent } from './suggested-meditation.component';

describe('SuggestedMeditationComponent', () => {
  let component: SuggestedMeditationComponent;
  let fixture: ComponentFixture<SuggestedMeditationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedMeditationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedMeditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
