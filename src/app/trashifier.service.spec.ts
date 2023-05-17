import { TestBed } from '@angular/core/testing';

import { TrashifierService } from './trashifier.service';

describe('TrashifierService', () => {
  let service: TrashifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrashifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
