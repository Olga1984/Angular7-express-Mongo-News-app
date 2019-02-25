import { TestBed } from '@angular/core/testing';

import { WorldNewsApiService } from './world-news-api.service';

describe('WorldNewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldNewsApiService = TestBed.get(WorldNewsApiService);
    expect(service).toBeTruthy();
  });
});
