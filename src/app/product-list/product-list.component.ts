import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData = '';

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  // getAll(): void {
  //   this.service.getAllProduct().subscribe((products) => {
  //     return (this.products = products);
  //   });
  // }
  getAll(): void {
    this.service
      .getAllProduct()
      .subscribe((allProduct) => (this.products = allProduct));
  }
  onRatingClicked(message: string): void {
    console.log(message);
  }
}
