import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { product } from "../models/products-model";
import { Router } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({ providedIn: "root" })
export class ProductsService {
  private products: product[] = [];
  
  private productsUpdated = new Subject<product[]>();
  

  constructor(private http: HttpClient, private router: Router,public authService:AuthService) {}

  getproducts() {
    this.http
      .get<{products: any }>("http://localhost:3000/api/products/productsList/"+ this.authService.getID())
      .pipe(
        map((productData) => {
          return productData.products.map((product) => {
            return {
              id: product.id,
              home_thumb_id:product.home_thumb_id,
              name: product.name,
              created_at:null,
              updated_at:null
            };
          });
        })
      )
      .subscribe((transformedproducts) => {
        this.products = transformedproducts;
        this.productsUpdated.next([...this.products]);
      });
  }


  getproductUpdateListener() {
    return this.productsUpdated.asObservable();
  }


  getproductsArray(){
    return this.products ;
  }
  getproduct(id: string){
    return this.http.get<{_id: number, name: string, user_id: string, thumb_path:string}>("http://192.168.1.19:3000/api/products/" + id);
  }

}