import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { IntermediateService } from '../product-list/intermediate.service';
import { Productlist } from '../product-list/productlist';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayNoRecords: boolean;
  cartListDetails: Productlist[] = [];
  originalCardDetails: Productlist[] = [];
  totalCartItem: number = 0;
  grandTotal: number = 0;
  selection = new SelectionModel<Productlist>(true, []);
  dataSource = new MatTableDataSource<Productlist>(this.cartListDetails);
  displayedColumns: string[] = ['select', 'photopath', 'name', 'description', 'price', 'quantity', 'totalPrice', 'action'];
  searchText: string;
  noData = this.dataSource.connect().pipe(map(data => data.length === 0));
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  newUserDetails: any;
  constructor(public snackBar: MatSnackBar, private router: Router, private interService: IntermediateService,
    private commonService: CommonService) {
    // console.trace();
  }
  /** 
    *  Method to handle any additional initialization tasks. 
    */
  ngOnInit() {
    let data = localStorage.getItem("cartSource");
    let userdetails = localStorage.getItem("logindata");
    this.newUserDetails = JSON.parse(userdetails);
    console.log(this.newUserDetails);
    this.cartListDetails = JSON.parse(data);
    //this.originalCardDetails = Object.assign([], this.cartListDetails);
    //if (this.originalCardDetails !== null) {
    //this.originalCardDetails.forEach((item) => {
    //  item.name = "<p class='bold'>" + item.name + "</p><p>" + item.description + "</p>";
    //});
    this.dataSource = new MatTableDataSource(this.cartListDetails);
    this.cartListDetails.forEach((item) => {
      this.grandTotal = this.grandTotal + item.totalPrice;
    });
  }



  /** 
    *  Apply search filter on cart table
    */
  applyFilter(filterValue: string) {
    if (this.cartListDetails !== null) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      this.dataSource.filter = filterValue;
      if (this.dataSource.filteredData.length == 0) {
        this.displayNoRecords = true;
      } else {
        this.displayNoRecords = false;

      }
    }
  }
  /** 
    *  select all products 
    */
  ///** Whether the number of selected elements matches the total number of rows. */
  //isAllSelected() {
  //  const numSelected = this.selection.selected.length;
  //  const numRows = this.dataSource.data.length;
  //  return numSelected === numRows;
  //}
  /** 
    *  Snackbar message to show cart item is removed 
    */
  message: string = 'Selected Product Removed From Cart !!';
  /** 
    *  Remove selected products in table 
    */
  removeSelectedRows() {
    let selected = false;
    this.selection.selected.forEach(item => {
      let index: number = this.cartListDetails.findIndex(d => d === item);
      console.log(this.cartListDetails.findIndex(d => d === item));
      this.cartListDetails.splice(index, 1);
      this.dataSource = new MatTableDataSource<Productlist>(this.cartListDetails);
      this.selection = new SelectionModel<Productlist>(true, []);
      let data = localStorage.getItem("productdata");
      let productlist = JSON.parse(data);
      let userdetails = localStorage.getItem("logindata");
      localStorage.clear();
      this.commonService.onSetData("productdata", productlist);
      this.commonService.onSetData("logindata", userdetails);
      this.commonService.onSetData("cartSource", this.cartListDetails);
      selected = true;
    });

    if (selected) {
      this.totalCartItem = 0;
      this.cartListDetails.forEach(item => {
        this.totalCartItem = this.totalCartItem + item.quantity;
      });
      this.interService.onNewCartList(this.totalCartItem);
      this.snackBar.open(this.message);
    }
  
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  //masterToggle() {
  //this.isAllSelected() ?
  //this.selection.clear() :
  //this.dataSource.data.forEach(row => this.selection.select(row));
  //}
  /** Gets the total cost of all price. */
  getTotalCost() {
    if (this.cartListDetails !== null) {
      return this.cartListDetails.map(t => t.totalPrice).reduce((acc, value) => acc + value, 0);
    }
  }
  /** 
    *  On Continue Shopping button navigate to product list page
    */
  continueShopping() {
    this.router.navigateByUrl('\product-list');
  }

  payNow() {
    localStorage.clear();
  }
}


