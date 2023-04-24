import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  addUser(user: User) {
    return this._http.post(this.url + '/users', user);
  }

  getUsers() {
    return this._http.get<any>(this.url + '/users');
  }

  getloggedInUser(key:string) {
    return window.sessionStorage.getItem(key);
  }
  setloggedInUser(key:string,user:User) {
    window.sessionStorage.setItem(key,JSON.stringify(user));
  }
}
