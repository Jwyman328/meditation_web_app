import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { MainNavBarComponent } from './main-nav-bar.component';
import { UserAuthDataService } from '../../../services/userData/user-auth-data.service';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { By } from '@angular/platform-browser';
import { MobileHeaderButtonComponent } from '../../buttons/mobile-header-button/mobile-header-button.component';

let UserAuthDataServiceSpy;
describe('MainNavBarComponent', () => {
  let component: MainNavBarComponent;
  let fixture: ComponentFixture<MainNavBarComponent>;

  beforeEach(async(() => {
    UserAuthDataServiceSpy = jasmine.createSpyObj('UserAuthDataService',['logOutUser'])
    TestBed.configureTestingModule({
      declarations: [ MainNavBarComponent, NavLinkComponent, MobileHeaderButtonComponent ],
      providers: [{provide:UserAuthDataService, useValue: UserAuthDataServiceSpy}]//userAuthDataService
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('UserAuthDataService logout method hit when Logout nav clicked', () => {  //
    component.isMobileHeader = false;

    const logOutNavLink:HTMLElement = fixture.debugElement.query(By.css('.nav-container__logout')).nativeElement;
    logOutNavLink.click();
    expect(UserAuthDataServiceSpy.logOutUser.calls.count()).toEqual(1)
  });

  it('modal button click changes header open or closed', () => {  //
    component.isMobileHeader = true;
    fixture.detectChanges();
    //header starts closed
    expect(component.isHeaderOpen).toBeFalse()

    const modalButtonElement:HTMLElement = fixture.debugElement.query(By.css('.modalButton')).nativeElement
    modalButtonElement.click();
    expect(component.isHeaderOpen).toBeTrue()
  });

  it('hide all A tag elements when mobile header is closed', () => {
    component.isMobileHeader = true;
    fixture.detectChanges();
    //header starts closed
    component.isHeaderOpen = false
    fixture.detectChanges();
   //const modalButtonElement:HTMLElement = fixture.debugElement.query(By.css('.modalButton')).nativeElement
   const fixtureHtmlElement:HTMLElement = fixture.nativeElement;
   const totalLinkATagsBeingDisplayed = fixtureHtmlElement.querySelectorAll('a').length
    expect(totalLinkATagsBeingDisplayed).toEqual(0)
  })
  it('show all four A tag elements when mobile header is open', () => {
    component.isMobileHeader = true;
    fixture.detectChanges();
    component.isHeaderOpen = true
    fixture.detectChanges();
   const fixtureHtmlElement:HTMLElement = fixture.nativeElement;
   const totalLinkATagsBeingDisplayed = fixtureHtmlElement.querySelectorAll('a').length
    expect(totalLinkATagsBeingDisplayed).toEqual(4)
  })

});
