import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpassComponent } from './xpass.component';

describe('XpassComponent', () => {
  let component: XpassComponent;
  let fixture: ComponentFixture<XpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
