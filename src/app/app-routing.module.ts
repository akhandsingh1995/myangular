import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthserviceService } from './service/authservice.service';


const routes: Routes = [
  { path: 'login', loadChildren: () => (import('./login/login.module').then(m=> m.LoginModule)) },
  { path: 'signup', loadChildren: () => (import('./signup/signup.module').then(m=> m.SignupModule)) },
  { path: '', loadChildren: () => (import('./home/home.module').then(m=> m.HomeModule)) },
  { path: 'dashboard', loadChildren: () => (import('./dashboard/dashboard.module').then(m=> m.DashboardModule)), canActivate:[AuthserviceService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
