import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DoctorComponent} from './doctor/doctor.component';
import {CreateappoinmentComponent} from './createappoinment/createappoinment.component';
import {SignupComponent} from './signup/signup.component';
import {BookappointmentComponent} from './bookappointment/bookappointment.component';



const routes: Routes = 
[
{path: '',   redirectTo: '/home', pathMatch: 'full' },
{path : 'home',component : HomeComponent},
{path : 'login',component : LoginComponent},
{path : 'doctor',component : DoctorComponent},
{path : 'createappointment',component : CreateappoinmentComponent},
{path : 'signup',component : SignupComponent},
{path : 'bookappointment',component:BookappointmentComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
