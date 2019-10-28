import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/video.model';
import { VideosService } from '../../shared/videos.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { stringify } from 'querystring';
import { SearchService } from '../../shared/search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlabc= "http://www.youtube.com/embed/";
  search: string;
  public doughnutChartLabels = ['Negative', 'Positive'];
  public doughnutChartData = [180, 90];
  public doughnutChartType = 'doughnut';
  videos: any;
  videosid: any;
  results: any;
  comments:Object;
  title:any;
  views:any;
  likes:any;
  dislikes:any;
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
      

     // let id = data;

      let id = data.valueOf().ID;
     // console.log(id);
      // let ID: any;
      // let Title: any;
      // let Comment: any;
      // let Views:any;
      // let Likes: any;
      // let Dislikes: any;
      // let viralwords: any;

      this.videosid = data.valueOf().ID;
      this.likes = data.valueOf().Likes;
      this.dislikes = data.valueOf().Dislikes;
      this.views = data.valueOf().Views;
      this.comments = data.valueOf().Comment;
      this.title = data.valueOf().Title;

      let newarr:any[][] =[];
      let newarr1:any[][] =[];


 
        // for(var i=0;i<this.videos.length;i++) {

          // newarr.push(this.videos[i],this.likes[i]);
let arr = [];
let len = this.videosid.length;
//for (let s = 0; s< 1; s++) {

  for(var i=0;i<len;i++) {
  arr.push({
    id: this.videosid[i],
    likes: this.likes[i],
    dislikes: this.dislikes[i],
    views: this.views[i],
    title: this.title[i],
    comments: this.comments[i],
  }); 
// this.videos.push(arr);
}
this.videos = [arr];

console.log('&&&&&', this.videos);
       //  }
        // newarr1.push(newarr);
 
// var arr = [];
// var len = newarr.length;
// for (let s = 0; s< len; s++) {
//   arr.push({
//     id: newarr[i],
//     likes: newarr[i]
//   })
// }


      //console.log(newarr);
     // newarr = this.videos[1].concat(this.likes[0]);
      
      
      // this.dislikes = data.Dislikes;
      // jh.forEach(elements => {
      //   this.videos = elements;
      //   console.log(elements);
      // });
      
      // console.log(data.ID);
      // console.log(data.Title);
      // console.log(data.Comment);
      // console.log(data.Views);
      // console.log(data.Likes);
      // console.log(data.Dislikes);
      // console.log(data.viralwords); 

      console.log(data);
    }
    

  );
     //console.log(data.DisLik));
      // this.videosService.getVideos().subscribe(resVideosData => this.videos = resVideosData );
     
}

  ngOnInit() {
  //  this.videosService.getVideos().subscribe(resVideosData => this.videos = resVideosData);
  //  var videos =  this.searchKey();
  //   console.log('sam is working', videos);
  }


}


