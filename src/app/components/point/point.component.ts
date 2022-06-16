import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  constructor() { }

  selfComp!: PointComponent;

  dragPosition = { x: 0, y: 0 };

  ngAfterViewInit() {
    this.selfComp = this;
    this.setPointComponent(this);
  }

  ngOnInit(): void {  }

  clickPos(e: MouseEvent) {
    console.log(this.selfComp);
  }

  setPointComponent(point: PointComponent) {
    console.log(document.getElementById("point")?.getElementsByTagName("[cdkDragFreeDragPosition]"));
  }
}
