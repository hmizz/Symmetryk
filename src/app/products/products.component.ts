import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { from } from 'rxjs';
import { product} from '../core/models/products-model';
import {ProductsService} from '../core/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: product []= [];
  private productsSub: Subscription;
  name:string;
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getproducts();
    this.productsSub = this.productsService.getproductUpdateListener()
      .subscribe((products: product[]) => {
        this.products = products;
      });
  }

}
