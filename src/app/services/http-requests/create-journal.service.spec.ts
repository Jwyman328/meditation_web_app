import { TestBed } from '@angular/core/testing';

import { CreateJournalService } from './create-journal.service';

describe('CreateJournalService', () => {
  let service: CreateJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateJournalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
