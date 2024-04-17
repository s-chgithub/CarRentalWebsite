import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedcarComponent } from './rentedcar.component';

describe('RentedcarComponent', () => {
  let component: RentedcarComponent;
  let fixture: ComponentFixture<RentedcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentedcarComponent]
    });
    fixture = TestBed.createComponent(RentedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
