import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchatComponent } from './barchat/barchat.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import {AppRoutingModule} from './app.routing.module';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';
import { GroupChartComponent } from './group-chart/group-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { WaterFallComponent } from './water-fall/water-fall.component';



@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarchatComponent,
    DonutChartComponent,
    MultiLineChartComponent,
    MultiBarChartComponent,
    GroupChartComponent,
    AreaChartComponent,
    WaterFallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
