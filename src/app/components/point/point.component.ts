import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  constructor() { }

  dragPosition = { x: 0, y: 0 };
  ngOnInit(): void {
  }

  setPosition(dragPosition: { x: number, y: number }): void {
    this.dragPosition = dragPosition;
  }
  getPosition(e: MouseEvent) {
    this.dragPosition = { x: e.x, y: e.y };
    console.log(this.dragPosition);
    
    return this.dragPosition;
  }

  setBackground()
  {

  }
}
