import { TestBed } from '@angular/core/testing';

import { AuthApiEffectsService } from './auth-api-effects.service';

describe('AuthApiEffectsServiceTsService', () => {
  let service: AuthApiEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthApiEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
