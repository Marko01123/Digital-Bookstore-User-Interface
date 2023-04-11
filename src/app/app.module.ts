import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BookstoreService } from './bookstore/bookstore.service';
import { CartComponent } from './bookstore/cart/cart.component';
import { CartService } from './bookstore/cart/cart.service';
import { AddToCartComponent } from './bookstore/add-to-cart/add-to-cart.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { RateBookComponent } from './bookstore/cart/rate-book/rate-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    BookstoreComponent,
    CartComponent,
    AddToCartComponent,
    ProfileComponent,
    RateBookComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [BookstoreService, CartService, UserService, BookstoreComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddToCartComponent, ProfileComponent, RateBookComponent]
})
export class AppModule { }
