import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBarChartComponent } from './components/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './components/my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './components/my-pie-chart/my-pie-chart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { TrendingVideoComponent } from './components/trending-video/trending-video.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'userprofile', component: MyAccountComponent, canActivate:[AuthGuard]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {path: 'home', component:HomeComponent },
  {path: 'trendig', component:TrendingVideoComponent, canActivate:[AuthGuard] },
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent}
 // {path: 'login', component: LoginComponent},
  //{path: 'register', component: RegisterComponent},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
