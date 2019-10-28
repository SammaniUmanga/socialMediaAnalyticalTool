import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/video.model';
import { VideosService } from '../../shared/videos.service';
@Component({
  selector: 'app-trending-video',
  templateUrl: './trending-video.component.html',
  styleUrls: ['./trending-video.component.css']
})
export class TrendingVideoComponent implements OnInit {

  videos: any;
  // videos: Video[];
  // videos: Video[] = [
  //   {"Title": "Title1", "View_Count": "1000", "Likes": "100", "DisLikes": "100","VideoID": "abc1", "Comment": "Comment1"},
  //   {"Title": "Title2", "View_Count": "166600", "Likes": "100", "DisLikes": "100","VideoID": "abc2", "Comment": "Comment2"}
  // ] 
  constructor(private videosService:VideosService) { }

  ngOnInit() {
    this.videosService.getVideos().subscribe(resVideosData => this.videos = resVideosData);
  }

}
