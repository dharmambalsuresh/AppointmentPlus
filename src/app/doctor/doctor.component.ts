import { Component, OnInit,Input  } from '@angular/core';
import { GetdataService} from '../getdata.service';
import {getDocAppointment } from '../getdata.service';
import { ModalwindowComponent} from '../modalwindow/modalwindow.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() name;
   subscription: Subscription;
  all = "all";
  cancel = "Cancelled";
  completed = "Completed";
  upcoming = "Upcoming";
  appointments ;
  result ;
  constructor(private getData : GetdataService,private modalService: NgbModal) {
     this.subscription = this.getData.getMessage().subscribe(message => {
       console.log(message);
         this.getData.getDocAppointment({docId : 101}).subscribe((data)=>
        this.check(data));
     
        });
   }

  ngOnInit() {
   var docId ={docId : 101}; 
    this.getData.getDocAppointment(docId).subscribe((data)=>
   this.check(data)
   );
  }

    open(content,appData) {
      event.preventDefault();
      console.log(content,appData);
     const modalRef = this.modalService.open(ModalwindowComponent, {ariaLabelledBy: 'modal-basic-title'});
     modalRef.componentInstance.name = appData;
  }

  check(data){
     this.appointments = data;
     for(var i=0;i<this.appointments.length;i++){
      if(this.appointments[i]["Status"] == "booked"){
        this.appointments[i]["Status"] = "Upcoming";
      }
    }
     this.result = this.appointments;

  }

  filter(data){
    event.preventDefault();
    console.log(data);
    this.result = [];
    if(data != "all"){
     for(var i=0;i<this.appointments.length;i++){
      if(this.appointments[i]["Status"] == data){
       this.result.push(this.appointments[i]); 
      }
    }
    }
  else
    {
      this.result = this.appointments; 
    }
  }

 


}
