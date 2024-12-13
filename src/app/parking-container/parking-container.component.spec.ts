import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingContainerComponent } from './parking-container.component';

describe('ParkingContainerComponent', () => {
  let component: ParkingContainerComponent;
  let fixture: ComponentFixture<ParkingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
