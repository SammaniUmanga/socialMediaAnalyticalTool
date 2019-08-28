import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';

import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;

  registerForm: FormGroup;
  submitted = false;
  success = false;

  constructor( private formBuilder: FormBuilder,  private dataService: DataService, private authService: AuthService) {
      this.registerForm = this.formBuilder.group({
        fname: ['', Validators.required],
        lname:  ['', Validators.required],
        uname:  ['', Validators.required],
        email:     ['', Validators.required],
        pword:  ['', Validators.required]
    })
   }

   onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.success = true;
  
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  
  createUser(): void {
    let postData = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      email: this.email,
      password: this.password
    }
    this.dataService.createUser(postData).subscribe(res => {
      console.log(res);
    });
   }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
