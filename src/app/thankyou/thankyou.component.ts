import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { IntermediateService } from '../product-list/intermediate.service';


@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  previousRoute: string;

  constructor(private router: Router, location: PlatformLocation) {
    location.onPopState((event) => {
      this.router.navigateByUrl('/user-registration');
      history.back();
    });
  }
  ngOnInit() {
  }
}
