import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarchatComponent } from './barchat/barchat.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import {GroupChartComponent} from './group-chart/group-chart.component';
import { WaterFallComponent } from './water-fall/water-fall.component';
import {AreaChartComponent} from './area-chart/area-chart.component';
const appRoutes: Routes = [
  { path: '', component: BarchatComponent , pathMatch: 'full'},
  {
    path: 'line-chart',
    component: LinechartComponent,
  },
  {
    path: 'donut-chart',
    component: DonutChartComponent
  },
  {
    path: 'multi-line-chart',
    component: MultiLineChartComponent
  },
  {
    path:'stacked-bar-chart',
    component: StackedBarChartComponent
  },
  {
    path:'group-chart',
    component: GroupChartComponent
  },
  {
    path: 'area-chart',
    component: AreaChartComponent
  },
  {
    path: 'water-fall',
    component: WaterFallComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
