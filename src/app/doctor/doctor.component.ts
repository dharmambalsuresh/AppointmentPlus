import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';
import {getDocAppointment } from '../getdata.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  cancel = "cancel";
  completed = "completed";
  appointments : getDocAppointment;
  result ;
  constructor(private getData : GetdataService) { }

  ngOnInit() {
   var docId ={docId : 101}; 
    this.getData.getDocAppointment(docId).subscribe((data)=>
   this.check(data)
   );
  }

  check(data){
    console.log(data)
     this.appointments = data;
     this.result = this.appointments;
     console.log(this.result);
   
  }

  updateAppointment(data){
    

  }



}
