import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // constructor(private http: HttpClient) {}
  constructor() {}
  getAllProduct(): Observable<Product[]> {
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
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
    return of([p1, p2, p3]);
  }
}
