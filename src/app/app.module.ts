import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppRoutingModule }     from './app.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {IntermediateService} from './product-list/intermediate.service';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ProductFilterPipe } from './product-list/product-list.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    ProductListComponent,
    CartComponent,
    HeaderComponent,
    ThankyouComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    NgbModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [UserRegistrationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
