import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { lineChart} from '../example';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

export class LinechartComponent implements OnInit {
  public source = lineChart.data[0].values;
  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;
  private myOwn = [];

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    if (this.source) {
      this.source.forEach((value, index) => {
        this.myOwn.push({ label: index + 1, value: value.y, display: value.x })
      });
      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawLine();
    }
  }

  private initSvg() {
    this.svg = d3.select("svg")
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis() {
    const tooltip = d3.select('#tooltip');
    this.x = d3Scale.scaleLinear().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.myOwn, (d) => d.label));
    this.y.domain(d3Array.extent(this.myOwn, (d) => d.value));
  }

  private drawAxis() {
    this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.x).tickFormat((d, i) => { return this.myOwn[i].display; }));

    this.svg.append("g")
      .attr("class", "axis axis--y")
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.label))
      .y((d: any) => this.y(d.value));

    this.svg.append("path")
      .datum(this.myOwn)
      .attr("class", "line")
      .attr("d", this.line);
  }
}
