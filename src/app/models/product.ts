export class Product {
  // tslint:disable-next-line: max-line-length
  constructor(
    public code: string,
    public name: string,
    public price: number,
    public available: boolean,
    public rating: number,
    public imageUrl: string
  ) {}
}
export const exampleProd: Product[] = [
  {
    code: 'xxx',
    name: 'Test 1 5',
    price: 1020.052,
    available: true,
    rating: 5,
    imageUrl: 'www.blahblah.com',
  },
  {
    code: 'xxy',
    name: 'Test 2',
    price: 30.5,
    available: false,
    rating: 4,
    imageUrl: 'www.blahblah2.com',
  },
  {
    code: 'xxz',
    name: 'Test 3 456',
    price: 50.78,
    available: true,
    rating: 3,
    imageUrl: 'www.blahblah3.com',
  },
];
