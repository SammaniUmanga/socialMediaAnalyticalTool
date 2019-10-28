import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as ENV } from '../environments/environment';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  CMS_API: string;

  constructor(public http: HttpClient) { 
    this.CMS_API = ENV.CMS_API;
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
    const headers = new Headers();
    this.http.post(this.CMS_API + type, JSON.stringify(credentials), httpOptions)
    .subscribe(res => {
         resolve(res); 
        },
         (err) => {
             reject(err);
 });

});

}



}

