import { TestBed } from '@angular/core/testing';

import { BookcartdataServiceService } from './bookcartdata.service.service';

describe('BookcartdataServiceService', () => {
  let service: BookcartdataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcartdataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
