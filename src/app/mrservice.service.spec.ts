import { TestBed } from '@angular/core/testing';

import { MrserviceService } from './mrservice.service';

describe('MrserviceService', () => {
  let service: MrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
