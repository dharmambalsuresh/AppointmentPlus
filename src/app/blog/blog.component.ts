import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
users : string;
guest : boolean;
doc : boolean;
patient : boolean;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
     this.route.queryParams
      .subscribe(params => {
        this.users = params['usr'];
        if(this.users == "guest"){
          this.guest = true
        }
         if(this.users == "doctor"){
          this.doc = true
        }
         if(this.users == "patient"){
          this.patient = true
        }

      });
  }

}
