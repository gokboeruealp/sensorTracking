import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SENSORS } from 'src/app/mock-sensors';
import { SensorComponent } from '../sensor.component';
@Component({
  selector: 'app-sensor-dialog',
  templateUrl: './sensor-dialog.component.html',
  styleUrls: ['./sensor-dialog.component.css'],
})
export class SensorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SensorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  id!: number; node: any; name!: string; component!: SensorComponent;

  ngOnInit(): void {
    this.id = this.data.id;
    this.node = this.data.node;
    this.name = this.data.name;
    this.component = this.data.component;
    SENSORS.forEach(sensor=>
      {
        console.log(sensor.name);
        //console.log(this.name);       
      })
   }
  public closeDialog() {
    this.dialogRef.close();
  }
  public saveSensor() {
    this.dialogRef.close();
  }
  public deleteSensor() {
    this.data.node.remove();
    SENSORS.forEach(sensor => {
      console.log(sensor.name);
    });
    this.dialogRef.close();
  }
}