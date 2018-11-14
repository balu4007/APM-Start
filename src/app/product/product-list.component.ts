import { Component, OnInit } from '@angular/core'
import { Iproduce } from './product'
import { from } from 'rxjs';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  _filterBy: string;
  get filterBy() {
    return this._filterBy
  }

  set filterBy(value) {
    this._filterBy = value;
    this.filterdProducts = this._filterBy ? this.filterdList(this.filterBy) : this.products
  }

  filterdProducts: Iproduce[]
  products: Iproduce[];
  constructor(private productService: ProductService) {
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        this.filterdProducts=this.products
      }
    )
  }

  filterdList(filterBy: string): Iproduce[] {
    return this.products.filter((product: Iproduce) => product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1)
  }

  onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle + message;
  }
}