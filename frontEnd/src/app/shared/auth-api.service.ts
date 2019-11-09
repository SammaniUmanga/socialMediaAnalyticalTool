import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService, FacebookLoginProvider } from "angularx-social-login";
const apiUrl = "http://localhost:3000/socialapi/";
const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  user: any;
  CMS_API: string;


  constructor(public http: HttpClient, private _socioAuthServ: AuthService) { 
    this.CMS_API = ENV.CMS_API;
  }

  postData(credentials) {
    return new Promise((resolve, reject) => {
    this.http.post( apiUrl  +  JSON.stringify(credentials), httpOptions)
    .subscribe(res => {
         resolve(res); 
        },
         (err) => {
             reject(err);
 });

});

}

  
}
