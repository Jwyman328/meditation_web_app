import { TestBed } from '@angular/core/testing';

import { MentalHealthShowDataStateService } from './mental-health-show-data-state.service';

describe('MentalHealthShowDataStateService', () => {
  let service: MentalHealthShowDataStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalHealthShowDataStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
