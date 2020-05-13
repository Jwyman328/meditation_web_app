import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMeditationClickableRowComponent } from './individual-meditation-clickable-row.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

let routerSpy;
fdescribe('IndividualMeditationClickableRowComponent', () => {
  let component: IndividualMeditationClickableRowComponent;
  let fixture: ComponentFixture<IndividualMeditationClickableRowComponent>;

  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [IndividualMeditationClickableRowComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      IndividualMeditationClickableRowComponent
    );
    component = fixture.componentInstance;
    // mock the inputs meditationNumber meditationTitleText meditationCourseTitle
    component.meditationNumber = 1;
    component.meditationTitleText = 'test title';
    component.meditationCourseTitle = 'course test title';
    fixture.detectChanges();
  });

  it('should display meditation number in circle', () => {
    let fixtureElement = fixture.debugElement;
    const meditationNumberDisplayed = fixtureElement.query(
      By.css('.meditation-number-circle')
    );
    expect(meditationNumberDisplayed.nativeElement.textContent).toEqual('1');
  });
  it('should display meditation title text', () => {
    let fixtureElement = fixture.debugElement;
    const meditationTitleTextDisplayed = fixtureElement.query(
      By.css('.individual-meditation-item-title')
    );
    expect(meditationTitleTextDisplayed.nativeElement.textContent).toEqual(
      'test title'
    );
  });
  it('should router navigate called on row click', () => {
    let fixtureElement = fixture.debugElement;
    const meditationRowComponent: HTMLElement = fixtureElement.query(
      By.css('.individual-meditation-item')
    ).nativeElement;
    meditationRowComponent.click();
    fixture.detectChanges();
    const amountOfTimesRouterNavigateHit = routerSpy.navigate.calls.count();
    expect(amountOfTimesRouterNavigateHit).toEqual(1);
  });

  it('should navigate to individual-meditation-page with correct argument data on click', () => {
    let fixtureElement = fixture.debugElement;
    const meditationRowComponent: HTMLElement = fixtureElement.query(
      By.css('.individual-meditation-item')
    ).nativeElement;
    meditationRowComponent.click();
    fixture.detectChanges();
    const argumentsSentToIndividualMeditationPage = routerSpy.navigate.calls.first()
      .args[0];
    expect(argumentsSentToIndividualMeditationPage).toEqual([
      'individual-meditation-page',
      'course test title',
      'test title',
    ]);
  });
});
