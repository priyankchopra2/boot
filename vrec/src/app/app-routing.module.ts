import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateloginComponent } from "./components/candidate/login/login.component";
import { CandidateregisterComponent } from "./components/candidate/register/register.component";
import { InterviewerDashboardComponent } from "./components/interviewer/interviewer-dashboard/interviewer-dashboard.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/interviewer/login/login.component";
import { CreateJobApplicationComponent } from "./components/interviewer/create-job-application/create-job-application.component";
import { ViewSingleJobApplicationComponent } from "./components/interviewer/view-single-job-application/view-single-job-application.component";
import { ViewAllJobApplicationComponent } from "./components/interviewer/view-all-job-application/view-all-job-application.component";
import { EditJobAppComponent } from "./components/interviewer/edit-job-app/edit-job-app.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "interviewer/login", component: LoginComponent },
  { path: "interviewer", component: InterviewerDashboardComponent },
  { path: "userpage", component: DashboardComponent },
  { path: "candidate/register", component: CandidateregisterComponent },
  { path: "candidate/login", component: CandidateloginComponent },
  {
    path: "interviewer/jobApp/create",
    component: CreateJobApplicationComponent,
  },
  {
    path: "interviewer/jobApp/view",
    component: ViewSingleJobApplicationComponent,
  },
  {
    path: "interviewer/jobApp/viewAll",
    component: ViewAllJobApplicationComponent,
  },
  {
    path: "interviewer/jobApp/edit",
    component: EditJobAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ViewAllJobApplicationComponent,
  ViewSingleJobApplicationComponent,
  LoginComponent,
  DashboardComponent,
  DashboardComponent,
  CandidateregisterComponent,
  CandidateloginComponent,
  InterviewerDashboardComponent,
  CreateJobApplicationComponent,
  EditJobAppComponent,
];
