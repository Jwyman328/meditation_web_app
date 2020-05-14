import { TestBed } from '@angular/core/testing';

import { MentalHealthComponentStateService } from './mental-health-component-state.service';

describe('MentalHealthComponentStateService', () => {
  let service: MentalHealthComponentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalHealthComponentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
