import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

import { select as d3Select } from 'd3-selection';
import { transition as d3Transition } from 'd3-transition';
d3Select.prototype.transition = d3Transition;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  duration: number = 1000;//animation duration
  translateX!: number; translateY!: number; pTranslateX!: number; pTranslateY!: number; //player and sensors positions


  constructor() { }

  ngOnInit(): void {

    var player = d3.select("#player");
    player.style("transform", "translate3d(245px, 450px, 0px)");
  }
  ngDoCheck() { //everyframe
    document.querySelectorAll(".player").forEach(player => {
      var pStyle = window.getComputedStyle(player);
      var pMatrix = new WebKitCSSMatrix(pStyle.webkitTransform);

      this.pTranslateX = pMatrix.m41 - 256;
      this.pTranslateY = pMatrix.m42 - 550;
    });
    document.querySelectorAll(".sensor").forEach(sensor => {
      var style = window.getComputedStyle(sensor);
      var matrix = new WebKitCSSMatrix(style.webkitTransform);

      this.translateX = matrix.m41;
      this.translateY = matrix.m42;

      var distance = Math.sqrt(Math.pow(this.pTranslateX - this.translateX, 2) + Math.pow(this.pTranslateY - this.translateY, 2))
      if (distance < 100) {
        d3.select(sensor).style("background", "red");
      }
      else {
        d3.select(sensor).style("background", "rgb(30, 125, 75)");
      }
    });
  }

  getPlayerPosition(e: MouseEvent): any {
    return { x: e.x, y: e.y };
  }

  play() {
    var player = d3.select("#player");
    player.transition().duration(this.duration)

    .style("transform", "translate3d(245px, 225px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(60px, 225px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(55px, 300px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(200px, 300px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(200px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(50px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(50px, 25px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(50px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(135px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(135px, 50px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(135px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(325px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(325px, 30px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(250px, 30px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(250px, 75px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(250px, 30px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(325px, 30px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(325px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(245px, 125px, 0px)")
    .transition().duration(this.duration)
    .style("transform", "translate3d(245px, 450px, 0px)")

    .transition().duration(0).style("transform", "translate3d(245px, 450px, 0px)")
    .end();
  }
}

