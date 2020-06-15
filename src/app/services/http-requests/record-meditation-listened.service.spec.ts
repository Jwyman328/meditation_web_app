import { TestBed } from '@angular/core/testing';

import { RecordMeditationListenedService } from './record-meditation-listened.service';

describe('RecordMeditationListenedService', () => {
  let service: RecordMeditationListenedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordMeditationListenedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
