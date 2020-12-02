import { TestBed } from '@angular/core/testing';

import { JobprocessService } from './jobprocess.service';

describe('JobprocessService', () => {
  let service: JobprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
