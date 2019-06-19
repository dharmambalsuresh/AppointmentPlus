import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateorcancelappointment',
  templateUrl: './updateorcancelappointment.component.html',
  styleUrls: ['./updateorcancelappointment.component.css']
})
export class UpdateorcancelappointmentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
  }
 Cancelled()
  {
      alert("Appointment Cancelled !");
      this.router.navigate(['/managebooking']);
  }

 Success()
  {
      alert("Redirecting to Booking Appointment Page");
      this.router.navigate(['/bookingappointment']);
     
  }
  goback()
  {
     
      this.router.navigate(['/managebooking']);
     
  }
}

