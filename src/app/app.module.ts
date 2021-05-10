import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from  '@angular/common/http';
import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { OperationsComponent } from './operations/operations.component';
import { SearchComponent } from './search/search.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TrendsComponent } from './trends/trends.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GradsYearComponent } from './grads-year/grads-year.component';
import { GradsDiversityComponent } from './grads-diversity/grads-diversity.component';
import { HomeComponent } from './home/home.component';

import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { httpInterceptProviders } from './index';
import { UserServiceService } from './user-service.service';
import { GoogleSigninService } from './google-signin.service';

import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateManagementComponent,
    OperationsComponent,
    SearchComponent,
    ShowAllComponent,
    RegisterComponent,
    TrendsComponent,
    BarchartComponent,
    GradsYearComponent,
    GradsDiversityComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    SocialLoginModule
  ],
  providers: [
    httpInterceptProviders,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '859429172963-vtq8gbqqitma1cta7br669tc8t1cj8vb.apps.googleusercontent.com'
            )
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
