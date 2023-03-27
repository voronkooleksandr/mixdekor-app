import { Map } from './Map';

export class CartItem {
  constructor(public map: Map) {}
  quantity: number = 1;
  price: number = this.map.price;
}
