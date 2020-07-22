import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(public service: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const prodId: string = this.route.snapshot.paramMap.get('code');
    this.service.getSelectedProduct(prodId).subscribe((p) => {
      this.product = p;
    });
  }
}
