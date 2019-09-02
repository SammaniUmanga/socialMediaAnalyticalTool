import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 400,
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    {text: 'මහින්ද', weight: 9, color: '#2E86C1'},
    {text: 'ක්‍රිකට් ', weight: 10, color: '#1B4F72'},
    {text: 'ක්රිකට් ', weight: 10, color: '#21618C'},
    {text: 'කුසල් ', weight: 10, color: '#2874A6'},
    {text: 'මෙන්ඩිස් ', weight: 15, color: '#2E86C1'},
    {text: 'දිමුත් ', weight: 10, color: '#3498DB'},
    {text: 'මැතිව්ස් ', weight: 5, color: '#5DADE2'},
    {text: 'මහින්ද', weight: 10, color: '#85C1E9'},
    {text: 'ශතක ', weight: 10, color: '#AED6F1'},
    {text: 'මහින්ද', weight: 10, color: '#2E86C1'},
    {text: 'මහින්ද', weight: 10, color: '#1B4F72'},
    // ...
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
