import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SIM Throughput';
  type = ChartType.LineChart;
  data = [
    [new Date(1620133855650), 45, 33, 29, 101, 75, 'Test'],
    [new Date(1620133865650), 95, 23, 89, 55, 102, 'Test'],
    [new Date(1620133875650), 55, 53, 76, 31, 55, 'Test'],
    [new Date(1620133885650), 25, 36, 49, 22, 85, 'Test'],

    [new Date(1620133895650), 35, 23, 49, 41, 65, 'Test'],
    [new Date(1620133905650), 65, 33, 59, 25, 2, 'Test'],
    [new Date(1620133915650), 15, 23, 36, 41, 55, 'Test'],
    [new Date(1620133925650), 55, 31, 42, 12, 65, 'Test'],
  ];
  columnNames = [
    'Month',
    'My Sim 1',
    'My Sim 2',
    'My Sim 3',
    'My Sim 4',
    'My Sim 5',
    { role: 'tooltip', type: 'string', p: { html: true } }
  ];
  options = {
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Throughput',
    },
    pointSize: 3,
    curveType: 'function',
    legend: { position: 'right' },
    crosshair: {
      color: '#757575',
      orientation: 'vertical',
      trigger: 'focus',
    },
    tooltip: {
      trigger: 'focus',
      ignoreBounds: false,
      isHtml: false,
      textStyle: {
        color: '#757575',
        fontSize: '10',
        bold: true,
        italic: true,
      },
    },
    colors: [
      '#0168FF',
      '#00C9FE',
      '#2FCC98',
      '#FF7748',
      '#DA3434',
      '#FFC142',
      '#0893A8',
      '#FBAAA7',
      '#9765FE',
      '#F06AE5',
    ],
  };
  width = 550;
  height = 300;
}
