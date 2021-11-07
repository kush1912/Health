import { TestBed } from '@angular/core/testing';

import { CoachAuthGuard } from './coach-auth.guard';

describe('CoachAuthGuard', () => {
  let guard: CoachAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoachAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
