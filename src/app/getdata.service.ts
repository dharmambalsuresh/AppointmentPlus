//Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
//Contributer Name: Varsha Sridhar STUDENT ID:B00791643
//Contributer Name: Abhinandan Walia STUDENT ID:B00820613
//Contributer Name: Dharmambal Sureshkumar STUDENT ID:B00824492
//Contributer Name : Ashutosh Patil Student ID : B00812667

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LoginData{
  //Contributer Name : Ashutosh Patil Student ID : B00812667
  "message":string;
  "userType":string;
  "username":string;
  }
  
  export interface forgotpasswordData{
    //Contributer Name : Ashutosh Patil Student ID : B00812667
    "message":string;
    "emailID":String;
    "password":string;
  }
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

export interface fetchProfile{ //Abhinandan Walia BID:B00820613
  result : [{
  licenseNumber :string;
  firstName :string;
  lastName :string;
  email :string;
  password :string;
  address :string;
  phone :string;
  city :string;
  dateofBirth :string; 
  postalCode :string;
  province :string;
}];
}

export interface getDateAndTime{

  //Dharmambal Sureshkumar B00824492
  "date": String;
   "timesolts": String;
   "doctorname": String;
}

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  createAppointmentURL = "http://localhost:3000/createNewAppointment";
  createPatientUserURL = "http://localhost:3000/createPatientUser"; //Abhinandan Walia BID:B00820613
  createDoctorUserURL = "http://localhost:3000/createDoctorUser"; //Abhinandan Walia BID:B00820613

  UpdatePatientURL = "http://localhost:3000/updatePatientUser"; //Abhinandan Walia BID:B00820613
  UpdateDoctorURL = "http://localhost:3000/updateDoctorUser"; //Abhinandan Walia BID:B00820613

  fetchProfileDataURL = "http://localhost:3000/fetchProfileData"; //Abhinandan Walia BID:B00820613
  userInfoURL = "http://localhost:3000/editprofile"; //Abhinandan Walia BID:B00820613
  canceldocAppointmentURL = "http://localhost:3000/canceldocAppointment";
  manageappointmentURL = "http://localhost:3000/manageappointment";
  getDocAppointmentURL = "http://localhost:3000/getDocAppointment";
  bookAppointmentURL="http://localhost:3000/bookappointment";//Dharmambal Sureshkumar B00824492
  getAppointmentTiming="http://localhost:3000/dateandtime";//Dharmambal Sureshkumar B00824492
  loginUserURL ="http://localhost:3000/login";
  forgotPasswordURL = "http://localhost:3000/forgotpassword";

  constructor(private http: HttpClient) { }

createAppointment(appointmentDetails) {
  //Author NAME: Aishwarya Narayanan STUDENT ID: B00820313
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

//abhinandan Walia BID:B00820613
updatePatientDB(details) {
  return this.http.post<string>(this.UpdatePatientURL, details)
    .pipe();
}
//abhinandan Walia BID:B00820613
updateDocDB(details) {
  return this.http.post<string>(this.UpdateDoctorURL, details)
    .pipe();
}

//Abhinandan Walia B00820613
fetchProfileData()
{
return this.http.get<Array<fetchProfile>>(this.fetchProfileDataURL)
  .pipe();
}
//Abhinandan Walia B00820613
getUserInfo()
{
return this.http.get<Array<fetchProfile>>(this.userInfoURL)
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

bookAppointment(details){
  //Dharmambal Sureshkumar B00824492
  return this.http.post<string>(this.bookAppointmentURL, details)
  .pipe();
}

dateandtime(){
  //Dharmambal Sureshkumar B00824492
  return this.http.get<Array<getDateAndTime>>(this.getAppointmentTiming)
  .pipe();
}
forgotpassword(forgotpasswordDetails)
{//Contributer Name : Ashutosh Patil Student ID : B00812667
  return this.http.post<forgotpasswordData>(this.forgotPasswordURL, forgotpasswordDetails)
  .pipe();
}
loginUser(details)
{//Contributer Name : Ashutosh Patil Student ID : B00812667
  return this.http.post<LoginData>(this.loginUserURL,details)
  .pipe();
}
  
}
