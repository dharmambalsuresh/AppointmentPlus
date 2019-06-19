import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-createappoinment',
  templateUrl: './createappoinment.component.html',
  styleUrls: ['./createappoinment.component.css']
})
export class CreateappoinmentComponent implements OnInit {
  invaliddate: boolean;
  datenull: boolean;
  invalidtime: boolean;
  nulltime: boolean;
  commentnull: boolean;
  locnull: boolean;
  constructor() { }

  ngOnInit() {
  }



  popup() {

  }
  validate() {

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

    var time = (<HTMLInputElement>document.getElementById("time")).value;
    if (time != "") {
      var re = new RegExp("^(1[0-2]|0?[1-9]):([0-5]?[0-9])(●?((\ )*[AP]M))?$");
      if (re.test(time)) {

        this.invalidtime = false;
        this.nulltime = false;
      }
      else {
        this.nulltime = false;
        this.invalidtime = true;
      }
    }
    else if (time == "") {

      this.nulltime = true;
      this.invalidtime = false;
    }

    var loc = (<HTMLInputElement>document.getElementById("loc")).value;
    var comment = (<HTMLInputElement>document.getElementById("comment")).value;
    if (loc == "") {
      this.locnull = true;
    }
    else {
      this.locnull = false;
    }



    if (!this.locnull && !this.nulltime && !this.datenull && !this.invaliddate && !this.invalidtime) {
      Swal.fire(
        'Thank You!',
        'Your schedule has been created!',
        'success'
      );
    }

  }

}
