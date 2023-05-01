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

  viewPackageDetails(packageName:string){
    //Just testing route. Need to update according to selected package
    this.router.navigate(['./packages'])
  }
}
