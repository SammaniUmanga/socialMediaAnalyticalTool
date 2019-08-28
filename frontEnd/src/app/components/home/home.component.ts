import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/video.model';
import { VideosService } from '../../shared/videos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  videos: any;
//  videos: Video[];
  // videos: Video[] = [
  //   {"Title": "Title1", "View_Count": "1000", "Likes": "100", "DisLikes": "100","VideoID": "abc1", "Comment": "Comment1"},
  //   {"Title": "Title2", "View_Count": "166600", "Likes": "100", "DisLikes": "100","VideoID": "abc2", "Comment": "Comment2"}
  // ]
  constructor(private videosService:VideosService) { }

  ngOnInit() {
   // console.log('this is ngoninit');
     this.videosService.getVideos().subscribe(resVideosData => this.videos = resVideosData);
  }

  
}


