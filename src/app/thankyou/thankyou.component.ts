import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { IntermediateService } from '../product-list/intermediate.service';
import { HostListener } from '@angular/core';
import { LocationStrategy } from '@angular/common';
//import { ComponentCanDeactivate } from 'can-deactivate/component-can-deactivate';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
/* @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
  } */
export class ThankyouComponent  implements OnInit  {
  constructor(private router: Router, private location: PlatformLocation, private commonService: CommonService, private interService: IntermediateService) {
     /** 
       * prevent navigation on click of browser back button 
       */
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }

  ngOnInit() {
  }

  /** 
    * To return product list page
    */
  returnHome() {
    this.router.navigateByUrl('\product-list');
    let productList = this.commonService.onGetData("productdata");
    let registerForm = this.commonService.onGetData("logindata");
    debugger
    localStorage.clear();
    this.commonService.onSetData("productdata", productList);
    this.commonService.onSetData("logindata", registerForm);
    this.interService.onNewCartList(0);
  }
}
