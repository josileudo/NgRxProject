import { TestBed } from '@angular/core/testing';

import { TodoEffectService } from './todo-effect.service';

describe('TodoEffectService', () => {
  let service: TodoEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
