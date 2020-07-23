import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, exampleProd } from './models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // constructor(private http: HttpClient) {}
  p1 = new Product(
    'xxx',
    'Test 1 5',
    1020.052,
    true,
    5,
    'https://www.kindpng.com/picc/m/220-2206697_iphone-social-media-phone-png-transparent-png.png'
  );
  p2 = new Product(
    'xxy',
    'Test 2',
    30.5,
    false,
    4,
    'https://www.pngonly.com/wp-content/uploads/2017/05/Samsung-Mobile-Phone-Free-PNG-Image.png'
  );
  p3 = new Product(
    'xxz',
    'Test 3 456',
    50.78,
    true,
    3,
    'https://de.lnwfile.com/zak75d.jpg?fbclid=IwAR3xd62wneH116hmnE16usfdK1lV_hq1JX7yHvEEqIdfCd1SSo3NM8o1lxA'
  );
  constructor() {}
  getAllProduct(): Observable<Product[]> {
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
    return of([this.p1, this.p2, this.p3]);
  }

  getSelectedProduct(code: string): Observable<Product> {
    return of([this.p1, this.p2, this.p3].filter((p) => p.code === code)[0]);
  }
}
