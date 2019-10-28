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
    width: 500,
    height: 378,
    overflow: false,
  };

  data: CloudData[] = [
    {text: 'නවසීලන්ත', weight: 9, color: '#2E86C1'},
    {text: 'ක්‍රිකට් ', weight: 25},
    {text: 'ක්රිකට් ', weight: 14, color: '#21618C'},
    {text: 'කුසල් මෙන්ඩිස්', weight: 12, color: '#2874A6'},
    {text: 'දිනේෂ් චන්දිමාල්', weight: 11, color: '#2E86C1'},
    {text: 'දිමුත් කරුණාරත්න', weight: 16, color: '#3498DB'},
    {text: 'මැතිව්ස් ', weight: 8, color: '#5DADE2'},
    {text: 'ලංකාව', weight: 10, color: '#85C1E9'},
    {text: 'ශතක ', weight: 6, color: '#AED6F1'},
    {text: 'නිරෝෂන් දික්වැල්ල', weight: 10, color: '#2E86C1'},
    {text: 'සනත් ජයසූරිය', weight: 10, color: '#1B4F72'},
    {text: 'ටෙස්ට්', weight: 9, color: '#2E86C1'},
    {text: 'තරග', weight: 10, color: '#1B4F72'},
    {text: 'පැරදිල', weight: 10, color: '#21618C'},
    {text: 'ක්‍රිඩා ඇමති', weight: 10, color: '#2874A6'},
    {text: 'තිරිමාන්න', weight: 15, color: '#2E86C1'},
    {text: 'දිනුව', weight: 10, color: '#3498DB'},
    {text: 'කණ්ඩායමකම', weight: 8, color: '#5DADE2'},
    {text: 'දේශපාලනයට', weight: 9, color: '#85C1E9'},
    {text: 'ශතක ', weight: 12, color: '#AED6F1'},
    {text: 'ලෝක කුසලාන', weight: 13, color: '#2E86C1'},
    {text: 'තරගාවලිය', weight: 11, color: '#1B4F72'},
    // ...
  ];
  constructor() { }

  ngOnInit() {

  }

}
