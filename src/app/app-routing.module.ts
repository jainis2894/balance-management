import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth.guard.service';
import { DashboardComponent } from './navigate/dashboard/dashboard.component';
import { NavigateComponent } from './navigate/navigate.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './navigate/team/team.component';
import { AboutComponent } from './navigate/about/about.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'navigate',
    component: NavigateComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
