import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  user: String;
  enull: boolean;
  pnull: boolean;
  einvalid: boolean;
  indexat: any;
  indexdot: any;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    document.body.className = "healthcare";
  }
  validate() {
    this.einvalid = false;
    this.enull = false;
    var emailID = (<HTMLInputElement>document.getElementById("email")).value;

    this.indexat = emailID.indexOf("@");
    this.indexdot = emailID.lastIndexOf(".");

    if (emailID != "") {
      if (this.indexat < 1 || (this.indexdot - this.indexat < 2)) {

        this.einvalid = true;
        this.enull = false;
      }

    }
    else {
      this.einvalid = false;
      this.enull = true;
    }

    if ((<HTMLInputElement>document.getElementById("email")).value == "") {
      this.enull = true;
    }
    if ((<HTMLInputElement>document.getElementById("fname")).value == "") {
      this.pnull = true;
    }
    else {
      this.pnull = false;
    }

    if (!this.enull && !this.pnull && !this.einvalid) {

      this.router.navigate(['/login']);
    }
  }
  ngOnDestroy() {
    document.body.className = "";
  }
}
