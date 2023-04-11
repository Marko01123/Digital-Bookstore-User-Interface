import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-rate-book',
  templateUrl: './rate-book.component.html',
  styleUrls: ['./rate-book.component.css']
})
export class RateBookComponent implements OnInit {

  selected!: number;
  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any, private cartItems: CartService) { }

  ngOnInit(): void {
  }

  saveRating(id: number){
    this.cartItems.addRatingById(id, this.selected);
  }
}
