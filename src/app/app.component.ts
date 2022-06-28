import { Component, ViewChildren } from '@angular/core';
import { SENSORS } from './mock-sensors';

import { MatDialog } from '@angular/material/dialog';
import { NewSensorDialogComponent } from './components/sensor/new-sensor-dialog/new-sensor-dialog.component';
import { SensorComponent } from './components/sensor/sensor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matDialog: MatDialog) { }

  @ViewChildren('sensor') sensors: SensorComponent[] = [];

  title = "Border Sec.";
  mock_sensors = SENSORS;
  ngOnInit() {

  }

  generateNewSensor() {
    const dialogRef = this.matDialog.open(NewSensorDialogComponent,
      {
        width: '300px',
        height: '300px',
        data: { sensors: this.sensors }
      });
      dialogRef.afterOpened().subscribe(() => {
        console.log("new sensor dialog opened");
      });
      dialogRef.afterClosed().subscribe(() => 
      {
        console.log("new sensor dialog closed");
      });

    dialogRef.disableClose = true;
  }
  updateFunction() {
    this.sensors.forEach(sensorComponent => {
      console.log(sensorComponent.sensor);
    });
  }
}