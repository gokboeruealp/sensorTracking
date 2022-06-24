import { Component } from '@angular/core';
import { SENSORS } from './mock-sensors';

import { MatDialog } from '@angular/material/dialog';
import { NewSensorDialogComponent } from './components/sensor/new-sensor-dialog/new-sensor-dialog.component';

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
    const dialogRef = this.matDialog.open(NewSensorDialogComponent,
      {
        width: '300px',
        height: '300px',
        data: { id: SENSORS.length + 1, node: null, name: "" }
      });
    dialogRef.disableClose = true;
  }
}