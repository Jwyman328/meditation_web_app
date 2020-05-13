import { TestBed, fakeAsync } from '@angular/core/testing';

import { LoginUserService } from './login-user.service';
import { loginUserPostDataMock } from '../../../testing/TestHelpers/mockedData/loginUserPostDataMock';
import { asyncData } from '../../../testing/TestHelpers/async-observable-helper';
import { loginResponseModel } from '../../models/http-responses/loginResponseModel';

let service: LoginUserService;
let httpClientSpy: {post:jasmine.Spy}
describe('LoginUserService', () => {

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post'])
    service = new LoginUserService(<any>httpClientSpy)
  });

  it('should return mock token on post request', fakeAsync( () => {
    httpClientSpy.post.and.returnValue(asyncData({token:'mock token'}))
    service.postLoginUser(loginUserPostDataMock).subscribe((response:loginResponseModel) => {
      expect(response.token).toEqual('mock token')
    })
  })); 

  it('should have correct request state status on post request.', fakeAsync(() => {
    httpClientSpy.post.and.returnValue(asyncData({token:'mock token'}))
    service.postLoginUser(loginUserPostDataMock).subscribe((response:loginResponseModel) => {
      expect(service.isError).toBeFalse();
      expect(service.isLoading).toBeTrue();
      expect(service.isSuccess).toBeFalse()
    })
  }))

  it('should have correct request state status on post request success handle.', fakeAsync(() => {
    httpClientSpy.post.and.returnValue(asyncData({token:'mock token'}))
    service.postLoginUser(loginUserPostDataMock).subscribe((response:loginResponseModel) => {
      service.handleRequestSuccess()
      expect(service.isError).toBeFalse();
      expect(service.isLoading).toBeFalse();
      expect(service.isSuccess).toBeTrue();
    })
  }))
  it('should have correct request state status on post request error handle.', fakeAsync(() => {
    httpClientSpy.post.and.returnValue(asyncData({token:'mock token'}))
    service.postLoginUser(loginUserPostDataMock).subscribe((response:loginResponseModel) => {
      service.handleRequestError();
      expect(service.isError).toBeTrue();
      expect(service.isLoading).toBeFalse();
      expect(service.isSuccess).toBeFalse();
    })
  }))
});
