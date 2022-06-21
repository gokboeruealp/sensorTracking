import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SensorDialogComponent } from './sensor-dialog/sensor-dialog.component';
@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDoubleClick()
  {
    const dialogRef = this.matDialog.open(SensorDialogComponent);
    dialogRef.disableClose = true;  
  }
}
