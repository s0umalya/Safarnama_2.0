import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  dataSource:any[]=[]

  constructor(private _hhtp:HttpClient,private userService:UserService){
    this.userService.getUsers().subscribe((res:any)=>{
      this.dataSource=res;
      console.log("DATASOURCE",this.dataSource)
    })
  }


}
