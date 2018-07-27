import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Tip from 'd3-tip';
import { barData } from '../example';
@Component({
  selector: 'app-barchat',
  templateUrl: './barchat.component.html',
  styleUrls: ['./barchat.component.css']
})
export class BarchatComponent implements OnInit {
  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };

  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  private tip;

  public source = barData.data[0].values;


  constructor() { }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  private initSvg() {
    this.svg = d3.select('#bar-chart > svg');
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.source.map((d) => d.x));
    this.y.domain([0, d3Array.max(this.source, (d) => d.y)]);
    this.tip = d3Tip().attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(d => {
        return "<strong>"+d.x +"</strong> <span style='color:red'> year:" + d.y + "</span>";
      })
  }

  private drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y).tickFormat((d, i) => d / 10000 + 'k'))
      .call(this.tip)
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end');
  }

  private drawBars() {
    this.g.selectAll('.bar')
      .data(this.source)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => this.x(d.x))
      .attr('y', (d) => this.y(d.y))
      .attr('width', this.x.bandwidth())
      .attr('height', (d) => this.height - this.y(d.y))
      .on('mouseover', this.tip.show)
      .on('mouseout', this.tip.hide);
    this.svg.append('g')
      .append('text')
      .text('Bar chart kumar')
      .attr('class', 'title')
      .attr('x', this.width / 4)
      .attr('y', this.margin.bottom);
  }
}
