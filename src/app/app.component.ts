import { Component, Inject } from '@angular/core';
import { SENSORS } from './mock-sensors';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SensorDialogComponent } from './components/sensor/sensor-dialog/sensor-dialog.component';
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

  generateNewPoint() {
    var sensor: SensorComponent;
    const dialogRef = this.matDialog.open(SensorDialogComponent,
      {
        width: '300px',
        height: '300px',
        data: { id: SENSORS.length + 1, node: null, name: "" }
      });
    dialogRef.disableClose = true;
  }
}