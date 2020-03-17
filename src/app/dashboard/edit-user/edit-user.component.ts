import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userData: any;
  userObj: any;
  data: any;

  constructor(
    private dataService: DataService,
    private service: MyserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.dataService.currentData
    .subscribe(res => {
      console.log(res);
      this.userData = res;
      this.data=this.userData
    })
  }

  updateUser() {
    var userObj = {
      f_name: this.userData.f_name,
      l_name: this.userData.l_name,
      email: this.userData.email
    }
    
    this.service.updateUsers(this.userData._id,userObj)
    .subscribe(res => {
      console.log(res.message);
      this.router.navigateByUrl('/dashboard/user');

    })
  }

}
