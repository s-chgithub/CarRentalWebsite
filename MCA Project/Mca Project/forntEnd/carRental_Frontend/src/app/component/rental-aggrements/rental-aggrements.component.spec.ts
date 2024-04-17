import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAggrementsComponent } from './rental-aggrements.component';

describe('RentalAggrementsComponent', () => {
  let component: RentalAggrementsComponent;
  let fixture: ComponentFixture<RentalAggrementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalAggrementsComponent]
    });
    fixture = TestBed.createComponent(RentalAggrementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
