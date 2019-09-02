import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/video.model';
import { VideosService } from '../../shared/videos.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { stringify } from 'querystring';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: string;
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  videos: Array<Video>;
  // videos: Video[];
  // videos: Video[] = [
  //   {"Title": "Title1", "View_Count": "1000", "Likes": "100", "DisLikes": "100","VideoID": "abc1", "Comment": "Comment1"},
  //   {"Title": "Title2", "View_Count": "166600", "Likes": "100", "DisLikes": "100","VideoID": "abc2", "Comment": "Comment2"}
  // ]
  constructor(private videosService:VideosService, private searchService:SearchService) { 
    
  }

  searchKey(): void {
    let postKey = {
      search: this.search
    }
    console.log(postKey);
   this.searchService.searchKey(postKey).subscribe(res => {
    console.log(res);
   });
  }

  ngOnInit() {
     this.videosService.getVideos().subscribe(resVideosData => this.videos = resVideosData);
  }

  
}


