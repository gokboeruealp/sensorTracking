import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SensorDialogComponent } from './sensor-dialog/sensor-dialog.component';

import { Sensor } from '../../Sensor'
import { SENSORS } from 'src/app/mock-sensors';
@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  sensors: Sensor[] = SENSORS;

  ngOnInit(): void {
  }

  onDoubleClick() {
    const dialogRef = this.matDialog.open(SensorDialogComponent,
      {
        width: '350px',
        height: '350px',
        data: { sensors: this.sensors }
      });
    dialogRef.disableClose = true;
  }
}