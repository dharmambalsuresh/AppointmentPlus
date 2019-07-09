//Author NAME: Aishwarya Narayanan STUDENT ID: B00820313

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  createAppointmentURL = "http://localhost:3000/createNewAppointment";

  constructor(private http: HttpClient) { }

createAppointment(appointmentDetails) {
  return this.http.post<string>(this.createAppointmentURL, appointmentDetails)
    .pipe();
}

  
}
