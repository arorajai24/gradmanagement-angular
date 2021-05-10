import { Component, OnInit } from '@angular/core';  
import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angular-6-social-login';  
import { Socialusers } from '../SocialUsers';
import { SocialloginService } from '../social-login.service';
import { ActivatedRoute, Router } from '@angular/router';  

@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.css']  
})  
export class DashboardComponent implements OnInit {  
  socialusers = new Socialusers();  
  constructor(public oauth: AuthService, private router: Router) { }  

  ngOnInit() {  
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
    console.log(this.socialusers.image);  
  }  
  logout() {  
   alert(1);  
    this.oauth.signOut().then(data => {  
      debugger;  
      this.router.navigate([`/home`]);  
    });  
  }  

  onSearch()
  {
    this.router.navigate(['search']);
  }
  onShowAll()
  {
    this.router.navigate(['show-all']);
  }
  onRegister()
  {
    this.router.navigate(['register']);
  }
  onTrends()
  {
    this.router.navigate(['trends']);
  }
}  