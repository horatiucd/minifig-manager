import { TestBed } from '@angular/core/testing';

import { MinifigService } from './minifig.service';

describe('MinifigService', () => {
  let service: MinifigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinifigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
