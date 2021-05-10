import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { OperationsComponent } from './operations/operations.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { TrendsComponent } from './trends/trends.component';
import { BarchartComponent } from './barchart/barchart.component';
import { GradsYearComponent } from './grads-year/grads-year.component';
import { GradsDiversityComponent } from './grads-diversity/grads-diversity.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '' , component : AppComponent 
  },
  {    
    path: 'home',  component: HomeComponent   
  },    
  {    
    path: 'dashboard', component: DashboardComponent  
  },
  {
    path : 'search' , component : SearchComponent
  },
  {
    path : 'show-all' , component : ShowAllComponent
  },
  {
    path : 'register' , component : RegisterComponent
  },
  {
    path : 'trends' , component : TrendsComponent,
    children : [
        {
          path : 'bar-chart' , component : BarchartComponent
        },
        {
          path : 'grads-year' , component : GradsYearComponent
        },
        {
          path : 'grads-diversity' , component : GradsDiversityComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CandidateManagementComponent,
                                  OperationsComponent,
                                  SearchComponent,
                                  ShowAllComponent,
                                  RegisterComponent]