import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateComponent } from './cate/cate.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'categeory',pathMatch:'full'},
{path:'cate',component:CateComponent},
{path:'cate',component:CateComponent},
{path:'products',component:ProductComponent},
{path:'products/:id',component:ProductDetailComponent},
{path:"**",component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
