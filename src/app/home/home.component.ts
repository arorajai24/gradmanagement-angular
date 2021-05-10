import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { ActivatedRoute , Router , Params } from '@angular/router';
import {
  GoogleLoginProvider
} from 'angular-6-social-login';
import { Socialusers } from '../SocialUsers';
import { SocialloginService } from '../social-login.service';
import { AuthService } from 'angular-6-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // user: SocialUser;
  // GoogleLoginProvider = GoogleLoginProvider;

  response;  
  socialusers = new Socialusers();

  // public OAuth: AuthService,
  constructor( public oauth: AuthService, private socialloginservice: SocialloginService, private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    // this.authService.authState.subscribe(user => {
    //   this.user = user;
    // });
  }


  public socialSignIn() {  
    let socialPlatformProvider;  
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;   

    this.oauth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log("google", socialusers);  
      console.log(socialusers);  
      this.Savesresponse(socialusers);  

    });  
  }  
  Savesresponse(socialusers: Socialusers) {  

    this.socialloginservice.Savesresponse(socialusers).subscribe((res: any) => {  
      debugger;  
      console.log(res);  
      this.socialusers=res;  
      this.response = res.userDetail;  
      localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
      this.router.navigate([`/search`]);  
    })  
  } 












  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }

  // refreshGoogleToken(): void {
  //   this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  // }

}
