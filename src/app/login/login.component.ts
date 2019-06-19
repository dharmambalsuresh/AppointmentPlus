import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: String;
  enull: boolean;
  pnull: boolean;
  einvalid: boolean;
  indexat: any;
  indexdot: any;

  constructor(private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        this.user = params['usr'];

      });
    if (this.user == "doctor") {
      document.body.className = "selectordoctor";
    }
    else {
      document.body.className = "selectpatient";
    }


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
    if ((<HTMLInputElement>document.getElementById("password")).value == "") {
      this.pnull = true;
    }
    else {
      this.pnull = false;
    }

    if (!this.enull && !this.pnull && !this.einvalid) {
      if (this.user == "doctor") {
       this.router.navigate(['/doctor']);
    }
      else{
         this.router.navigate(['/managebooking']);
      }

     
    }
  }

  ngOnDestroy() {
    document.body.className = "";
  }
}
