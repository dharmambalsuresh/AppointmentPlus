//Author NAME: Abhinandan Walia STUDENT ID: B00820613
import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';
import {fetchProfile} from '../getdata.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile : fetchProfile;
  result ;

  constructor(private getData : GetdataService) { }

  ngOnInit() {
    this.getData.fetchProfileData().subscribe((info)=>
    this.getinfo(info)
    );
  }
  getinfo(info){
    console.log(info);
     this.profile = info;
     this.result = this.profile;
  }

}
