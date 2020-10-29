import { Component } from '@angular/core';

import {donutCharOptions} from './helpers/donutChartOptions';
import {Chart} from 'highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart = new Chart(donutCharOptions);
}
