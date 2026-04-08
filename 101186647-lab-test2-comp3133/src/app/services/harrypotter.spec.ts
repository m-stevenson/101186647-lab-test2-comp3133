import { TestBed } from '@angular/core/testing';

import { HarryPotterService } from './harrypotter';

describe('Harrypotter', () => {
  let service: HarryPotterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryPotterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
