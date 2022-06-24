import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SENSORS } from 'src/app/mock-sensors';
import { SensorDialogComponent } from '../sensor-dialog/sensor-dialog.component';

@Component({
  selector: 'app-new-sensor-dialog',
  templateUrl: './new-sensor-dialog.component.html',
  styleUrls: ['./new-sensor-dialog.component.css', '../sensor-dialog/sensor-dialog.component.css']
})
export class NewSensorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SensorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  newSensorButton()
  {
    SENSORS.push({ id: SENSORS.length + 1, name: this.data.name, transform: "transform: translate3d(0px, 0px, 0px)" });
    this.dialogRef.close();
  }

  giveUp()
  {

  }
}
