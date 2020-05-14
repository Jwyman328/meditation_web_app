import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthComponent } from './mental-health.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateJournalService } from '../../services/http-requests/create-journal.service';
import { RequestSentStatus } from 'src/app/services/http-requests/RequestSentStatusHandler/RequestSentStatusHandler';

/* let createJournalSpy;
let comp;
class MockCreateJournalService extends RequestSentStatus {
  createJournal(){
    console.log('hit')
  }
}
let mockInstance = new MockCreateJournalService()
fdescribe('MentalHealthComponent', () => {
  let component: MentalHealthComponent;
  let fixture: ComponentFixture<MentalHealthComponent>;

  beforeEach(async(() => {
    //createJournalSpy = jasmine.createSpyObj('CreateJournalService', ['createJournal'])
    TestBed.configureTestingModule({
      declarations: [ MentalHealthComponent ],
      imports: [RouterTestingModule],
      providers: [{provide:CreateJournalService, useValue: mockInstance}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // error message shows when journal response is error
  // errorMsg does not show when no error response
  // emotion-phrase element shows message with compoennt varirables todaysDate and choosenEmotion
  //textarea and journalText component variable are synced together
});
 */