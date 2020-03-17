import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


 export class AddProductComponent implements OnInit {
  
  submitted = false;

  productForm = this.formBuilder.group({

    p_name : ['', Validators.required],
    p_desc : ['', Validators.required],
    p_image: ['', Validators.required],
    reviews : ['', Validators.required]

  });


constructor( private formBuilder:FormBuilder, private router: Router,
     private service: MyserviceService) { }

  ngOnInit() { }


  get p_name() {return this.productForm.get('p_name')};
  get p_desc() {return this.productForm.get('p_desc')};
  get p_image() {return this.productForm.get('p_image')};
  get reviews() {return this.productForm.get('reviews')};


   onSubmit(){
     console.log(this.productForm, "test");
     this.submitted = true;

     if(this.productForm.invalid)
     {

      this.productForm.get('p_name').markAllAsTouched();

      this.productForm.get('p_desc').markAllAsTouched();

      this.productForm.get('p_image').markAllAsTouched();

      this.productForm.get('reviews').markAllAsTouched();

     }

     else {
      this.service.postProduct({
        p_name:this.productForm.value.p_name,
        p_desc:this.productForm.value.p_desc,
        p_image: this.productForm.value.p_image,
        reviews:this.productForm.value.reviews
      }).subscribe((res)=>
      {

      })
      this.router.navigateByUrl('/dashboard/product');
     }
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productForm.value))
   }

}