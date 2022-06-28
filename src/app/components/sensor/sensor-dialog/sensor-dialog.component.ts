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

  constructor(public dialogRef: MatDialogRef<SensorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void { }
  public closeDialog() {
    this.dialogRef.close();
  }
  public saveSensor() {
    this.dialogRef.close();
  }
  public deleteSensor() {
    this.data.node.remove();
    this.dialogRef.close();
  }
}