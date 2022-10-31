import { TestBed } from '@angular/core/testing';

import { WishlistdataService } from './wishlistdata.service';

describe('WishlistdataService', () => {
  let service: WishlistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
