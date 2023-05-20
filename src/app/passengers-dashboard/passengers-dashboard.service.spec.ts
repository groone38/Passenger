import { TestBed } from '@angular/core/testing';

import { PassengersDashboardService } from './passengers-dashboard.service';

describe('PassengersDashboardService', () => {
  let service: PassengersDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengersDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
