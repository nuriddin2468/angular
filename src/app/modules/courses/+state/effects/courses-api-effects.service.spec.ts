import { TestBed } from '@angular/core/testing';

import { CoursesApiEffectsService } from './courses-api-effects.service';

describe('CoursesApiEffectsService', () => {
  let service: CoursesApiEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesApiEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
