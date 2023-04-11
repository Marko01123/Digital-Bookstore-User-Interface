import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { Book } from './bookstore.model';
import { BookstoreService } from './bookstore.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit, AfterViewInit{

  displayedColumns = ["date", "name", "writer", "publisher", "genre", "pages", "rating", "price", "button"];
  bookSource = new MatTableDataSource<Book>();
  addingToCart: boolean = false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bookstoreService: BookstoreService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.bookSource.data = this.bookstoreService.getBooks();
  }

  ngAfterViewInit(){
    this.bookSource.sort = this.sort;
    this.bookSource.paginator = this.paginator;
  }

  doFilter(filterValue: string){
    this.bookSource.filter = filterValue.trim().toLowerCase();
  }

  books: Array<Book> = this.bookstoreService.getBooks(); 

  addToCart(id: number){
    this.addingToCart = true;
    const addBookToCart = this.dialog.open(AddToCartComponent, {
      data: {
        name: this.books[id].name,
        date: this.books[id].date,
        writer: this.books[id].writer,
        publisher: this.books[id].publisher,
        genre: this.books[id].genre,
        pages: this.books[id].pages,
        price: this.books[id].price,
        status: 'u toku'
      },
      disableClose: true,
      width: "20wv"
    });

    addBookToCart.afterClosed().subscribe(result => {
      this.addingToCart = false;
    });
  }
}
