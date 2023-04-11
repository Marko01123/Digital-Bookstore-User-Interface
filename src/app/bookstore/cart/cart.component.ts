import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookstoreComponent } from '../bookstore.component';
import { CartItem } from './cart.model';
import { CartService } from './cart.service';
import { RateBookComponent } from './rate-book/rate-book.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ["date", "name", "writer", "publisher", "genre", "pages", "price", "status", "buttonRate", "buttonModify", "buttonDelete"];
  cartSource = new MatTableDataSource<CartItem>();
  ratingOpened: boolean = false;

  constructor(private cartService: CartService, @Inject(BookstoreComponent) public receivedData: any, private dialog: MatDialog){ }

  ngOnInit(): void {
    this.cartSource.data = this.cartService.getItems();
  }

  ngAfterViewInit(){
    this.cartSource.sort = this.sort;
    this.cartSource.paginator = this.paginator;
  }

  doFilter(filterValue: string){
    this.cartSource.filter = filterValue.trim().toLowerCase();
  }

  cartItems: Array<CartItem> = this.cartService.getItems();

  buttonDisabledRate(id: number): boolean{
    var isDisabledRate: boolean = false;

    if(this.cartItems[id].status == 'otkazano'){
      isDisabledRate = false;
    }

    if(this.cartItems[id].status == 'pristiglo'){
      isDisabledRate = true;
    }

    if(this.cartItems[id].status == 'u toku'){
      isDisabledRate = false;
    }

    return isDisabledRate;
  }

  buttonDisabledModify(id: number) {
    var isDisabledModify: boolean = false;

    if(this.cartItems[id].status == 'otkazano'){
      isDisabledModify = true;
    }

    if(this.cartItems[id].status == 'pristiglo'){
      isDisabledModify = false;
    }

    if(this.cartItems[id].status == 'u toku'){
      isDisabledModify = true;
    }

    return isDisabledModify;
  }

  buttonDisabledDelete(id: number){
    var isDisabledDelete: boolean = false;

    if(this.cartItems[id].status == 'otkazano'){
      isDisabledDelete = false;
    }

    if(this.cartItems[id].status == 'pristiglo'){
      isDisabledDelete = true;
    }

    if(this.cartItems[id].status == 'u toku'){
      isDisabledDelete = false;
    }

    return isDisabledDelete;
  }

  totalPriceCount(): number {
    var totalPrice: number = 0;
    this.cartService.getItems().forEach(cartItem => {
      if(cartItem.status == 'u toku' || cartItem.status == 'pristiglo'){
        totalPrice = totalPrice + cartItem.price;
      }
    });
    return totalPrice;
  }

  rate(id: number){
    this.ratingOpened = true;
    const rateDialog = this.dialog.open(RateBookComponent, {
      data: {
        id: id,
        name: this.cartItems[id].name,
        rating: this.cartItems[id].rating
      },
      disableClose: true,
      width: "22vw"
    });
    
    rateDialog.afterClosed().subscribe(result =>{
      this.ratingOpened = false;
    });
  }

  modify(id: number){
    this.cartService.getItems().forEach(cartItem => {
      if(cartItem.id == id){
        if(cartItem.status == 'otkazano'){
          this.cartService.addItemsToCart(cartItem.name, cartItem.genre, cartItem.pages,
            cartItem.writer, cartItem.publisher, cartItem.price, cartItem.date, 'u toku');
        } else if (cartItem.status == 'u toku'){
          cartItem.status = 'otkazano';
        }
      }
    });
  }

  delete(id: number){
    this.cartService.getItems().splice(id, 1);
    
    this.cartService.getItems().forEach(cartItem => {
      if(id == 0){
        if(cartItem.id >= 1){
          cartItem.id--;
        }
      } else {
        if(cartItem.id > id && (this.cartService.getItems().length) - 1 > id){
          cartItem.id--;
        } else if (this.cartService.getItems().length - 1 == id){
          cartItem.id = this.cartService.getItems().length - 1;
        } 
      }
    })
  }
}
