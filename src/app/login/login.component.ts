import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(4)]],
   })
  
     users : any;
     constructor(private formBuilder: FormBuilder,
     private router : Router,
     private myService  : MyserviceService)  { } 
     

  ngOnInit(): void {

  this.testUser();

  }
    get email() { return this.loginForm.get('email')}
    get password() { return this.loginForm.get('password')}


    testUser =() =>
    {
      this.users = this.myService.getUsers();
      console.log('this.users', this.users)
       
      
    }

    onLogin() {
      console.log(this.loginForm,'test');
      this.submitted=true;
      if(this.loginForm.invalid){
        return;
      } else {
        this.router.navigateByUrl('/dashboard');
       
      }
    }


  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) 
        return;
      else
        this.loginUser();   // Login User call here
  }

  onSend() {
    if(this.email.invalid) {
      alert('Enter a valid Email');
    }
    else {
      alert('Send an Email to = '+this.email.value);
    }
  }

  // Login Authentication

  loginUser(){
    var email = this.loginForm.value.email;
    var pwd = this.loginForm.value.password;
    var log = {
      email: email,
      password:pwd 
    }
    this.myService.userLogin(log)
        .subscribe(res => {
          if(res.success === true)
          {
            alert(res.message);

            localStorage.setItem('token', res.token);
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigateByUrl('/dashboard');
          }
          else
          {
            alert(res.message);
          }
        })
  }
}
