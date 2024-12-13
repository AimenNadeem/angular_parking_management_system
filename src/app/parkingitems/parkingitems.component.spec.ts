import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingitemsComponent } from './parkingitems.component';

describe('ParkingitemsComponent', () => {
  let component: ParkingitemsComponent;
  let fixture: ComponentFixture<ParkingitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
