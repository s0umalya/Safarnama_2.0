import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'dateOfBirth','email', 'phoneNumber', 'password', 'isAdminFlag','edit','delete'];
  dataSource!: MatTableDataSource<User>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private _hhtp: HttpClient, private userService: UserService) {
    this.userService.getUsers().subscribe((res: any) => {
      console.log('DATASOURCE', this.dataSource);
      this.dataSource =new MatTableDataSource(res);
    });
  }

  deleteUser(user:User){
    console.log("User",user)
    this.userService.deleteUser(user).subscribe((res:any)=>{
      console.log("User deleted successfully")
    })
  }

  
}
