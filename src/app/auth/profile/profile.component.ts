import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      password: this.data.user.password,
      name: this.data.user.name,
      address: this.data.user.address,
      city: this.data.user.city,
      phone: this.data.user.phone,
      date: this.data.date
    };
  }

  finishEditing(form: NgForm){
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.name = this.profileForInput.name;
    this.data.user.address = this.profileForInput.address;
    this.data.user.city = this.profileForInput.city;
    this.data.user.phone = this.profileForInput.phone;

    /* console.log(this.data.user);
    console.log(UserService.userList); */
    this.isEditing = false;
  }
}
