import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'user', component:UserComponent},
  {path: 'product', component:ProductComponent},
  {path: 'my-profile', component:MyProfileComponent},
  {path: 'user/add-user', component:AddUserComponent},
  {path: 'product/add-product', component:AddProductComponent},
  {path: 'user/edit-user', component:EditUserComponent},
  {path: 'product/edit-product/:id', component:EditProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
