import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sensor-dialog',
  templateUrl: './sensor-dialog.component.html',
  styleUrls: ['./sensor-dialog.component.css'],
})
export class SensorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SensorDialogComponent>) { }

  DialogTitle: string = "Sensor";
  ngOnInit(): void {

  }

  onDialogClosed() {
    console.log("dialog opened!");
  }
  closeDialog()
  {
    this.dialogRef.close();
  }
  saveSensor()
  {
    console.log("kaydet");
    this.dialogRef.close();
  }
}
