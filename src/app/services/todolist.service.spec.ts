import { TestBed } from '@angular/core/testing';

import { TotoListService } from './todolist.service';

describe('TotoListService', () => {
  let service: TotoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
