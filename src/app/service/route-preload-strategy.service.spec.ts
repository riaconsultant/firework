import { TestBed, inject } from '@angular/core/testing';

import { RoutePreloadStrategyService } from './route-preload-strategy.service';

describe('RoutePreloadStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutePreloadStrategyService]
    });
  });

  it('should be created', inject([RoutePreloadStrategyService], (service: RoutePreloadStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
