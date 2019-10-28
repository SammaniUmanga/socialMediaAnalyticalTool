import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
   CMS_API: string;

  constructor(private http:HttpClient) { 
    this.CMS_API = ENV.CMS_API;
  }

  getVideos(){
    return this.http.get(this.CMS_API + '/api/getVideos');
  }
}



