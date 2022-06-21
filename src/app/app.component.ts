import { Component } from '@angular/core';
import { SensorComponent } from './components/sensor/sensor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Border Sec.";

  pointsFor: string[] = [];
  ngOnInit() {

  }

  generateNewPoint() {
    this.pointsFor.push(this.pointsFor.length.toString());
  }
}