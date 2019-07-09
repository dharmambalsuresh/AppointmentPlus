import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreateappoinmentComponent } from './createappoinment/createappoinment.component';
import { SignupComponent } from './signup/signup.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import {ManagebookingComponent} from './managebooking/managebooking.component';
import {UpdateorcancelappointmentComponent} from './updateorcancelappointment/updateorcancelappointment.component';
import {BlogComponent} from './blog/blog.component';
import {MedicalRecordsComponent} from './medical-records/medical-records.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DoctorComponent,
    CreateappoinmentComponent,
    SignupComponent,
    BookappointmentComponent,
    ManagebookingComponent,
    UpdateorcancelappointmentComponent,
    BlogComponent,
    MedicalRecordsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
