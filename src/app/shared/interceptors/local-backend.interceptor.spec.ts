import { TestBed } from '@angular/core/testing';

import { LocalBackendInterceptor } from './local-backend.interceptor';

describe('LocalBackendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LocalBackendInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LocalBackendInterceptor = TestBed.inject(LocalBackendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
