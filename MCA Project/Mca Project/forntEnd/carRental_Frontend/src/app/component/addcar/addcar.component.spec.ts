import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarComponent } from './addcar.component';

describe('AddcarComponent', () => {
  let component: AddcarComponent;
  let fixture: ComponentFixture<AddcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcarComponent]
    });
    fixture = TestBed.createComponent(AddcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
