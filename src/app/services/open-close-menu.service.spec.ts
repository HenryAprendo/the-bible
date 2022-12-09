import { TestBed } from '@angular/core/testing';

import { OpenCloseMenuService } from './open-close-menu.service';

describe('OpenCloseMenuService', () => {
  let service: OpenCloseMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCloseMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
