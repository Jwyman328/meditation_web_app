import { TestBed } from '@angular/core/testing';

import { SignupUserService } from './signup-user.service';
import { signUpResponseDataMock } from '../../../testing/TestHelpers/mockedData/signupResponseDataMock';
import { asyncData } from '../../../testing/TestHelpers/async-observable-helper';

let service: SignupUserService;
let httpClientSpy: { post: jasmine.Spy };
fdescribe('SignupUserService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new SignupUserService(<any>httpClientSpy);
  });

  it('should return response mock data on post response', () => {
    httpClientSpy.post.and.returnValue(asyncData(signUpResponseDataMock));
    let signUpPostDataMock = {
      username: 'test',
      password: 'mockpass',
    };
    service.postSignUpUser(signUpPostDataMock).subscribe((response) => {
      expect(response).toEqual(signUpResponseDataMock);
    });
  });
  it('should have correct http status states on post request', () => {
    httpClientSpy.post.and.returnValue(asyncData(signUpResponseDataMock));
    let signUpPostDataMock = {
      username: 'test',
      password: 'mockpass',
    };
    service.postSignUpUser(signUpPostDataMock).subscribe((response) => {
      expect(service.isError).toBeFalse();
      expect(service.isLoading).toBeTrue();
      expect(service.isSuccess).toBeFalse();
    });
  });
  it('should have correct http status states on post request success', () => {
    httpClientSpy.post.and.returnValue(asyncData(signUpResponseDataMock));
    let signUpPostDataMock = {
      username: 'test',
      password: 'mockpass',
    };
    service.postSignUpUser(signUpPostDataMock).subscribe((response) => {
      service.handleRequestSuccess()
      expect(service.isError).toBeFalse();
      expect(service.isLoading).toBeFalse();
      expect(service.isSuccess).toBeTrue();
    });
  });
  it('should have correct http status states on post request error', () => {
    httpClientSpy.post.and.returnValue(asyncData(signUpResponseDataMock));
    let signUpPostDataMock = {
      username: 'test',
      password: 'mockpass',
    };
    service.postSignUpUser(signUpPostDataMock).subscribe((response) => {
      service.handleRequestError()
      expect(service.isError).toBeTrue();
      expect(service.isLoading).toBeFalse();
      expect(service.isSuccess).toBeFalse();
    });
  });
});
