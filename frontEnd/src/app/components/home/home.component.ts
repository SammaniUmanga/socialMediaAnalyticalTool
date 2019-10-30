import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/video.model';
import { VideosService } from '../../shared/videos.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { stringify } from 'querystring';
import { SearchService } from '../../shared/search.service';
import { HttpClient } from '@angular/common/http';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //--------------------------------------------WORD CLOUD----------------------------------------------------
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 500,
    height: 378,
    overflow: false,
  };


  clouddata = [
    {text: 'නවසීලන්ත', weight: 9, color: '#2E86C1'},
    {text: 'ක්‍රිකට්', weight: 25},
    {text: 'ක්රිකට් ', weight: 14, color: '#21618C'},
    {text: 'කුසල් මෙන්ඩිස්', weight: 12, color: '#2874A6'},
    {text: 'දිනේෂ් චන්දිමාල්', weight: 11, color: '#2E86C1'}
  ];



  //--------------------------------------------WORD CLOUD----------------------------------------------------
  
  urlabc= "http://www.youtube.com/embed/";
  search: string;

  public doughnutChartLabels = ['Negative','Positive'];
  public doughnutChartData = [50,50];
  public doughnutChartType = 'doughnut';

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


