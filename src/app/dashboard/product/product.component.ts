import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private router: Router,
    private service: MyserviceService,
    private dataService: DataService  ) { }

  data: any;
  
  ngOnInit() {

    this.service.getProduct().subscribe((res)=> {
      console.log(res);
      this.data = res
    })
  }

  onEditProduct(productObj) {
    // console.log('hello',productObj);

    var  productData = {
      _id: productObj._id,
      p_name: productObj.p_name,
      p_desc: productObj.p_desc,
      p_image: productObj.p_image,
      reviews: productObj.reviews
    }

    this.dataService.changeData(productData);
    this.router.navigateByUrl('/dashboard/product/edit-product/' +productData._id)
  }

  
  onDeleteProduct(id) {

    this.service.deleteProducts(id).subscribe((res)=> 
    {
      this.service.getProduct().subscribe((res)=> {console.log(res)
        this.data = res
        this.service.getProduct().subscribe(res=>
          {this.data = res})
      })

      alert("Product Deleted")
    })
  }

}
