import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { UsersidebarComponent } from './components/candidate/sidebar/sidebar.component';
import { CandidateloginComponent } from './components/candidate/login/login.component';
import { CandidateregisterComponent } from './components/candidate/register/register.component';
import { DashboardComponent } from './components/candidate/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    
    UsersidebarComponent,
    HeaderComponent,

    routingComponents,

    CandidateloginComponent,

    CandidateregisterComponent,

    DashboardComponent,

    
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
