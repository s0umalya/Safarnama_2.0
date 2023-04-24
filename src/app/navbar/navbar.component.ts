import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

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
}
