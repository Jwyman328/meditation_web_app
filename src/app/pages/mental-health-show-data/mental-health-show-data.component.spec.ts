import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthShowDataComponent } from './mental-health-show-data.component';

describe('MentalHealthShowDataComponent', () => {
  let component: MentalHealthShowDataComponent;
  let fixture: ComponentFixture<MentalHealthShowDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalHealthShowDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalHealthShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
