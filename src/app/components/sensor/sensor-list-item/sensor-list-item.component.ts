import { Component, OnInit } from '@angular/core';
import { sensorType } from 'src/app/Sensor';

@Component({
  selector: 'app-sensor-list-item',
  templateUrl: './sensor-list-item.component.html',
  styleUrls: ['./sensor-list-item.component.css']
})
export class SensorListItemComponent implements OnInit {

  id!: number; name!: string; type!: sensorType; transform!: string;

  setSensor(id: number, name: string, type: sensorType, transform: string)
  {
    this.id = id; this.name = name; this.type = type; this.transform = transform;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
