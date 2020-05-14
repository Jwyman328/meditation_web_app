import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkComponent } from './nav-link.component';
import { By } from '@angular/platform-browser';

describe('NavLinkComponent', () => {
  let component: NavLinkComponent;
  let fixture: ComponentFixture<NavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display link name', () => {
    component.linkName= 'test link';
    fixture.detectChanges();
    let titleElement:HTMLElement = fixture.debugElement.query(By.css('.link-text')).nativeElement
    expect(titleElement.textContent).toEqual('test link');
  });
});
