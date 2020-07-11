import { TestBed } from '@angular/core/testing';

import { GetMeditationsService } from './get-meditations.service';

describe('GetMeditationsService', () => {
  let service: GetMeditationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMeditationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
