import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './navigate/dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth.guard.service';
import { NavigateComponent } from './navigate/navigate.component';
import { AboutComponent } from './navigate/about/about.component';
import { TeamComponent } from './navigate/team/team.component';
import { TeamMemberComponent } from './navigate/team/team-member/team-member.component';
import { ReusableComponentComponent } from './navigate/about/reusable-component/reusable-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigateComponent,
    AboutComponent,
    TeamComponent,
    TeamMemberComponent,
    ReusableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
