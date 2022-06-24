import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SENSORS } from 'src/app/mock-sensors';
@Component({
  selector: 'app-sensor-dialog',
  templateUrl: './sensor-dialog.component.html',
  styleUrls: ['./sensor-dialog.component.css'],
})
export class SensorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SensorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  sensors = SENSORS;
  ngOnInit(): void { this.openDialog(); }

  openDialog()
  {
    console.log(this.data);
    
  }
  public closeDialog() {
    this.dialogRef.close();
  }
  public saveSensor() {
    this.dialogRef.close();
    this.generateNewPoint();
  }
  public deleteSensor() {
    this.data.node.remove();
    console.log(this.data.id)
    this.dialogRef.close();
  }

  generateNewPoint() {
    SENSORS.push({ id: SENSORS.length + 1, name: "", transform: "transform: translate3d(0px, 0px, 0px)" });
    
  }
}
