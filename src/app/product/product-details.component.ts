import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from './product.service';
import { Iproduce } from './product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string='Product Deatils'
  product:Iproduce
  constructor(private route:ActivatedRoute,private router:Router,private productService: ProductService) { }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id')
    this.productService.getProduct(id).subscribe(
      product=>this.product=product
    )

  }

  onBack(){
    this.router.navigate(['/products'])
  }
  
}
