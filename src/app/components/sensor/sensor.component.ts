import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SensorDialogComponent } from './sensor-dialog/sensor-dialog.component';
@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }

  public selectedSensor: any;
  id!: number;

  ngOnInit(): void { }

  onDoubleClick(e: MouseEvent) {
    this.selectedSensor = e.target;
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.matDialog.open(SensorDialogComponent,
      {
        width: '300px',
        height: '300px',
        data: { id: this.id, node: this.selectedSensor, name: "" }
      });
    dialogRef.disableClose = true;
  }
}