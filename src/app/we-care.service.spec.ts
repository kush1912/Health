import { TestBed } from '@angular/core/testing';

import { WeCareService } from './we-care.service';

describe('WeCareService', () => {
  let service: WeCareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeCareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
