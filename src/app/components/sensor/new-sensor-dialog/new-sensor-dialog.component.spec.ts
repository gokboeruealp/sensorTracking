import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSensorDialogComponent } from './new-sensor-dialog.component';

describe('NewSensorDialogComponent', () => {
  let component: NewSensorDialogComponent;
  let fixture: ComponentFixture<NewSensorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSensorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSensorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
