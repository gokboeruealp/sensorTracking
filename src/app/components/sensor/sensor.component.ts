import { Component, destroyPlatform, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sensor } from 'src/app/Sensor';

import { SensorDialogComponent } from './sensor-dialog/sensor-dialog.component';
@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }

  public sensor!: Sensor;

  selectedSensorNode: any;

  ngOnInit(): void { }

  onDoubleClick(e: MouseEvent) {
    this.selectedSensorNode = e.target;
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.matDialog.open(SensorDialogComponent,
      {
        width: '300px',
        height: '300px',
        data: { sensor: this.sensor, node: this.selectedSensorNode }
      });
    dialogRef.disableClose = true;
  }
}