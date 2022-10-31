import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGetAllBooksComponent } from './display-get-all-books.component';

describe('DisplayGetAllBooksComponent', () => {
  let component: DisplayGetAllBooksComponent;
  let fixture: ComponentFixture<DisplayGetAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGetAllBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGetAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
