//Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
//Contributer Name: Abhinandan Walia STUDENT ID:B00820613

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  createAppointmentURL = "http://localhost:3000/createNewAppointment";
  createPatientUserURL = "http://localhost:3000/createPatientUser"; //Abhinandan Walia BID:B00820613
  createDoctorUserURL = "http://localhost:3000/createDoctorUser"; //Abhinandan Walia BID:B00820613

  constructor(private http: HttpClient) { }

createAppointment(appointmentDetails) {
  return this.http.post<string>(this.createAppointmentURL, appointmentDetails)
    .pipe();
}

//abhinandan Walia BID:B00820613
createPatientUser(details) {
  return this.http.post<string>(this.createPatientUserURL, details)
    .pipe();
}
//abhinandan Walia BID:B00820613
createDoctorUser(details) {
  return this.http.post<string>(this.createDoctorUserURL, details)
    .pipe();
}
}
