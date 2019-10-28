import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SOCIAL MEDIA TESTER';
  // search: string;

  // serverData: JSON;
  // employeeData: JSON;
  
  // constructor(private httpClient: HttpClient) {
  // }

  // searchKey() {
   
  //     let postKey = this.search
  //     console.log(postKey);
  //     this.httpClient.post('http://127.0.0.1:5002/postdata', {postKey}).subscribe(data => 
  //     console.log(data));
      
  // }

  // getAllEmployees() {
  //   this.httpClient.get('http://127.0.0.1:5002/employeesget').subscribe(data => {
  //     this.employeeData = data as JSON;
  //     console.log(this.employeeData);
  //   })
  // }
}
