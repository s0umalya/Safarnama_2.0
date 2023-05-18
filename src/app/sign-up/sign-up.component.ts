import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  usersList: User[] = [];
  hidePassword:boolean=true;
  hideConfPassword:boolean=true;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.signUpForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', []),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      isAdminFlag: false,
    });
  }

  addUser() {
    let user: User;
    if (
      this.signUpForm.value.password === this.signUpForm.value.confirmPassword
    ) {
      delete this.signUpForm.value.confirmPassword;
      user = this.signUpForm.value;
      this.userService.addUser(user).subscribe((res: any) => {
        alert('Added successfully!');
        this.openSnackBar('Account created successfully', 'Close');
        this.usersList.push(res);
      });
      this.signUpForm.reset();
      this.router.navigate(['sign-in']);
    }

    console.log('List', this.usersList);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
