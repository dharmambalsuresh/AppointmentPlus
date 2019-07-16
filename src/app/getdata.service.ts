//Author NAME: Aishwarya Narayanan STUDENT ID: B00820313

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface getDocAppointment{
//-- Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
  result : [{        
  FirstName: String,
  LastName: String,
  Booking_Date: String,
  phone:String,
  Booking_Time: String,
  Status: String
  }];
  
}


export interface ManageAppt{
  // --AUTHOR: Varsha Sridhar STUDENT_ID: B00791643

  DoctorName: string;
  Booking_Date: string;
  Booking_Time: string;
  Status: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  createAppointmentURL = "http://localhost:3000/createNewAppointment";
  canceldocAppointmentURL = "http://localhost:3000/canceldocAppointment";
  manageappointmentURL = "http://localhost:3000/manageappointment";
  getDocAppointmentURL = "http://localhost:3000/getDocAppointment";

  constructor(private http: HttpClient) { }

createAppointment(appointmentDetails) {
  //Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
  return this.http.post<string>(this.createAppointmentURL, appointmentDetails)
    .pipe();
}

cancelAppointment(appointmentDetails) {
  // --AUTHOR: Varsha Sridhar STUDENT_ID: B00791643

return this.http.post<string>(this.canceldocAppointmentURL, appointmentDetails)
.pipe();
}

manageAppointment() {
  // --AUTHOR: Varsha Sridhar STUDENT_ID: B00791643

return this.http.get<Array<ManageAppt>>(this.manageappointmentURL)
.pipe();
}

getDocAppointment(docId){
  //Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
  return this.http.post<getDocAppointment>(this.getDocAppointmentURL, docId)
    .pipe();
}
  
}
