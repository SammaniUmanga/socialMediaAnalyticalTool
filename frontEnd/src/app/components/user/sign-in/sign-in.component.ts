import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../../shared/user.service';
import { NgForm } from '@angular/forms';
import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  constructor(private userService: UserService,private router : Router, private socialAuthService: SocialAuthService ) { }

  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/home');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }


//   public facebookLogin() {
//     let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
//     this.socialAuthService.signIn(socialPlatformProvider).then(
//       (userData) => {
//             //this will return user data from facebook. What you need is a user token which you will send it to the server
//             this.userService.sendToRestApiMethod(userData['token']);
//            // this.userService.setToken(userData['token']);
//             this.router.navigateByUrl('/userprofile');
//        },
//        err => {
//         this.serverErrorMessages = err.error.message;
//       }

//     );
// }

  // public signinWithGoogle() {
  //   let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

  //   this.socialAuthService.signIn(socialPlatformProvider)
  //     .then((userData) => {
  //       //on success
  //       //this will return user data from google. What you need is a user token which you will send it to the server
  //       this.userService.sendToRestApiMethodGoogle(userData.idToken);
  //     });
  // }

}
