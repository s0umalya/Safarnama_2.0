import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() carouselArr:Object[]=[]

  constructor(){
    console.log("From Carousel",this.carouselArr)
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
