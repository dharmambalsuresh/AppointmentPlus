import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreateappoinmentComponent } from './createappoinment/createappoinment.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';
import { UpdateorcancelappointmentComponent } from './updateorcancelappointment/updateorcancelappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DoctorComponent,
    CreateappoinmentComponent,
    ManagebookingComponent,
    UpdateorcancelappointmentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
