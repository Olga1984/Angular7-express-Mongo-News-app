import { TestBed } from '@angular/core/testing';

import { MyNewsApiService } from './my-news-api.service';

describe('MyNewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyNewsApiService = TestBed.get(MyNewsApiService);
    expect(service).toBeTruthy();
  });
});
