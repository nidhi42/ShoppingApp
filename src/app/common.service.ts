import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor() {
  }
  onGetData(type) {
    if (type === "productdata") {
      return localStorage.getItem("productdata");
    }
    if (type === "cartSource") {
      return localStorage.getItem("cartSource");
    }
    if (type === "logindata") {
      return localStorage.getItem("logindata");
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
