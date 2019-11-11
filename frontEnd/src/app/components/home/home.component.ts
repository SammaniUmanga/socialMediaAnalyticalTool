import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/video.model';
import { VideosService } from '../../shared/videos.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { stringify } from 'querystring';
import { SearchService } from '../../shared/search.service';
import { HttpClient } from '@angular/common/http';
import { CloudData, CloudOptions, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
import { Label, Color,ChartsModule, SingleDataSet } from 'ng2-charts';
import { AuthService } from 'angularx-social-login';
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  barcharts:any;
  videos: any;
  videosid: any;
  results: any;
  comments:Object;
  title:any;
  views:any;
  likes:any;
  dislikes:any;
  sentiscore:any = 0;
  cloudword:any;
  cloudwordscore:any;
  positive:any;
  negative:any;
  arr: any;
  //ID: any;
  trendingWords:any;
  userData: any;


  //-------------------------------------------- Start WORD CLOUD ----------------------------------------------------
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 1,
    height: 295,
    overflow: false,
    //background:'#EEEEEE',
  };

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3, // Elements will become 130 % of current zize on hover
    transitionTime: 0.5, // it will take 0.5 seconds until the zoom level defined in scale property has been reached
    delay: 0.05 // Zoom will take affect after 0.05 seconds
  };

  clouddata = [
    {text: 'පකිස්තානය', weight: 3},
    {text: 'සුසන්තිකා', weight: 4},
    //{text: 'ක්රිකට්', weight: 14},
    {text: 'කුසල් මෙන්ඩිස්', weight: 3},
    {text: 'දිනේෂ් චන්දිමාල්', weight: 2},
    {text: 'විකට්', weight: 3},
    {text: 'එක්දින', weight: 2},
    // {text: 'නවසීලන්ත', weight: 9},
    {text: 'ක්‍රිකට්', weight: 3},
    // {text: 'පන්දුව', weight: 12},
    // {text: 'දිනේෂ් චන්දිමාල්', weight: 12},
    {text: 'දිමුත් කරුණාරත්න', weight: 3},
    {text: 'මැතිව්ස්', weight: 4},
    // {text: 'ලංකාව', weight: 10},
    {text: 'ශතක', weight: 2},
    {text: 'දික්වැල්ල', weight: 3},
    // {text: 'සනත් ජයසූරිය', weight: 10},
    {text: 'ටෙස්ට්', weight: 2},
    // {text: 'තරග', weight: 10},
    // //{text: 'පැරදිල', weight: 10},
    {text: 'ක්‍රිඩා', weight: 5},
    {text: 'තිරිමාන්න', weight: 3},
    {text: 'ඇමති', weight: 3},
    // {text: 'කණ්ඩායමකම', weight: 8},
    {text: 'දේශපාලනය', weight: 4},
    {text: 'රග්බි', weight: 3},
    // {text: 'ලෝක කුසලාන', weight: 13},
    // {text: 'තරගාවලිය', weight: 11}
  ];

  //clicked cloud word will go to the search bar
  logClicked(clicked: CloudData){
    this.search = clicked.text;
  }

  //-------------------------------------------- End WORD CLOUD ----------------------------------------------------

  // showSpinner() {
  //   this.spinner.show(undefined, { fullScreen: true });
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 5000);
  // }

  //-------------------------------------------- Start Doughnut Chart ----------------------------------------------------
  
  urlabc= "http://www.youtube.com/embed/";
  search: string;

  public doughnutChartLabels = ['Positive','Negative'];
  public doughnutChartData = [50,50];
  public doughnutChartType = 'doughnut';
  public doughnutChartColors: Color[] = [ {backgroundColor: ['#1AA000','#C90000']} ];
  public doughnutChartLegend = true;
  public doughnutChartPlugins = [{
    afterLayout: function (chart) {
      chart.legend.legendItems.forEach(
        (label) => {
          let value = chart.data.datasets[0].data[label.index];

          label.text += ' ' + value + ' %';
          return label;
        }
      )
    }
  }];
  //-------------------------------------------- End Doughnut Chart ----------------------------------------------------


  //-------------------------------------------- Start HorizontalBar Chart ----------------------------------------------------

  public barChartOptions: ChartOptions = {responsive: true, plugins: {datalabels: {anchor: 'end',align: 'end'}}};
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartLabels: string[] = [];
  public barChartColors: any[] = [{backgroundColor:'#1AA000'},{backgroundColor:'#C90000'}];
  // public barChartColors: any[] = [{backgroundColor:'#1ABF00'},{backgroundColor:'#E90000'},{backgroundColor:'#0000CD'}];
  
  public barChartData: any[] = [
   { data: [56], label: 'Likes' },
   { data: [45], label: 'Dislikes' },
  // { data: [28], label: 'Reach' }
  ];

  //-------------------------------------------- End HorizontalBar Chart ----------------------------------------------------
  
  
  constructor(private videosService:VideosService, private searchService:SearchService,private httpClient: HttpClient, private router : Router, 
    private socialAuthService: AuthService, private userService: UserService, private spinner: NgxSpinnerService) 
    {
      // this.userData = this.userService.getData();
      
    }

     
  //-------------------------------------------- Start search function ----------------------------------------------------
  searchKey() {
    this.spinner.show(undefined, { fullScreen: true });
    
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
      this.trendingWords = data.valueOf().Trending;

    this.doughnutChartLabels = ['Positive', 'Negative'];
    this.doughnutChartData = [this.positive,this.negative];

    


  //----------------------------------- Push topics to the word cloud ----------------------------------------------------
    let words = [];
  for(var j=0;j<this.cloudword.length;j++){
    words.push({'text': this.cloudword[j],'weight': this.cloudwordscore[j]});
  }
  this.clouddata = words;


  //----------------------------------- Push data to the Barchart ----------------------------------------------------
  let rawstat1 = [];
  let rawstat = [];

   for(let l=0; l<this.videosid.length;l++){
  
    for(var k=0;k<this.videosid.length;k++) {
    
      rawstat.push({'data': [this.likes[k]], 'label':'Likes'});
      rawstat.push({'data': [this.dislikes[k]], 'label':'Dislikes'});
      //rawstat.push({'data': [this.views[k]], 'label':'Reach'});
     
      rawstat1[k] = rawstat.splice(0,3);
      
     }
      
   }
 
  this.barChartData = rawstat1;

  //----------------------------------- Send data to the frontend ----------------------------------------------------
  let finalarray = [];
  let len = this.videosid.length;
  
    for(var i=0;i<len;i++) {
      finalarray.push({
      id: this.videosid[i],
      likes: this.likes[i],
      dislikes: this.dislikes[i],
      views: this.views[i],
      title: this.title[i],
      comments: this.comments[i],
      barcharts: this.barChartData[i]
    }); 
  
  }
    this.videos = [finalarray];

    
console.log(this.barChartData);
console.log(this.trendingWords);
console.log(data);
// if(data){
  this.spinner.hide();
// }

});

}

  ngOnInit() {
    // this.userService.sessionOut();
  }

//   logout() {
//     this.socialAuthService.signOut().then(data => {
//     // this.userService.logOut();
//     localStorage.clear();
//     this.router.navigate(['/login']);
//  });
//  }

}


