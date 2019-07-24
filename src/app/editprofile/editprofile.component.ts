//Author NAME: Abhinandan Walia STUDENT ID: B00820613
import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import {fetchProfile} from '../getdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
   firstName: String;
   lastName : String;
   email : String;
   password : String;
   address : String;
   phone : String;
   city : String;
   dateofBirth : String;
   postalCode : String;
   province : String;
   profile : fetchProfile;


  constructor(private getData : GetdataService , private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    // this.getData.getUserInfo().subscribe((data)=>
    // this.getinfo(data)
    // );

  }
  getinfo(info){
   console.log(info);
   this.firstName=info;
   this.lastName=info;
   this.email=info;
   this.password=info;
   this.address=info;
   this.phone=info;
   this.city=info;
   this.dateofBirth=info;
   this.postalCode=info;
   this.province=info;
   console.log(info);
 }

 validate()
 {
  var firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
  var lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
  var email = (<HTMLInputElement>document.getElementById("email")).value;
  var password = (<HTMLInputElement>document.getElementById("password")).value;
  var address = (<HTMLInputElement>document.getElementById("address")).value;
  var phone = (<HTMLInputElement>document.getElementById("phone")).value;
  var city = (<HTMLInputElement>document.getElementById("city")).value;
  var dateofBirth = (<HTMLInputElement>document.getElementById("dateofBirth")).value;
  var postalCode = (<HTMLInputElement>document.getElementById("postalCode")).value;
  var province = (<HTMLInputElement>document.getElementById("province")).value;

  var details = { 
    "firstName" :firstName,
    "lastName" :lastName,
    "email" :email, 
    "password" :password,
    "address" :address,
    "phone" :phone,
    "city" :city,
    "dateofBirth" :dateofBirth, 
    "postalCode" :postalCode,
    "province" :province,
};
      this.editProfile(details);
      this.router.navigate(['/profile']);
    }
    editProfile(details)
    {
      this.getData.editProfile(details).subscribe((data)=>
      this.successMsg(data)
      );
    }
    successMsg(data)
    {
      if(data.message == "success")
      {
        Swal.fire
        (
          'Profile Updated',
        );
      }   
    }
 }

