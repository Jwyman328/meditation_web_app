import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestUserInfoComponent } from './guest-user-info.component';

describe('GuestUserInfoComponent', () => {
  let component: GuestUserInfoComponent;
  let fixture: ComponentFixture<GuestUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show guest user access ', () => {
    const element: HTMLElement = fixture.debugElement.nativeElement
    expect(element.querySelectorAll('p')[0].textContent).toEqual('Guest email: guestUser@test.com')
    expect(element.querySelectorAll('p')[1].textContent).toEqual('Guest password: testuser123')

      });
});
