// <!-- Manage Booking-To View  Appointment Details -->
// <!--AUTHOR NAME: Varsha Sridhar-->
// <!-- STUDENT ID: _B00791643 -->
import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';
import { HttpClient } from '@angular/common/http';
import {ManageAppt} from '../getdata.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  data: Array<ManageAppt>;

  constructor(private getData : GetdataService) { }
   
  
  ngOnInit() {
    
    this.getData.manageAppointment().subscribe(data=> this.data = data);
  
    }
  

}

