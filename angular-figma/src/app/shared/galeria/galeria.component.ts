import { Component, Input, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  @Input() list: any;
  constructor(private productsService: ProductsServiceService) { }

  ngOnInit(): void {
  }

}
