import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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
      this.data = res;
      this.data=this.data
    })
  }

  updateProduct() {
    var productObj = {
      p_name: this.data.p_name,
      p_desc: this.data.p_desc,
      p_image: this.data.p_image,
      reviews: this.data.reviews
    }
     
     this.service.updateProducts(this.data._id,productObj)
     .subscribe(res => {
       console.log(res.message);
       this.router.navigateByUrl('/dashboard/product');
 
     })
  }

}
