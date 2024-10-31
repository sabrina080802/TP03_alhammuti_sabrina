import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SEPHORA_PRODUCTS_MOCK } from './sephora-products.mock';

@Injectable({
  providedIn: 'root',
})
export class SephoraProductService {
  constructor() {}

  getProducts(): Observable<any[]> {
    return of(SEPHORA_PRODUCTS_MOCK);
  }
  getProductsByCategory(category: string): Observable<any[]> {
    category = category.toLowerCase().trim();
    if (category == 'toutes les catégories' || category == '')
      return this.getProducts();

    return of(
      SEPHORA_PRODUCTS_MOCK.filter(
        (x) => x.category.toLowerCase().trim() == category
      )
    );
  }

  getProductsByPrice(minPrice: number, maxPrice: number): Observable<any[]> {
    if (minPrice == 0 || maxPrice == 0) return this.getProducts();

    return of(
      SEPHORA_PRODUCTS_MOCK.filter(
        (x) => x.price < maxPrice && x.price > minPrice
      )
    );
  }

  getProductsByName(name: string): Observable<any[]> {
    name = name.toLowerCase().trim();
    if (name == null || name == '') return this.getProducts();

    return of(
      SEPHORA_PRODUCTS_MOCK.filter((x) => x.name.toLowerCase().includes(name))
    );
  }
}
