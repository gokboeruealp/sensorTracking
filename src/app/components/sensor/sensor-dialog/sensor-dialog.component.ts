import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Sensor } from 'src/app/Sensor';
import { SensorComponent } from '../sensor.component';
@Component({
  selector: 'app-sensor-dialog',
  templateUrl: './sensor-dialog.component.html',
  styleUrls: ['./sensor-dialog.component.css'],
})
export class SensorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SensorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: SensorComponent) { }

  ngOnInit(): void {
    //console.log("id = " + this.data.id + " name = " + this.data.name + " type = " + this.data.type + " transform = " + this.data.transform);
  }
  public closeDialog() {
    this.dialogRef.close();
  }
  public saveSensor() {
    this.dialogRef.close();
  }
  public deleteSensor() {
    console.log(this.data.sensors);
    this.dialogRef.close();
  }
}
