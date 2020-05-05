import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToPageButtonComponent } from './navigate-to-page-button.component';

describe('NavigateToPageButtonComponent', () => {
  let component: NavigateToPageButtonComponent;
  let fixture: ComponentFixture<NavigateToPageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateToPageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateToPageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
