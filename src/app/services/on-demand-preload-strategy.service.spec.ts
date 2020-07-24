import {TestBed} from '@angular/core/testing';

import {OnDemandPreloadStrategyService} from './on-demand-preload-strategy.service';

describe('OnDemandPreloadStrategyService', () => {
  let service: OnDemandPreloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnDemandPreloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
