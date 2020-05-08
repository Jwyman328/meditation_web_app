import { TestBed } from '@angular/core/testing';

import { GetAllPastJournalsService } from './get-all-past-journals.service';

describe('GetAllPastJournalsService', () => {
  let service: GetAllPastJournalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPastJournalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
