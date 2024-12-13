import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFromComponent } from './parking-from.component';

describe('ParkingFromComponent', () => {
  let component: ParkingFromComponent;
  let fixture: ComponentFixture<ParkingFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
