import { Component } from '@angular/core';
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
  title = "Border Sec.";
  sensors = SENSORS;
  ngOnInit() { }

  generateNewSensor() {
    const dialogRef = this.matDialog.open(NewSensorDialogComponent,
      {
        width: '300px',
        height: '300px',
        data: { id: SENSORS.length + 1, name: "" }
      });
    dialogRef.disableClose = true;
  }
}