import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateloginComponent } from './components/candidate/login/login.component';
import { CandidateregisterComponent } from './components/candidate/register/register.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/interviewer/login/login.component';


const routes: Routes = [
  {path:'',component: DashboardComponent},
  {path:'interviewer/login',component: LoginComponent},
  {path:'userpage',component:DashboardComponent},
  {path:'candidate/register',component:CandidateregisterComponent},
  {path:'candidate/login',component:CandidateloginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,DashboardComponent,DashboardComponent,CandidateregisterComponent,CandidateloginComponent]