import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
  // tslint:disable-next-line: typedef
  getProductById(id: any){
    return this.http.get('http://localhost:3000/products/' + id);
  }
  // tslint:disable-next-line: typedef
  addProducts(product: any){
    return this.http.post('http://localhost:3000/products', product);

  }

  // tslint:disable-next-line: typedef
  updateProduct(id: number, product: any){
    return this.http.put('http://localhost:3000/products/' + id, product );
  }

}
