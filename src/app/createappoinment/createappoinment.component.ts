//Author NAME: Aishwarya Narayanan STUDENT ID: B00820313

import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';
import Swal from 'sweetalert2';

//  export interface timeslot{
//    "nulltime":boolean;
//    "invalidtime":boolean;
//  }

@Component({
  selector: 'app-createappoinment',
  templateUrl: './createappoinment.component.html',
  styleUrls: ['./createappoinment.component.css']
})
export class CreateappoinmentComponent implements OnInit {
  invaliddate: boolean;
  datenull: boolean;
  dateInput : string;
  locInput : string;
  commentInput : string;
  ivalidtime : boolean;
  nltime : boolean;
  commentnull: boolean;
  locnull: boolean;
  result : string;
  timeslot = [{"nulltime":false,"invalidtime":false}];

  constructor(private getData : GetdataService) { }

  ngOnInit() {
    
  }

  popup() {

  }

  validate() {
//validation to check if input fields are empty or in correct format
    var date = (<HTMLInputElement>document.getElementById("date")).value;
    if (date != "") {
      var re = new RegExp("^[0-3]?[0-9]((\/)|(\-))[0-3]?[0-9]((\/)|(\-))(?:[0-9]{2})?[0-9]{2}$");
      if (re.test(date)) {
        this.invaliddate = false;
        this.datenull = false;
      }
      else {
        this.invaliddate = true;
        this.datenull = false;
      }

    }
    else if (date == "") {

      this.datenull = true;
      this.invaliddate = false;
    }
    
    for(var i=0;i< this.timeslot.length; i++){
 
 var time = (<HTMLInputElement>document.getElementById(i.toString())).value;

    if (time != "") {
      var re = new RegExp("^(((1[0-2]|0?[1-9]):([0-5]?[0-9])(●?((\ )*[AP]M)))((\ )*-(\ )*)((1[0-2]|0?[1-9]):([0-5]?[0-9])(●?((\ )*[AP]M))))?$");
      if (re.test(time)) {

        this.timeslot[i]["invalidtime"] = false;
        this.timeslot[i]["nulltime"] = false;
        this.nltime = false;
        this.ivalidtime = false;
      }
      else {
        this.timeslot[i]["nulltime"] = false;
        this.timeslot[i]["invalidtime"] = true;
        this.nltime = false;
        this.ivalidtime = true;
      }
    }
    else if (time == "") {

      this.timeslot[i]["nulltime"] = true;
      this.timeslot[i]["invalidtime"] = false;
      this.nltime = true;
        this.ivalidtime = false;
    }

    }
 

    var loc = (<HTMLInputElement>document.getElementById("loc")).value;
    var comment = (<HTMLInputElement>document.getElementById("comment")).value;
    if (loc == "") {
      this.locnull = true;
    }
    else {
      this.locnull = false;
    }



    if (!this.locnull && !this.nltime && !this.datenull && !this.invaliddate && !this.ivalidtime) {
    //data is stored in database if all the validations are correct
      this.storeData();
    
    }

  }
 storeData(){
   var min=1; 
    var max=100;  
    var appId =Math.floor(Math.random() * (+max - +min)) + +min; 
    var tsl ='';
   
   for(var i=0; i<this.timeslot.length;i++){
      tsl += this.timeslot[i][i] + ',';
   }

    var appointmentDetails = { "appId" :appId,
     "date" :this.dateInput,
     "timeslots" : tsl,
     "doctor" : "John",
     "loc" :this.locInput,
     "comments" : this.commentInput};
  
     //storing the appointment details in the database
   this.getData.createAppointment(appointmentDetails).subscribe((data)=>
   this.sucessMsg(data)
   );

  }

  //Intimating user that schedule has been created after storing the data in the database
   sucessMsg(data){
       
     if(data.message == "success"){
        Swal.fire(
        'Thank You!',
        'Your schedule has been created!',
        'success'
      );
      }   
    }

    //Adding timeslots
    dynamicDiv(){
          this.timeslot.push({"nulltime":false,"invalidtime":false});
    }
  
}
