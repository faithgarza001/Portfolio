import { Component } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { donutCharOptions } from './helpers/donutChartOptions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  donutChart = new Chart(donutCharOptions);
}
