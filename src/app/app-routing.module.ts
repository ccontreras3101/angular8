import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'forgot-pass', component: ForgotPassComponent },
  	{ path: '**', component: LoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
