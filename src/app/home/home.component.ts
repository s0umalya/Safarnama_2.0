import { Component } from '@angular/core';
import { PackageService } from '../services/package.service';
import { Package } from '../models/package.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carouselArr:Package[]=[];

  constructor(private packageService:PackageService){
this.getPackages()
  }

  getPackages(){
    this.packageService.getPackages().subscribe((res)=>{
      console.log("Package Res",res)
    })
  }
}
