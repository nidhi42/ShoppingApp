import { NgModule }             from '@angular/core';
import { Component } from '@angular/core';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const appRoutes: Routes = [
  {path: '',  redirectTo: '/user-registration', pathMatch: 'full'},
  {path: 'user-registration', component:UserRegistrationComponent},
  {path: 'cart', component:CartComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'thank-you', component: ThankyouComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
