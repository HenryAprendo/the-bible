import { TestBed } from '@angular/core/testing';

import { StorageNoteService } from './storage-note.service';

describe('StorageNoteService', () => {
  let service: StorageNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
