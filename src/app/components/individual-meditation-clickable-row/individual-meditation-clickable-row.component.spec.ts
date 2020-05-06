import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMeditationClickableRowComponent } from './individual-meditation-clickable-row.component';

describe('IndividualMeditationClickableRowComponent', () => {
  let component: IndividualMeditationClickableRowComponent;
  let fixture: ComponentFixture<IndividualMeditationClickableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMeditationClickableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMeditationClickableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
