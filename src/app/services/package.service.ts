import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  url = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  addPackage(tourPackage: Package) {
    return this._http.post(this.url + '/packages', tourPackage);
  }

  getPackages() {
    return this._http.get<any>(this.url + '/packages');
  }
}
