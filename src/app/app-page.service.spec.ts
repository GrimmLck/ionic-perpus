import { TestBed } from '@angular/core/testing';

import { AppPageService } from './app-page.service';

describe('AppPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPageService = TestBed.get(AppPageService);
    expect(service).toBeTruthy();
  });
});
