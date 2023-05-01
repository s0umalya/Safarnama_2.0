import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router) {}
  openPackageForm() {
    this.router.navigate(['./admin/add-package']);
  }
  openUserList(){
    this.router.navigate(['./admin/user-list'])
  }
}
