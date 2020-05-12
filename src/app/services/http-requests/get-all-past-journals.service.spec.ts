import { TestBed } from '@angular/core/testing';

import { GetAllPastJournalsService } from './get-all-past-journals.service';
import { getAllPastJournalsResponseDataMock } from '../../../testing/TestHelpers/mockedData/getAllPastJournalResponseDataMock';
import { asyncData } from '../../../testing/TestHelpers/async-observable-helper';

 let httpClientSpy : {get: jasmine.Spy }
 let service: GetAllPastJournalsService;

describe('GetAllPastJournalsService', () => {

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get'])
    service = new GetAllPastJournalsService(<any>httpClientSpy)
  });

  it('should be return mock all past journals data on get request.', () => {
    httpClientSpy.get.and.returnValue(asyncData(getAllPastJournalsResponseDataMock));
    service.getAllPastJournals('mockToken').subscribe((response)=>{
        expect(response).toBe(getAllPastJournalsResponseDataMock)
    })
  });

  it('should set correct http request status on get request', () => {
    httpClientSpy.get.and.returnValue(asyncData(getAllPastJournalsResponseDataMock));
    service.getAllPastJournals('mockToken').subscribe((response)=>{
        expect(service.isError).toBeFalse()
        expect(service.isLoading).toBeTrue()
        expect(service.isSuccess).toBeFalse()
    })
  });

  it('should set correct http request status on get request success handle', () => {
    httpClientSpy.get.and.returnValue(asyncData(getAllPastJournalsResponseDataMock));
    service.getAllPastJournals('mockToken').subscribe((response)=>{
        service.handleRequestSuccess()
        expect(service.isError).toBeFalse()
        expect(service.isLoading).toBeFalse()
        expect(service.isSuccess).toBeTrue()
    })
  });

  it('should set correct http request status on get request error handle', () => {
    httpClientSpy.get.and.returnValue(asyncData(getAllPastJournalsResponseDataMock));
    service.getAllPastJournals('mockToken').subscribe((response)=>{
        service.handleRequestError()
        expect(service.isError).toBeTrue()
        expect(service.isLoading).toBeFalse()
        expect(service.isSuccess).toBeFalse()
    })
  });
});
