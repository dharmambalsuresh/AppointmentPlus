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
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { ImageToDataUrlModule } from "ngx-image2dataurl";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

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
    MedicalRecordsComponent,
    ProfileComponent,
    EditprofileComponent,
    CreateblogComponent,
    ForgotpasswordComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule,
     ImageToDataUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
