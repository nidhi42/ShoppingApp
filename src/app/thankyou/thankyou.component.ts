import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { IntermediateService } from '../product-list/intermediate.service';
import { HostListener } from '@angular/core';
import { LocationStrategy } from '@angular/common';
//import { ComponentCanDeactivate } from 'can-deactivate/component-can-deactivate';
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
    [x: string]: any;
  //previousRoute: string;
  loading: boolean = false;

  constructor(private router: Router, private location: PlatformLocation) {
    location.onPopState(() => {
      let x = window.location.origin + "/user-registration";
      window.location.replace(x);
    });
  }
  ngOnInit() {
  }

}
