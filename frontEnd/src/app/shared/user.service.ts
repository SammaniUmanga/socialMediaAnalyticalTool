import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

const noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  };
  CMS_API: string;

  constructor(private http: HttpClient) {
    this.CMS_API = ENV.CMS_API;
   }

  postUser(data: any): Observable<any> {
    return this.http.post(this.CMS_API + '/api/register', data, noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(this.CMS_API + '/api/authenticate', authCredentials, noAuthHeader);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
 
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  getUserProfile() {
    return this.http.get(this.CMS_API + '/api/userProfile');
  }
}
