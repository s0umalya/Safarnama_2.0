import { Component, Input } from '@angular/core';
import { Package } from '../models/package.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() carouselArrComp:Package[]=[]

  constructor(private router:Router){

  }

  viePackageDetails(packageName:string){
    this.router.navigate(['./packages'])
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
