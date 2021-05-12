
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  product: any;
  contactForm: any;

  productId: any;

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private productsServiceService: ProductsServiceService, private route: ActivatedRoute, private route2: Router) {
    this.product = {
      name: 'New product',
      price: 0,
      description: 'new',
      stars: 0,
      image: null
    };

    this.contactForm = this.formBuilder.group({
      name: [''],
      price: [0],
      description: ['new'],
      stars: [0],
      image: null
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });

    this.productsServiceService.getProductById(this.productId).subscribe(
      (data: any) => {
        this.product = data;
      }
    );
  }

  // tslint:disable-next-line: typedef
  submitForm(){
    this.product = this.contactForm.value;

    if (this.productId){
      this.productsServiceService.updateProduct(this.productId, this.product).subscribe(
        (data: any) => {
          console.log(data);
        }
      );
    }else{
      this.productsServiceService.addProducts(this.product).subscribe(
        (data: any) => {
          console.log(data);
        }
      ); }
    this.route2.navigate(['/prods']);
  }
}
