import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../service/myservice.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private service: MyserviceService,
    private dataService: DataService ) { }

  userData: any;

  ngOnInit()  {

    this.service.getUsers().subscribe(res => {
          console.log(res);
          this.userData = res.data
        })
  }

  onEditUser(userObj) {
    console.log('hello',userObj);
    var userData = {
      _id: userObj._id,
      f_name: userObj.f_name,
      l_name: userObj.l_name,
      email: userObj.email
    }

    this.dataService.changeData(userData);
    this.router.navigateByUrl('/dashboard/user/edit-user')
  }

  onDeleteUser(id) {

    this.service.deleteUsers(id).subscribe((res)=>
    {
      this.service.getUsers().subscribe(res => {
        console.log(res);
        this.service.getUsers().subscribe(res=>{this.userData = res.data})
      })

      alert("User Deleted")
    })
  }

}
