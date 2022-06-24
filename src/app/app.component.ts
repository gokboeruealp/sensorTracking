import { Component } from '@angular/core';
import { SENSORS } from './mock-sensors';
import { Sensor, sensorType } from './Sensor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Border Sec.";

  points: Sensor[] = SENSORS;
  ngOnInit() {
  }

  generateNewPoint() {
    //this.points.push(new Sensor({id: 2, name: "a", type: sensorType.aType, transform: "sdf"}));
  }
}