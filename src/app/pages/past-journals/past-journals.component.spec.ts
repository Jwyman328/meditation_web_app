import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastJournalsComponent } from './past-journals.component';

describe('PastJournalsComponent', () => {
  let component: PastJournalsComponent;
  let fixture: ComponentFixture<PastJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
