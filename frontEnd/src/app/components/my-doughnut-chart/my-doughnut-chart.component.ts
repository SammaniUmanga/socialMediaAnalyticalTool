import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sentiment score : 70%'];
  public doughnutChartData = [120, 150];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
