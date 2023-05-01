import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  signInForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group({
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  login(){
    this.userService.getUsers().subscribe((res)=>{
      console.log("RES",res)
      const loggedInUser=res.find((ele:any)=>{
        console.log("ELEEE",ele)
        return ele.email===this.signInForm.value.email && ele.password===this.signInForm.value.password
      })
      if(loggedInUser){
        alert("Login successful");
        this.userService.loggedInUser.next(loggedInUser);
        this.userService.loggedInFlag.next(true)
        this.signInForm.reset();
        this.router.navigate(['']);
        this.userService.setloggedInUser("loggedInUser",loggedInUser);
      }
      else{
        alert("User Not Found")
      }
    })
  }
}
