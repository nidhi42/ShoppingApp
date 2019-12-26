import { Component, OnInit } from '@angular/core';
import { Productlist, productCategory } from './productlist';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IntermediateService } from './intermediate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  [x: string]: any;
  durationInSeconds = 5;
  constructor(public snackBar: MatSnackBar, private interService: IntermediateService) { }
  categoryType = productCategory;
  cartListItems: Productlist[] = [];
  itemData: Productlist;
  totalCartItem: number = 0;
  message: string = 'Product Added To Cart !!';
    /** 
      *  Slider Images. 
      */
  images = [1, 2, 3].map((n) => `https://picsum.photos/id/${n}/900/500`);
   /** 
     *  Product List Data. 
     */
  productlist: Productlist[] = [
    { id: 11, name: "U.S. Polo Assn. Womens Solid Polo T-Shirt", description: "Regular Fit,Round Neck,100% Cotton", quantity: 1, price: 3000, category: this.categoryType.women, photoPath: "../assets/images/product1.jpg", totalPrice: 0 },

    { id: 12, name: "Bloomun Full Sleeve Grey Compression/Inner Tops", description: "Sleeveless,Regular Fit,Round Neck,100% Cotton", quantity: 1, price: 400, category: this.categoryType.women, photoPath: "../assets/images/product2.jpg", totalPrice: 0 },

    { id: 13, name: "Pearl Beading Tiered Cuff Ribbed Cape Coat,L", description: "Sleeveless,Regular Fit,Round Neck,100% Cotton", quantity: 1, price: 1500, category: this.categoryType.men, photoPath: "../assets/images/product3.jpg", totalPrice: 0 },

    { id: 14, name: "Wildcraft Unisex 2 Compartment Zipper Closure Backpack", description: "good package,100% Cotton", quantity: 1, price: 500, category: this.categoryType.kids, photoPath: "../assets/images/product5.jpg", totalPrice: 0 },

  ];
    /** 
      *  Method to handle any additional initialization tasks. 
      */
  ngOnInit() {
    this.productlist.forEach(item => {
      item.totalPrice = item.price * item.quantity;
    });
    localStorage.setItem("productdata", JSON.stringify(this.productlist));
    let data = localStorage.getItem("productdata");
    this.productlist = JSON.parse(data);
  }
   /**
     * add products in cart 
     */ 
  addToCartClick(id) {
      let cartNewItems = localStorage.getItem("cartSource");
      if (cartNewItems !== null) {
        this.cartListItems = JSON.parse(cartNewItems);
      }
      let index = this.cartListItems.findIndex(x => x.id === id);
      if (index >= 0) {
        this.cartListItems.splice(index, 1);
      }
      this.itemData = this.productlist.find(x => x.id === id);
      this.cartListItems.push(this.itemData);
      this.snackBar.open(this.message);
      this.totalCartItem = 0;
      this.cartListItems.forEach(item => {
        this.totalCartItem = this.totalCartItem + item.quantity;
      });
      this.interService.onNewCartList(this.totalCartItem);
       let userDetails = localStorage.getItem("logindata");
      localStorage.clear();
      localStorage.setItem("productdata", JSON.stringify(this.productlist));
      localStorage.setItem("cartSource", JSON.stringify(this.cartListItems));
      localStorage.setItem("logindata", userDetails);
  }
   /**
     * increment quantity by plus button using quantity box
     */ 
  incrementCartQty(id, _quantity) {
    let qty = this.productlist.find(x => x.id === id).quantity;
    let index = this.productlist.findIndex(x => x.id === id);
    if (qty > 0 && qty < 50) {
      this.productlist[index].quantity = ++qty;
    }
    let price = this.productlist.find(x => x.id === id).price;
    this.productlist.find(x => x.id === id).totalPrice = price * qty;

  }
    /**
      * decrement quantity by plus button using quantity box
      */ 
  decrementCartQty(id, _quantity) {
    let qty = this.productlist.find(x => x.id === id).quantity;
    let index = this.productlist.findIndex(x => x.id === id);
    if (qty > 1 && qty <= 50) {
      this.productlist[index].quantity = --qty;
    }
    let price = this.productlist.find(x => x.id === id).price;
    this.productlist.find(x => x.id === id).totalPrice = price * qty;
  }

    /**
      * get products on click of categories
      */ 
  getProducts(category) {
   let data = localStorage.getItem("productdata");
    this.productlist = JSON.parse(data);
    let productData = [];
    this.productlist.forEach((item) => {
      if (item.category == category) {
        productData.push(item);
      
      }
    });
    if (productData.length != 0) {
      this.productlist = productData;
    }
   /**
     * add and remove activated class in categories
     */ 
    let listItems = document.querySelectorAll('.app-menu li');
      for (let i = 0; i < listItems.length; i++) {
        if  (listItems[i].id==category) {
           //add activated class
          listItems[i].classList.add('activated');
        }
        else{
           //remove class
           listItems[i].classList.remove('activated');
        }
      }
  }
}
