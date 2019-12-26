import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IntermediateService} from '../product-list/intermediate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalCartItem ;
  constructor(private router: Router,private interService: IntermediateService) { }
     /** 
       *  Method to handle any additional initialization tasks. 
       */
    ngOnInit() {
        this.interService.newProduct.subscribe(cartitems => {
        this.totalCartItem = cartitems;
      });
    }
   /**
     * opens cart page by navigating this url
     */ 
    openCartPage() {
      this.router.navigateByUrl('\cart');
    }
}
