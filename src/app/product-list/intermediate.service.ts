import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntermediateService {
  @Output() newProduct: EventEmitter<number> = new EventEmitter<number>();
  totalItems: number = 0;
  constructor() {

  }

  onNewCartList(cartitems: number) {
    this.newProduct.emit(cartitems);
    this.totalItems = cartitems;
  }
}
