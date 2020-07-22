import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    const p1 = new Product(
      'xxx',
      'Test 1 5',
      1020.052,
      true,
      5,
      'www.blahblah.com'
    );
    const p2 = new Product(
      'xxy',
      'Test 2',
      30.5,
      false,
      4,
      'www.blahblah2.com'
    );
    const p3 = new Product(
      'xxz',
      'Test 3 456',
      50.78,
      true,
      3,
      'www.blahblah3.com'
    );
    this.products.push(p1, p2, p3);
  }
}
