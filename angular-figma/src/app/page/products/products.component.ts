import { ProductsServiceService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 products: any;

 // tslint:disable-next-line: no-inferrable-types
 filter: string = '';
  constructor(private productsService: ProductsServiceService) { }

  ngOnInit(): void {
   // tslint:disable-next-line: deprecation
   this.productsService.getProducts().subscribe((data: any) => {
     this.products = data;
   });
  }
}




