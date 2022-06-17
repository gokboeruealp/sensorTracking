import { Component, OnInit, ElementRef } from '@angular/core';

import * as d3 from 'd3-selection';

import { select as d3Select } from 'd3-selection';
import { transition as d3Transition } from 'd3-transition';
d3Select.prototype.transition = d3Transition;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  position!: { x: number, y: number };
  duration: number = 250;

  //pointCoord: {point: any, x: number, y: number}[] = []
  pointCoord = new Set();
  paths: { axis: string, value: number }[] =
    [
      { axis: 'y', value: -150 },
      { axis: 'x', value: -50 },
      { axis: 'y', value: -250 },
      { axis: 'x', value: -200 },
      { axis: 'y', value: -150 },
      { axis: 'x', value: -50 },
      { axis: 'y', value: -320 },
      { axis: 'x', value: 65 },
      { axis: 'y', value: -435 },
      { axis: 'x', value: -5 },
      { axis: 'y', value: -390 },
      { axis: 'x', value: -10 },
      { axis: 'y', value: -435 },
      { axis: 'x', value: 65 },
      { axis: 'y', value: -320 },
      { axis: 'x', value: -200 },
      { axis: 'y', value: -400 },
      { axis: 'x', value: -210 },
      { axis: 'y', value: -320 },
      { axis: 'x', value: -110 },
      { axis: 'y', value: -400 },
      { axis: 'x', value: -120 },
      { axis: 'y', value: -320 },
      { axis: 'x', value: -15 },
      { axis: 'y', value: 0 },
    ];


  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    this.position = { x: 245, y: 450 }
  }
  ngDoCheck() { //everyframe
    document.querySelectorAll("#sensor").forEach(point => {
      this.pointCoord = new Set();
      var style = window.getComputedStyle(point);
      var matrix = new WebKitCSSMatrix(style.webkitTransform);
      //style.setProperty("background", "rgb(0,0,0)");

      const translateX = matrix.m41;
      const translateY = matrix.m42;
      //this.pointCoord.add({ point: point, x: translateX, y: translateY });

            
    });
  }

  getPlayerPosition(e: MouseEvent): any {
    console.log(e.x + " " + e.y);
    return { x: e.x, y: e.y };
  }

  play() {
    this.position = { x: 245, y: 450 }
    var player = d3.select("#player");
    player
      .transition().duration(this.duration)
      .attr(this.paths[0].axis, this.paths[0].value)
      .transition().duration(this.duration)
      .attr(this.paths[1].axis, this.paths[1].value)
      .transition().duration(this.duration)
      .attr(this.paths[2].axis, this.paths[2].value)
      .transition().duration(this.duration)
      .attr(this.paths[3].axis, this.paths[3].value)
      .transition().duration(this.duration)
      .attr(this.paths[4].axis, this.paths[4].value)
      .transition().duration(this.duration)
      .attr(this.paths[5].axis, this.paths[5].value)
      .transition().duration(this.duration)
      .attr(this.paths[6].axis, this.paths[6].value)
      .transition().duration(this.duration)
      .attr(this.paths[7].axis, this.paths[7].value)
      .transition().duration(this.duration)
      .attr(this.paths[8].axis, this.paths[8].value)
      .transition().duration(this.duration)
      .attr(this.paths[9].axis, this.paths[9].value)
      .transition().duration(this.duration)
      .attr(this.paths[10].axis, this.paths[10].value)
      .transition().duration(this.duration)
      .attr(this.paths[11].axis, this.paths[11].value)
      .transition().duration(this.duration)
      .attr(this.paths[12].axis, this.paths[12].value)
      .transition().duration(this.duration)
      .attr(this.paths[13].axis, this.paths[13].value)
      .transition().duration(this.duration)
      .attr(this.paths[14].axis, this.paths[14].value)
      .transition().duration(this.duration)
      .attr(this.paths[15].axis, this.paths[15].value)
      .transition().duration(this.duration)
      .attr(this.paths[16].axis, this.paths[16].value)
      .transition().duration(this.duration)
      .attr(this.paths[17].axis, this.paths[17].value)
      .transition().duration(this.duration)
      .attr(this.paths[18].axis, this.paths[18].value)
      .transition().duration(this.duration)
      .attr(this.paths[19].axis, this.paths[19].value)
      .transition().duration(this.duration)
      .attr(this.paths[20].axis, this.paths[20].value)
      .transition().duration(this.duration)
      .attr(this.paths[21].axis, this.paths[21].value)
      .transition().duration(this.duration)
      .attr(this.paths[22].axis, this.paths[22].value)
      .transition().duration(this.duration)
      .attr(this.paths[23].axis, this.paths[23].value)
      .transition().duration(this.duration)
      .attr(this.paths[24].axis, this.paths[24].value)
      .transition().duration(this.duration);
  }
}

