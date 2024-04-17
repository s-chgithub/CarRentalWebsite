import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingprocessComponent } from './rentingprocess.component';

describe('RentingprocessComponent', () => {
  let component: RentingprocessComponent;
  let fixture: ComponentFixture<RentingprocessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentingprocessComponent]
    });
    fixture = TestBed.createComponent(RentingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
