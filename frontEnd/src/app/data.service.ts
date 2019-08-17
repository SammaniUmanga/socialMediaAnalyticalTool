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
export class DataService {

  CMS_API: string;

  constructor(private http: HttpClient) {
    this.CMS_API = ENV.CMS_API;
   }

   createUser(data: any): Observable<any> {
      return this.http.post(this.CMS_API + '/api/register', data, httpOptions);
   }

   
}
