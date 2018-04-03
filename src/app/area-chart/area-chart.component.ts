import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as deArea from 'd3-shape';
import{areaChartData} from '../example';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})

export class AreaChartComponent implements OnInit {

  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };

  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  private area: any;

source = areaChartData.data[0].values;
  // source = [
  //   { label: 1, value: 93.24 },
  //   { label: 2, value: 60.35 },
  //   { label: 3, value: 25.84 },
  //   { label: 4, value: 50.84 },
  //   { label: 5, value: 77.84 },
  //   { label: 6, value: 10.84 },
  //   { label: 7, value: 98.84 }
  // ]

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
  }

  private initSvg() {
    this.svg = d3.select("svg");
    this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis() {
    d3.selectAll('svg').attr('width', '100%');
    this.x = d3Scale.scaleLinear().rangeRound([0, this.width]);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.area = deArea.area().x((d) => { return this.x(d.x); })
      .y1((d) => { return this.y(d.y); });
    this.x.domain(d3Array.extent(this.source, (d) => { return d.x; }));
    this.y.domain([0, d3Array.max(this.source, (d) => { return d.y; })]);
    this.area.y0(this.y(0));
  }

  private drawAxis() {
    this.g.append("path")
      .datum(this.source)
      .attr("fill", "steelblue")
      .attr("d", this.area);

    this.g.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.x).ticks(5));

    this.g.append("g")
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");
  }
}
