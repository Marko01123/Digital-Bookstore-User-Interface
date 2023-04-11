import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any, private cartItems: CartService) { }

  ngOnInit(): void {

  }

  addBookToCart(){
    this.cartItems.addItemsToCart(this.receivedData.name, this.receivedData.genre, this.receivedData.pages, this.receivedData.writer,
      this.receivedData.publisher, this.receivedData.price, this.receivedData.date, this.receivedData.status);
  }
}
