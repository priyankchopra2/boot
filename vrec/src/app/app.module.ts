import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";

import { UsersidebarComponent } from "./components/candidate/sidebar/sidebar.component";
import { CandidateloginComponent } from "./components/candidate/login/login.component";
import { CandidateregisterComponent } from "./components/candidate/register/register.component";
import { DashboardComponent } from "./components/candidate/dashboard/dashboard.component";
import { InterviewerDashboardComponent } from "./components/interviewer/interviewer-dashboard/interviewer-dashboard.component";
import { CreateJobApplicationComponent } from "./components/interviewer/create-job-application/create-job-application.component";
import { ViewSingleJobApplicationComponent } from "./components/interviewer/view-single-job-application/view-single-job-application.component";
import { ViewAllJobApplicationComponent } from "./components/interviewer/view-all-job-application/view-all-job-application.component";
import { EditJobAppComponent } from "./components/interviewer/edit-job-app/edit-job-app.component";
import { UserpageComponent } from "./components/candidate/userpage/userpage.component";
import { JoblistComponent } from "./components/candidate/joblist/joblist.component";
import { ViewprofileComponent } from "./components/candidate/viewprofile/viewprofile.component";
import { EditprofileComponent } from "./components/candidate/editprofile/editprofile.component";
import { StatusComponent } from "./components/candidate/status/status.component";
import { ViewCandidatesComponent } from './components/interviewer/view-candidates/view-candidates.component';
import { ViewCandidateProfileComponent } from './components/interviewer/view-candidate-profile/view-candidate-profile.component';
@NgModule({
  declarations: [
    AppComponent,

    UsersidebarComponent,
    HeaderComponent,

    routingComponents,

    CandidateloginComponent,

    CandidateregisterComponent,

    DashboardComponent,

    InterviewerDashboardComponent,

    CreateJobApplicationComponent,

    ViewSingleJobApplicationComponent,

    ViewAllJobApplicationComponent,

    EditJobAppComponent,
    DashboardComponent,

    UserpageComponent,

    ViewprofileComponent,

    EditprofileComponent,

    JoblistComponent,

    StatusComponent,

    ViewCandidatesComponent,

    ViewCandidateProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
