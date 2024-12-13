import { TestBed } from '@angular/core/testing';

import { ParkingReportService } from './parking-report.service';

describe('ParkingReportService', () => {
  let service: ParkingReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
