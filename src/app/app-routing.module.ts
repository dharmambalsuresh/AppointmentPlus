import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DoctorComponent} from './doctor/doctor.component';
import {CreateappoinmentComponent} from './createappoinment/createappoinment.component';
import {ManagebookingComponent} from './managebooking/managebooking.component';
import {UpdateorcancelappointmentComponent} from './updateorcancelappointment/updateorcancelappointment.component';
import {BlogComponent} from './blog/blog.component';
import {MedicalRecordsComponent} from './medical-records/medical-records.component';

const routes: Routes = [{ path: '',   redirectTo: '/home', pathMatch: 'full' },{path : 'home',component : HomeComponent},{path : 'login',component : LoginComponent},{path : 'doctor',component : DoctorComponent},{path : 'createappointment',component : CreateappoinmentComponent},{path : 'managebooking',component : ManagebookingComponent},{path : 'updateorcancelappointment',component : UpdateorcancelappointmentComponent},{path : 'blogs',component : BlogComponent},{path : 'medicalrecords',component : MedicalRecordsComponent}]  ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
