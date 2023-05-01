import { Component } from '@angular/core';
import { PackageService } from '../services/package.service';
import { Package } from '../models/package.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  carouselArr: Package[] = [];

  constructor(private packageService: PackageService) {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getPackages().subscribe((res) => {
      this.carouselArr = this.shuffleArray(res).splice(0,5);      
    });
    console.log('Package Res', this.carouselArr);
  }

  shuffleArray(array:any) {
    var m = array.length, t, i;
 
    while (m) {    
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    } 
   return array;
 }
}
