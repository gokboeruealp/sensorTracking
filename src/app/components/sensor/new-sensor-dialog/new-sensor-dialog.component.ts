import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SENSORS } from 'src/app/mock-sensors';
import { Sensor } from 'src/app/Sensor';
import { SensorComponent } from '../sensor.component';
@Component({
  selector: 'app-new-sensor-dialog',
  templateUrl: './new-sensor-dialog.component.html',
  styleUrls: ['./new-sensor-dialog.component.css', '../sensor-dialog/sensor-dialog.component.css']
})
export class NewSensorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewSensorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: SensorComponent[]) { }

  ngOnInit(): void { }

  newSensorButton() {
    SENSORS.push({
      id: SENSORS.length + 1,
      name: "",
      transform: "translate3d(0px, 0px, 0px)",
      sensorComp: this.data[0],
      node: ""
    });
    console.log(this.data[0]);
    
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}