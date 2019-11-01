import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/video.model';
import { VideosService } from '../../shared/videos.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { stringify } from 'querystring';
import { SearchService } from '../../shared/search.service';
import { HttpClient } from '@angular/common/http';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { Label, Color } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //--------------------------------------------WORD CLOUD----------------------------------------------------
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 550,
    height: 378,
    overflow: false,
  };


  clouddata = [
    {text: 'නවසීලන්ත', weight: 9, color: '#2E86C1'},
    {text: 'ක්‍රිකට්', weight: 25},
    {text: 'ක්රිකට් ', weight: 14, color: '#21618C'},
    {text: 'කුසල් මෙන්ඩිස්', weight: 12, color: '#2874A6'},
    {text: 'දිනේෂ් චන්දිමාල්', weight: 11, color: '#2E86C1'},
    {text: 'විකට්', weight: 6, color: '#2E86C1'},
    {text: 'එක්දින', weight: 13, color: '#2E86C1'},
    {text: 'නවසීලන්ත', weight: 9, color: '#2E86C1'},
    {text: 'ක්‍රිකට් ', weight: 5},
    {text: 'ක්රිකට් ', weight: 10, color: '#2E86C1'},
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
    {text: 'තරගාවලිය', weight: 11, color: '#1B4F72'}
  ];



  //--------------------------------------------WORD CLOUD----------------------------------------------------
  
  urlabc= "http://www.youtube.com/embed/";
  search: string;

  public doughnutChartLabels = ['Negative','Positive'];
  public doughnutChartData = [50,50];
  public doughnutChartType = 'doughnut';
  //public donutColors = { backgroundColor: ['rgba(77,83,96,1)','rgba(0,0,96,1)'] };
  public doughnutChartColors: any[] = [ {backgroundColor: ['red','green']} ]

  videos: any;
  videosid: any;
  results: any;
  comments:Object;
  title:any;
  views:any;
  likes:any;
  dislikes:any;
  sentiscore:any;
  cloudword:any;
  cloudwordscore:any;
  positive:any;
  negative:any;
  arr: any;
  ID: any;

  //video;
  //videos: Video[];
  // videos: Video[] = [
  //   {"Title": "Title1", "View_Count": "1000", "Likes": "100", "DisLikes": "100","VideoID": "abc1", "Comment": "Comment1"},
  //   {"Title": "Title2", "View_Count": "166600", "Likes": "100", "DisLikes": "100","VideoID": "abc2", "Comment": "Comment2"}
  // ]
  constructor(private videosService:VideosService, private searchService:SearchService,private httpClient: HttpClient) {

  }

  // searchKey(): void {
  //   let postKey = {
  //     search: this.search
  //   }
  //   console.log('front1',postKey);
  //  this.searchService.searchKey(postKey).subscribe(res => {

  //     console.log('front2',res);
  //  });
  // }

  searchKey() {
    
    let postKey = this.search
    console.log(postKey);
    this.httpClient.post('http://127.0.0.1:5002/postdata', {postKey}).subscribe(data => {
      

      this.videosid = data.valueOf().ID;
      this.likes = data.valueOf().Likes;
      this.dislikes = data.valueOf().Dislikes;
      this.views = data.valueOf().Views;
      this.comments = data.valueOf().Comment;
      this.title = data.valueOf().Title;
      this.sentiscore = data.valueOf().Sentiment;
      this.cloudword = data.valueOf().Cloudword;
      this.cloudwordscore = data.valueOf().Cloudwordscore;
      this.positive = data.valueOf().Positive;
      this.negative = data.valueOf().Negative;


    this.doughnutChartLabels = ['Negative', 'Positive'];
    this.doughnutChartData = [this.negative,this.positive];
    //this.doughnutChartType = 'doughnut';

let arr = [];
let len = this.videosid.length;

  for(var i=0;i<len;i++) {
  arr.push({
    id: this.videosid[i],
    likes: this.likes[i],
    dislikes: this.dislikes[i],
    views: this.views[i],
    title: this.title[i],
    comments: this.comments[i],
    
  }); 

}

let wdrr = [];
  for(var j=0;j<this.cloudword.length;j++){
    wdrr.push({'text': this.cloudword[j],'weight': this.cloudwordscore[j]});
  }
  this.clouddata = wdrr;

console.log('dddd',this.clouddata);

this.videos = [arr];

console.log(this.cloudword);
console.log('&&&&&', this.videos);

console.log(data);
});
      
}

  ngOnInit() {
  //  this.videosService.getVideos().subscribe(resVideosData => this.videos = resVideosData);
  //  var videos =  this.searchKey();
  //   console.log('sam is working', videos);
  }

}


