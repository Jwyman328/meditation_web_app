import { TestBed, fakeAsync } from '@angular/core/testing';

import { EmotionDataService } from './emotion-data.service';
import { emotionDataResponseMock } from 'src/testing/TestHelpers/mockedData/emotionDataResponseMock';
import { asyncData } from '../../../testing/TestHelpers/async-observable-helper';

let httpClientSpy: { get: jasmine.Spy };

let service: EmotionDataService;

describe('EmotionDataService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new EmotionDataService(<any>httpClientSpy);
  });

  it('should return mocked emotion response data on successful get call', fakeAsync(() => {
    httpClientSpy.get.and.returnValue(asyncData(emotionDataResponseMock));
    service.getAllEmotionData('mock token').subscribe((response) => {
      expect(response).toBe(emotionDataResponseMock);
    });
    expect(service).toBeTruthy();
  }));

  it('should set correct http status state when get request called', fakeAsync(() => {
    httpClientSpy.get.and.returnValue(asyncData(emotionDataResponseMock));
    service.getAllEmotionData('mock token').subscribe((response) => {
      expect(service.isError).toBeFalse();
      expect(service.isLoading).toBeTrue();
      expect(service.isSuccess).toBeFalse();
    });
    expect(service).toBeTruthy();
  }));

  it('should set correct http status state when get request success handled', fakeAsync(() => {
    httpClientSpy.get.and.returnValue(asyncData(emotionDataResponseMock));
    service.getAllEmotionData('mock token').subscribe((response) => {
      service.handleRequestSuccess();
      expect(service.isError).toBeFalse();
      expect(service.isLoading).toBeFalse();
      expect(service.isSuccess).toBeTrue();
    });
    expect(service).toBeTruthy();
  }));

  it('should set correct http status state when get request error handled', fakeAsync(() => {
    httpClientSpy.get.and.returnValue(asyncData(emotionDataResponseMock));
    service.getAllEmotionData('mock token').subscribe((response) => {
      service.handleRequestError();
      expect(service.isError).toBeTrue();
      expect(service.isLoading).toBeFalse();
      expect(service.isSuccess).toBeFalse();
    });
    expect(service).toBeTruthy();
  }));
});
