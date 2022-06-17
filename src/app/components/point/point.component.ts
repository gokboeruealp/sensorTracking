import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as drag from 'd3-drag'

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  constructor() { }

  selfComp!: PointComponent;

  ngAfterViewInit() {
    this.selfComp = this;
  }

  ngOnInit(): void {
  }

  clickPos(e: MouseEvent) {
    //console.log(this.selfComp);
  }
}