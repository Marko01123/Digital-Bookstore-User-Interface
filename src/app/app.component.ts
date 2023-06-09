import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'knjizara-app';

  profileOpened: boolean = false;

  constructor(public userService: UserService, private dialog: MatDialog, private router: Router) { }

  openProfile(userId: number){
    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: { user: this.userService.getUserById(userId)}
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    });
  }

  btnClickShop(){
    this.router.navigate(['/shop']);
  }

  btnClickCart(){
    this.router.navigate(['/cart']);
  }
}
