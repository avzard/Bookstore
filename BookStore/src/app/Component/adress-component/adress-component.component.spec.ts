import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressComponentComponent } from './adress-component.component';

describe('AdressComponentComponent', () => {
  let component: AdressComponentComponent;
  let fixture: ComponentFixture<AdressComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
