import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Colors } from 'ng2-charts';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sentiment score : 70%'];
  public doughnutChartData = [120, 150];
  public doughnutChartType = 'doughnut';

  public barChartOptions: ChartOptions = {responsive: true};
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartColors: any[] = [{backgroundColor:'#E90000'},{backgroundColor:'#1ABF00'},{backgroundColor:'#0000CD'}];
  public barChartData: ChartDataSets[] = [
   { data: [65], label: 'Likes' },
   { data: [49], label: 'Dislikes' },
   { data: [28], label: 'Reach' }
  ];


  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  public barChartLabels: string[] = ['raw stat'];

  constructor() { }

  ngOnInit() {
  }

// events
// public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
//   console.log(event, active);
// }

// public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
//   console.log(event, active);
// }

// public randomize(): void {
//   // Only Change 3 values
//   const data = [100,50,30
//     // Math.round(Math.random() * 100),
//     // 59,
//     // 80,
//     // (Math.random() * 100),
//     // 56,
//     // (Math.random() * 100),
//     //40
//     ];
//   const clone = JSON.parse(JSON.stringify(this.barChartData));
//   clone[0].data = data;
//   this.barChartData = clone;
//   /**
//    * (My guess), for Angular to recognize the change in the dataset
//    * it has to change the dataset variable directly,
//    * so one way around it, is to clone the data, change it and then
//    * assign it;
//    */
// }

}
