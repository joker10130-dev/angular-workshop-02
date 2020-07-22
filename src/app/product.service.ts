import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, exampleProd } from './models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // constructor(private http: HttpClient) {}
  p1 = new Product('xxx', 'Test 1 5', 1020.052, true, 5, 'www.blahblah.com');
  p2 = new Product('xxy', 'Test 2', 30.5, false, 4, 'www.blahblah2.com');
  p3 = new Product('xxz', 'Test 3 456', 50.78, true, 3, 'www.blahblah3.com');
  constructor() {}
  getAllProduct(): Observable<Product[]> {
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
    return of([this.p1, this.p2, this.p3]);
  }

  getSelectedProduct(code: string): Observable<Product> {
    return of([this.p1, this.p2, this.p3].filter((p) => p.code === code)[0]);
  }
}
