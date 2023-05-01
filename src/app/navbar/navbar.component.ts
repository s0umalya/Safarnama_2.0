import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // user: any;
  // constructor(public userService: UserService) {
  //   this.user = userService.getloggedInUser('loggedInUser');
  // }
  loggedInUser: User | undefined;
  loggedInFlag: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    console.log('BEFORE', this.loggedInUser);
    this.userService.loggedInUser.subscribe((res: any) => {
      console.log('Nav Res', res);
      this.loggedInUser = res;
    });

    this.userService.loggedInFlag.subscribe((res: boolean) => {
      this.loggedInFlag = res;
      console.log('Logged In   ?    ', this.loggedInFlag);
    });
  }

  signOut() {
    this.userService.loggedInFlag.next(false);
    this.userService.loggedInUser.next({});
    this.router.navigate(['sign-in']);
    this.userService.removeLoggedInUser("loggedInUser");
  }
}
