import { Component } from '@angular/core';
import { PointComponent } from './components/point/point.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  points: any[] = [];
  title = "Border Sec.";

  pointCount: number = 0;

  generateNewPoint() {
    if (document.querySelector("#point")) { this.points.push(document.querySelector("#point")); } 
    else { this.points.push(new PointComponent) }
    this.pointCount++;  
  }
}