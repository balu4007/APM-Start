import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class ProductRoutingModule { }
