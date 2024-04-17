import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AdminauthguardService } from './adminauthguard.service';

describe('AdminauthguardService', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => AdminauthguardService(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
