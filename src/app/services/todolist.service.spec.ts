import { TestBed } from '@angular/core/testing';

import { TodoListService } from './todolist.service';

describe('TotoListService', () => {
  let service: TodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
