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
import { UserpageComponent } from "./components/candidate/userpage/userpage.component";
import { ViewprofileComponent } from "./components/candidate/viewprofile/viewprofile.component";
import { EditprofileComponent } from "./components/candidate/editprofile/editprofile.component";
import { JoblistComponent } from "./components/candidate/joblist/joblist.component";
import { UploadComponent } from "./components/candidate/upload/upload.component";
import { StatusComponent } from "./components/candidate/status/status.component";
import { ViewCandidatesComponent } from "./components/interviewer/view-candidates/view-candidates.component";
import { ViewCandidateProfileComponent } from "./components/interviewer/view-candidate-profile/view-candidate-profile.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "interviewer/login", component: LoginComponent },
  { path: "interviewer", component: InterviewerDashboardComponent },

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
  { path: "userpage", component: UserpageComponent },
  { path: "viewprofile", component: ViewprofileComponent },

  { path: "editprofile", component: EditprofileComponent },
  { path: "joblist", component: JoblistComponent },
  { path: "upload", component: UploadComponent },

  { path: "status", component: StatusComponent },
  {
    path: "interviewer/jobApp/view/candidates",
    component: ViewCandidatesComponent,
  },
  {
    path: "interviewer/jobApp/view/candidateProfile",
    component: ViewCandidateProfileComponent,
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
  UserpageComponent,
  ViewprofileComponent,
  EditprofileComponent,
  JoblistComponent,
  UploadComponent,
  StatusComponent,
  ViewCandidatesComponent,
  ViewCandidateProfileComponent,
];


