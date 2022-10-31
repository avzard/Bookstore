import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbookbyidComponent } from './getbookbyid.component';

describe('GetbookbyidComponent', () => {
  let component: GetbookbyidComponent;
  let fixture: ComponentFixture<GetbookbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbookbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetbookbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
