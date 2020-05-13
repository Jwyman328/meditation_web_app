import { TestBed, async,  fakeAsync } from '@angular/core/testing';
import { CreateJournalService } from './create-journal.service';
import { asyncData } from 'src/testing/TestHelpers/async-observable-helper';
import { createJournalDataMock } from 'src/testing/TestHelpers/mockedData/createJournalDataMock';
import { throwError, Observable } from 'rxjs';


let httpClientSpy: { post: jasmine.Spy };
let service: CreateJournalService;

describe('CreateJournalService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new CreateJournalService(<any>httpClientSpy);
  });
  it('should return journal created success message on http response', fakeAsync(() => {
    httpClientSpy.post.and.returnValue(asyncData('Journal Created'));
    service.createJournal(createJournalDataMock,'token').subscribe((response)=>{
      expect(response).toBe('Journal Created')
    });
  }));

  it('should change service http status state correctly on success call', fakeAsync(() => {
    httpClientSpy.post.and.returnValue(asyncData('Journal Created'));
    service.createJournal(createJournalDataMock,'token').subscribe((response)=>{
      expect(service.isLoading).toBeTrue();
      expect(service.isError).toBeFalse();
      expect(service.isSuccess).toBeFalse();
      service.handleRequestSuccess()
      expect(service.isSuccess).toBeTruthy();
      expect(service.isLoading).toBeFalse();
      expect(service.isError).toBeFalse();
    });
  }));

  it('should change service http status state correctly on handle request error call ', fakeAsync(() => {
    httpClientSpy.post.and.returnValue(asyncData(throwError('error')))
    service.createJournal(createJournalDataMock,'token').subscribe((successResponse)=>{
      service.handleRequestError()
      expect(service.isSuccess).toBeFalse();
      expect(service.isLoading).toBeFalse();
      expect(service.isError).toBeTrue();
    });
  
}));
})