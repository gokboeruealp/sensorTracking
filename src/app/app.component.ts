import { Component } from '@angular/core';
import { PointComponent } from './components/point/point.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  points: PointComponent[] = [];
  cordiqnates!: any[];
  title = "Border Sec.";

  generateNewPoint() {
    var point = this.points.push(new PointComponent);
    console.log();
  }
  public appendcord(coord: { x: number, y: number }) {
    this.cordiqnates.push(coord);
    console.log(coord);
    
  }

}
