import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  //@Output() getData: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
  }
  onGetData(type) {
    if (type === "productdata") {
      let prdouctData = localStorage.getItem("productdata");
    }
    if (type === "cartSource") {
      let cartData = localStorage.getItem("cartSource");
    }
    if (type === "logindata") {
      let loginData = localStorage.getItem("logindata");
    }
  }
  onSetData(type, commonData: any) {
    if (type === "productdata") {
      localStorage.setItem("productdata", JSON.stringify(commonData));
    }
    if (type === "cartSource") {
      localStorage.setItem("cartSource", JSON.stringify(commonData));
    }
    if (type === "logindata") {
      localStorage.setItem("logindata", commonData);
    }
  }
}
