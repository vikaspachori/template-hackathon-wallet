import { TestBed } from '@angular/core/testing';

import { ChainDataService } from './chain-data.service';

describe('ChainDataService', () => {
  let service: ChainDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChainDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
