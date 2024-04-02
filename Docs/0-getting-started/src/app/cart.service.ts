import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

// start-data#define-a-cart-service
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product)
  }

  getItems(): Product[] {
    return this.items
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
  // - The addToCart() method appends a product to an array of items
  // - The getItems() method collects the items users add to the cart and returns each item with its associated quantity
  // - The clearCart() method returns an empty array of items, which empties the cart

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json')
  }
}
