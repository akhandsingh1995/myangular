import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  submitted = false;
  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
});

  constructor(private formBuilder: FormBuilder, private router : Router, private service : MyserviceService) { }

  ngOnInit() {
    
  }
  get firstName() { return this.registerForm.get('firstName')};
  get lastName() { return this.registerForm.get('lastName')};
  get email() { return this.registerForm.get('email')};
  get password() { return this.registerForm.get('password')};

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          this.registerForm.get('firstName').markAllAsTouched();
          this.registerForm.get('lastName').markAllAsTouched();
          this.registerForm.get('email').markAllAsTouched();
          this.registerForm.get('password').markAllAsTouched();
      } else {
        this.service.userRegister({
          f_name:this.registerForm.value.firstName,
          l_name:this.registerForm.value.lastName,
          email:this.registerForm.value.email,
          password:this.registerForm.value.password
        }).subscribe((res)=>{
            // alert(res.message);
            this.router.navigateByUrl('/login');
        });
        
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
