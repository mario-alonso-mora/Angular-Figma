import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // tslint:disable-next-line: typedef
  transform(products: any, filter: string = '') {

    const lowerCaseFilter: string = filter.toLowerCase();

    // tslint:disable-next-line: whitespace
    // tslint:disable-next-line: typedef-whitespace
    const newProducts: any = [];


    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < products.length; i++){
      const product = products[i];
      // tslint:disable-next-line: whitespace
      if(product.name.toLowerCase().includes(lowerCaseFilter)){
        newProducts.push(product);
      }
    }

    return newProducts;

  }

}

