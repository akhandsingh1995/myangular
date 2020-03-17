import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

 export class AddUserComponent implements OnInit {
  
  submitted = false;

  userForm = this.formBuilder.group({

    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]]

  });


constructor( private formBuilder:FormBuilder, private router: Router,
     private service: MyserviceService) { }

  ngOnInit() { }


  get firstName() {return this.userForm.get('firstName')};
  get lastName() {return this.userForm.get('lastName')};
  get email() {return this.userForm.get('email')};
  get password() {return this.userForm.get('password')};


   onSubmit(){
     console.log(this.userForm, "test");
     this.submitted = true;

     if(this.userForm.invalid)
     {

      this.userForm.get('firstName').markAllAsTouched();

      this.userForm.get('lastName').markAllAsTouched();

      this.userForm.get('email').markAllAsTouched();

      this.userForm.get('password').markAllAsTouched();

     }

     else {
      this.service.userRegister({
        f_name:this.userForm.value.firstName,
        l_name:this.userForm.value.lastName,
        email: this.userForm.value.email,
        password:this.userForm.value.password
      }).subscribe((res)=>
      {

      })
      this.router.navigateByUrl('/dashboard/user');
     }
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value))
   }

}