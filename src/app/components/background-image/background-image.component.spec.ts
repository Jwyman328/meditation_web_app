import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageComponent } from './background-image.component';
import { By } from '@angular/platform-browser';

describe('BackgroundImageComponent', () => {
  let component: BackgroundImageComponent;
  let fixture: ComponentFixture<BackgroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should use src of input url', () => {
    component.url = 'https://images.test.com/'
    fixture.detectChanges();
    const imageElement: HTMLImageElement = fixture.debugElement.query(By.css('.home-page-background-image')).nativeElement;
    expect(imageElement.src).toEqual('https://images.test.com/');
  });
});
