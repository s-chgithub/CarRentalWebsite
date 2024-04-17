import { TestBed } from '@angular/core/testing';

import { AdminEmailService } from './admin-email.service';

describe('AdminEmailService', () => {
  let service: AdminEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
