import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var user = this.userService.getUserById(0);
    if(!this.userService.getUser(form.value.email)) {
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.email,
                                                  form.value.password,
                                                  form.value.birthDate,
                                                  form.value.name,
                                                  form.value.address,
                                                  form.value.city,
                                                  form.value.phone);
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "Korisnik sa ovom email adresom vec postoji.";
      user = this.userService.getUserById(0);
    }
  }
}
